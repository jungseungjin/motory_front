import * as React from 'react';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Store from './Store';
import Home from './Home';
import Work from './Work';
import Review from './Review';
import Reservation from './Reservation';
import Ceo from './CEO';
import Home_navigator from './Home_navigator';
import Chat from './Chat';
import Reserver_list from './Reservation_list';
import Setting from './Setting';
import Work_register from './Work_register';
import Work_revise from './Work_revise';
import Work_choice from './Work_choice';
import Car_choice from './Car_choice';
import Reservation_detail from './Reservation_detail';
import Alarm from './Alarm';
import Review_detail from './Review_detail';
import Notice from './Notice';
import Notice_detail from './Notice_detail';
import Feedback from './Feedback';
import Question from './Question';
import Question_detail from './Question_detail';
import Question_register from './Question_register';
import Question_revise from './Question_revise';

import Login from '../Login/Login';
import Join from '../Login/Join';
import Join_info from '../Login/Join_info';
import Join_ok from '../Login/Join_ok';
import agree_1 from '../Login/join_agree/agree_1';
import agree_2 from '../Login/join_agree/agree_2';
import agree_3 from '../Login/join_agree/agree_3';
import agree_4 from '../Login/join_agree/agree_4';
import agree_5 from '../Login/join_agree/agree_5';
import Find_id from '../Login/find/Find_id';
import Find_id_ok from '../Login/find/Find_id_ok';
import Find_password from '../Login/find/Find_password';
import Find_password_ok from '../Login/find/Find_password_ok';
import AsyncStorage from '@react-native-community/async-storage';
import {ActivityIndicator} from 'react-native';
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
function Main({navigation}) {
  const [auto, setAuto] = React.useState('');
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    let find_async = async function () {
      setIsLoading(true);
      let login_data = await AsyncStorage.getItem('login_data');
      if (login_data === null) {
        login_data = [];
        setAuto('Login');
      } else {
        login_data = await JSON.parse(login_data);
        if (login_data.autoLogin == true) {
          if (
            login_data.user_id &&
            login_data.user_password &&
            login_data.saveId
          ) {
            let url = Domain + 'login/1';
            let async_data = {
              user_id: login_data.user_id,
              user_password: login_data.user_password,
              autoLogin: login_data.autoLogin,
              saveId: login_data.saveId,
              key: Key,
            };
            let result = await axios.post(url, async_data, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if (result.data.type == 0) {
              setAuto('Login');
            } else {
              await AsyncStorage.setItem(
                'login_data',
                JSON.stringify(async_data),
              );
              let user_data = {
                _id: result.data._id,
                user_id: result.data.iu_id,
                user_name: result.data.iu_name,
              };
              setUser(user_data);
              setAuto('Home_navigator');
            }
          } else {
            setAuto('Login');
          }
          //자동로그인하고 ok되면 메인페이지로 안되면 로그인페이지로 가서 alert띄우기
        } else if (login_data.saveId == true) {
          //아이디 저장하고 로그인페이지로 이동
          setAuto('Login');
        } else {
          //아무것도 안하고 페이지만 넘김
          setAuto('Login');
        }
      }
      setIsLoading(false);
    };
    find_async();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Container_act>
          <ActivityIndicator color="#999999" size="large"></ActivityIndicator>
        </Container_act>
      ) : (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {auto == 'Login' ? (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  name="Home_navigator"
                  component={Home_navigator}
                />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Home_navigator"
                  component={Home_navigator}
                  initialParams={user}
                />
                <Stack.Screen name="Login" component={Login} />
              </>
            )}
            <Stack.Screen name="Join" component={Join} />
            <Stack.Screen name="Join_info" component={Join_info} />
            <Stack.Screen name="Join_ok" component={Join_ok} />
            <Stack.Screen name="agree_1" component={agree_1} />
            <Stack.Screen name="agree_2" component={agree_2} />
            <Stack.Screen name="agree_3" component={agree_3} />
            <Stack.Screen name="agree_4" component={agree_4} />
            <Stack.Screen name="agree_5" component={agree_5} />
            <Stack.Screen name="Find_id" component={Find_id} />
            <Stack.Screen name="Find_id_ok" component={Find_id_ok} />
            <Stack.Screen name="Find_password" component={Find_password} />
            <Stack.Screen
              name="Find_password_ok"
              component={Find_password_ok}
            />
            <Stack.Screen name="Store" component={Store} />
            <Stack.Screen name="Work" component={Work} />
            <Stack.Screen name="Work_choice" component={Work_choice} />
            <Stack.Screen name="Car_choice" component={Car_choice} />
            <Stack.Screen name="Work_register" component={Work_register} />
            <Stack.Screen name="Work_revise" component={Work_revise} />
            <Stack.Screen name="Review" component={Review} />
            <Stack.Screen name="Reservation" component={Reservation} />
            <Stack.Screen
              name="Reservation_detail"
              component={Reservation_detail}
            />
            <Stack.Screen name="Chat" component={Chat} />
            <Stack.Screen name="Ceo" component={Ceo} />
            <Stack.Screen name="Notice" component={Notice} />
            <Stack.Screen name="Notice_detail" component={Notice_detail} />
            <Stack.Screen name="Question" component={Question} />
            <Stack.Screen name="Question_detail" component={Question_detail} />
            <Stack.Screen
              name="Question_register"
              component={Question_register}
            />
            <Stack.Screen name="Question_revise" component={Question_revise} />
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="Alarm" component={Alarm} />
            <Stack.Screen name="Review_detail" component={Review_detail} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Container>
  );
}
export default Main;
