import React from 'react';
import Login from './Login';
import Join from './Join';
import Join_info from './Join_info';
import Join_ok from './Join_ok';
import agree_1 from './join_agree/agree_1';
import agree_2 from './join_agree/agree_2';
import agree_3 from './join_agree/agree_3';
import agree_4 from './join_agree/agree_4';
import agree_5 from './join_agree/agree_5';
import Find_id from './find/Find_id';
import Find_id_ok from './find/Find_id_ok';
import Find_password from './find/Find_password';
import Find_password_ok from './find/Find_password_ok';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function () {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
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
          <Stack.Screen name="Find_password_ok" component={Find_password_ok} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
