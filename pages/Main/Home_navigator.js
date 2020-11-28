import React from 'react';
import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';
import Store from './Store';
import Home from './Home';
import Work from './Work';
import Review from './Review';
import Reservation from './Reservation';
import Ceo from './CEO';
import Work_register from './Work_register';
import Chat_list from './Chat_list';
import Reserver_list from './Reservation_list';
import Setting from './Setting';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator} from 'react-native';
import {Platform} from 'react-native';

import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background: #222222;
`;
const TabImage = styled.Image`
  width: 25px;
  height: 25px;
  margin: auto auto;
`;
const TabImage2 = styled.Image`
  width: 25px;
  height: 20px;
  margin: auto auto;
`;

const Container_act = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(52, 52, 52, 0.8);
  justify-content: center;
  align-items: center;
`;
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
function Home_navigator({route, navigation}) {
  const [user, setUser] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const saveTokenToDatabase = async function (token) {
    try {
      let url = Domain + 'update_token';
      let data = {
        token: token,
        key: Key,
        user_id: user._id,
      };
      let result = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.data.type == 0) {
        console.log('실패');
      } else {
        console.log('성공');
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };
  React.useEffect(() => {
    let mounted = true;
    if (route.params.user) {
      setUser(route.params.user);
    } else if (route.params) {
      setUser(route.params);
    }
    return () => (mounted = false);
  }, []);

  React.useEffect(() => {
    try {
      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        console.log(remoteMessage);
        Alert.alert(
          'A new FCM message arrived!',
          JSON.stringify(remoteMessage),
        );
      });
      return unsubscribe;
    } catch (err) {
      console.log(err);
    }
  }, []);
  React.useEffect(() => {
    // Get the device token
    if (Platform.OS == 'ios') {
      messaging()
        .getAPNSToken()
        .then((token) => {
          return saveTokenToDatabase(token);
        });
    } else {
      messaging()
        .getToken()
        .then((token) => {
          return saveTokenToDatabase(token);
        });
    }

    // Listen to whether the token changes
    return messaging().onTokenRefresh((token) => {
      saveTokenToDatabase(token);
    });
  }, []);

  return (
    <>
      {!user || isLoading ? (
        <Container_act>
          <ActivityIndicator color="#999999" size="large"></ActivityIndicator>
        </Container_act>
      ) : (
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === '홈') {
                iconName = focused //쓸게 나올지모르겠음
                  ? '../../assets/image/home.png'
                  : '../../assets/image/home.png';
                return (
                  <TabImage source={require('../../assets/image/home.png')} />
                );
              } else if (route.name === '고객채팅') {
                return (
                  <TabImage2 source={require('../../assets/image/chat.png')} />
                );
              } else if (route.name === ' ') {
                return (
                  <TabImage
                    style={{width: 30, height: 30, marginBottom: -5}}
                    source={require('../../assets/image/plus.png')}
                  />
                );
              } else if (route.name === '예약내역') {
                return (
                  <TabImage
                    source={require('../../assets/image/reservation_list.png')}
                  />
                );
              } else if (route.name === '설정') {
                return (
                  <TabImage
                    source={require('../../assets/image/setting.png')}
                  />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#AA7AB3',
            inactiveTintColor: 'black',
          }}>
          <Tab.Screen name="홈" component={Home} initialParams={user} />
          <Tab.Screen
            name="고객채팅"
            component={Chat_list}
            initialParams={user}
          />
          <Tab.Screen
            name=" "
            component={Work_register}
            initialParams={user}
            options={(navigation) => ({
              tabBarVisible: false,
            })}
          />
          <Tab.Screen
            name="예약내역"
            component={Reserver_list}
            initialParams={user}
          />
          <Tab.Screen name="설정" component={Setting} initialParams={user} />
        </Tab.Navigator>
      )}
    </>
  );
}

export default Home_navigator;
