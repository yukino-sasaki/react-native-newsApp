import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import ListItem from '../components/ListItem';

const KEY = '1b6ed6c353f6489282bf54392e16471c';

export type Articles = {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  urlToImage: string;
  publishAt: string;
  content: string;
};

type RootStackParamList = {
  HomeScreen: undefined;
  Article: NavigatorScreenParams<Articles>;
};

type MainProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({navigation}: MainProps) => {
  const fetchData = async () => {
    await axios
      .get<any>(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${KEY}`,
      )
      .then(res => {
        return setArticles(res.data.articles);
      });
  };
  const [articles, setArticles] = useState([] as Articles[]);
  useEffect(() => {
    fetchData();
  }, []);

  return articles !== [] || articles ? (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({item}: Articles) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', {params: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  ) : (
    <View>no data</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    color: 'gray',
    fontSize: 12,
  },
});

export default HomeScreen;
