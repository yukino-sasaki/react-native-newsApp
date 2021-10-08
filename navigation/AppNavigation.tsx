import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ArticleScreen from '../screen/ArticleScreen';
import HomeScreen, {Articles} from '../screen/HomeScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  Article: {article: Articles[]};
};

const RootStack = createStackNavigator<RootStackParamList>();

// const Stack = createNativeStackNavigator();

const AppNavigater: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="Article" component={ArticleScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigater;
