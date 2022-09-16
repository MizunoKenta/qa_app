import {EvilIcons, Ionicons, Feather} from '@expo/vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home, Instructions, Qa_detail} from 'screens';
import { MainTabNav } from './MainTabNav';

const nav = createStackNavigator();
export const RootStackNav: React.FC = () => {
  return (
    <nav.Navigator initialRouteName={MainTabNav.name}>
      <nav.Screen name="Main" component={MainTabNav} options={{headerShown: false}} />
      <nav.Screen name="Qa_detail" component={Qa_detail} options={{headerTitle: '質問詳細'}} />
      <nav.Screen name="Instructions" component={Instructions} />
    </nav.Navigator>
  );
};
