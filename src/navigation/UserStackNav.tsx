import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {User_tab} from 'screens';

const nav = createStackNavigator();
export const UserStackNav: React.FC = () => (
  <nav.Navigator initialRouteName="User_tab">
    <nav.Screen
      name="User_tab"
      component={User_tab}
      options={{
        headerTitle: 'ユーザー',
      }}
    />
  </nav.Navigator>
);
