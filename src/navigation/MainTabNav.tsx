import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {HomeStackNav} from './HomeStackNav';
import {UserStackNav} from './UserStackNav';
import {TagStackNav} from './TagStackNav';

const nav = createBottomTabNavigator();
export const MainTabNav: React.FC = () => {
  return (
    <nav.Navigator initialRouteName="Home">
      <nav.Screen
        name="Home"
        component={HomeStackNav}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <Ionicons name="md-home" size={30} color={color} />,
        }}
      />
      <nav.Screen
        name="User_tab"
        component={UserStackNav}
        options={{
          title: 'ユーザー',
          tabBarIcon: ({color}) => <Ionicons name="md-settings" size={30} color={color} />,
        }}
      />
      <nav.Screen
        name="Tag_tab"
        component={TagStackNav}
        options={{
          title: 'タグ',
          tabBarIcon: ({color}) => <Ionicons name="md-settings" size={30} color={color} />,
        }}
      />
    </nav.Navigator>
  );
};
