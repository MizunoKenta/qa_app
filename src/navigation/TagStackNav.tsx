import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Tag_tab} from 'screens';

const nav = createStackNavigator();
export const TagStackNav: React.FC = () => (
  <nav.Navigator initialRouteName="Tag_tab">
    <nav.Screen
      name="Tag_tab"
      component={Tag_tab}
      options={{
        headerTitle: 'Tab',
      }}
    />
  </nav.Navigator>
);
