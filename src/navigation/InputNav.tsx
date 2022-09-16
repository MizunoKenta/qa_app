import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Event_input} from 'screens';

const nav = createStackNavigator();
export const InputNav: React.FC = () => (
  <nav.Navigator initialRouteName="Event_input">
    <nav.Screen
      name="Event_input"
      component={Event_input}
      options={{
        headerTitle: 'イベント入力画面',
      }}
    />
  </nav.Navigator>
);
