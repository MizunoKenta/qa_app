import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

export const Event_detail: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text h1>イベント詳細画面</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
