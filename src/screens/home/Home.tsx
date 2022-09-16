import {MaterialIcons, Feather, AntDesign, Ionicons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

//イベントカード
const Event: React.FC = () => {
  return (
    <View style={styles.card}>
      <Title />
      <Under />
    </View>
  );
};

const Title: React.FC = () => {
  return (
    <View style={{marginHorizontal: 24, marginTop: 16}}>
      <Text style={styles.text}>
        タイトルタイトルタイト{'\n'}
        ルタイトルタイトルタイ{'\n'}
        トルタイトルタイトル
      </Text>
    </View>
  );
};

//イベントカードの下部コンポーネント
const Under: React.FC = () => {
  return (
    <View style={styles.under}>
      <Good />
      <UserName />
      {/* <AntDesign name="user" size={24} color="black" /> */}
      <UserIcon />
    </View>
  );
};

//いいねコンポーネント
const Good: React.FC = () => {
  return (
    <View style={styles.good}>
      <MaterialIcons name="thumb-up" size={24} color="grey" style={{marginRight: 5}} />
      <Text style={{marginTop: 3}}>999</Text>
    </View>
  );
};

//ユーザーネームコンポーネント
const UserName: React.FC = () => {
  return (
    <View style={styles.username}>
      <Text style={{alignSelf: 'flex-end'}}>東洋太郎</Text>
      <Text style={{alignSelf: 'flex-end'}}>5/5</Text>
    </View>
  );
};

//ユーザアイコン（仮）
const UserIcon: React.FC = () => {
  return <View style={styles.usericon} />;
};

//「質問」の文字列
const Shitsumon: React.FC = () => {
  return <Text style={styles.shitsumon}>質問</Text>;
};

// ３つのアイコンセット
const Control_stream: React.FC = () => {
  return (
    <View style={styles.control_stream}>
      <MaterialIcons name="sort" size={24} color="black" style={{paddingRight: 39}} />
      <Feather name="filter" size={24} color="black" style={{paddingRight: 39}} />
      <AntDesign name="tago" size={24} color="black" />
    </View>
  );
};

//質問表示エリアのタイトルエリア
const Shitsumon_Title: React.FC = () => {
  return (
    <View style={styles.shitsumon_title}>
      <Shitsumon />
      <Control_stream />
    </View>
  );
};

const Qa: React.FC = () => {
  return (
    <View style={styles.qa}>
      <Qa_header />
      <Qa_title />
      <Qa_main />
      <Qa_footer />
    </View>
  );
};

const Qa_header: React.FC = () => {
  return (
    <View style={styles.qa_header}>
      <UserIcon />
      <Toyo />
    </View>
  );
};

const Toyo: React.FC = () => {
  return (
    <View style={{marginLeft: 16}}>
      <Text style={{fontSize: 24}}>東洋太郎</Text>
      <Text>5/5</Text>
    </View>
  );
};

const Qa_title: React.FC = () => {
  return (
    <View style={styles.qa_title}>
      <Text style={{fontSize: 22}}>
        タイトルタイトルタイト{'\n'}
        ルタイトルタイトルタイ{'\n'}
        トルタイトルタイトル
      </Text>
    </View>
  );
};

const Qa_main: React.FC = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 16}}>
      <Text>
        本文本文本文本文本文本文本文本文本文本文本文{'\n'}
        本文
      </Text>
    </View>
  );
};

const Qa_footer: React.FC = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Clock />
      <Footer_icon />
    </View>
  );
};

const Footer_icon: React.FC = () => {
  return (
    <View style={styles.footer_icon}>
      <MaterialIcons name="visibility" size={24} color="black" style={{marginRight: 34}} />
      <MaterialIcons name="thumb-up" size={24} color="grey" style={{marginRight: 34}} />
      <Ionicons name="chatbox-outline" size={24} color="black" style={{marginRight: 34}} />
    </View>
  );
};

const Clock: React.FC = () => {
  return (
    <View style={{flexDirection: 'row', marginTop: 50, paddingLeft: 25}}>
      <MaterialIcons name="schedule" size={16} color="grey" />
      <Text style={{fontSize: 16, textDecorationColor: 'grey'}}>10時間前</Text>
    </View>
  );
};

export const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>募集中のイベント</Text>
      <View>
        <ScrollView horizontal={true} style={styles.scroll}>
          <Event />
          <Event />
          <Event />
          <Button
            style={styles.more}
            type="clear"
            onPress={() => navigation.navigate('Qa_detail')}
            title="もっと見る"
          />
        </ScrollView>
      </View>
      <Shitsumon_Title />
      <Qa />
      <Qa />
      <Qa />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E4',
  },
  title: {
    fontSize: 24,
    marginTop: 24,
    marginLeft: 24,
    fontWeight: 'bold',
  },
  card: {
    // padding: 30,
    margin: 30,
    width: 300,
    height: 195,
    backgroundColor: 'white',
  },
  scroll: {
    height: 250,
    // backgroundColor: 'red',
  },
  text: {
    fontSize: 24,
    color: 'white',
    width: 252,
    height: 102,
    backgroundColor: 'black',
  },
  under: {
    flexDirection: 'row',
    margin: 10,
    paddingTop: 5,
  },
  good: {
    paddingTop: 25,
    flexDirection: 'row',
  },
  username: {
    paddingLeft: 100,
    paddingRight: 10,
    paddingTop: 15,
  },
  usericon: {
    backgroundColor: '#E6E6E6',
    width: 40,
    height: 40,
    borderRadius: 50,
    marginTop: 5,
  },
  more: {
    padding: 30,
    margin: 30,
    width: 300,
    height: 195,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shitsumon: {
    fontSize: 24,
    marginLeft: 24,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  control_stream: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    paddingTop: 20,
    paddingRight: 26,
  },
  shitsumon_title: {
    flexDirection: 'row',
  },
  qa: {
    height: 328,
    width: 360,
    marginTop: 24,
    marginLeft: 15,
    backgroundColor: 'white',
  },
  qa_title: {
    marginHorizontal: 24,
    marginTop: 31,
    height: 105,
    width: 312,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  qa_header: {
    flexDirection: 'row',
    paddingTop: 24,
    marginLeft: 24,
  },
  footer_icon: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 100,
  },
});
