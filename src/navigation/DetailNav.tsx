import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Event_detail} from 'screens';

const nav = createStackNavigator();
export const DetailNav: React.FC = () => (
  <nav.Navigator initialRouteName="Event_detail">
    <nav.Screen
      name="Event_detail"
      component={Event_detail}
      options={{
        headerTitle: 'イベント詳細画面',
      }}
    />
  </nav.Navigator>
);
