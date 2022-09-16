import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from 'screens';
import {EvilIcons, Ionicons, Feather} from '@expo/vector-icons';
import {View, StyleSheet} from 'react-native';

const HeaderLeft: React.FC = () => {
  return (
    <View style={styles.headerLeft}>
      <EvilIcons name="search" size={30} color="white" />
    </View>
  );
};

const HeaderRight: React.FC = () => {
  return (
    <View style={styles.headerRight}>
      <Ionicons name="notifications" size={24} color="white" style={{marginRight: 20}} />
      <Feather name="settings" size={24} color="white" />
    </View>
  );
};

const nav = createStackNavigator();
export const HomeStackNav: React.FC = () => (
  <nav.Navigator initialRouteName="home">
    <nav.Screen
      name="home"
      component={Home}
      options={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#FF9800',
        },
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
      }}
    />
  </nav.Navigator>
);

const styles = StyleSheet.create({
  headerLeft: {
    margin: 10,
  },
  headerRight: {
    flexDirection: 'row',
    marginRight: 10,
  },
});

// const styles = StyleSheet.create({
//   headerRight: {
//     margin: 10,
//   },
// });
