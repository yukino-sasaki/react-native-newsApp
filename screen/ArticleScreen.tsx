import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {Articles} from './HomeScreen';

type RouteProps = {
  route: {
    key: string;
    name: string;
    params: Articles;
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const ArticleScreen = (props: RouteProps) => {
  const {params} = props.route.params;
  console.log(params.url);
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        <WebView
          source={{
            uri: 'https://logrocket.com/',
          }}
          scalesPageToFit={true}
          style={{marginTop: 20}}
        />
      </Text>
    </SafeAreaView>
  );
};

export default ArticleScreen;
