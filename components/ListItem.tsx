import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  author: string;
  imageUrl: string;
  title: string;
  onPress: () => void;
};

const ListItem = (props: Props) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
      <View style={styles.leftContainer}>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: props.imageUrl}}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {props.title}
        </Text>
        <Text style={styles.subtext}>{props.author}</Text>
      </View>
    </TouchableOpacity>
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

export default ListItem;
