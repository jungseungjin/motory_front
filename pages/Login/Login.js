import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import Container from '../../components/Login/Container';
import FooterView from '../../components/Login/FooterView';
import Join from './Join';
import Find_id from './find/Find_id';
import Dimenstions from '../../components/Login/Dimenstions';
import AsyncStorage from '@react-native-community/async-storage';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

const TitleView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-top: auto;
`;

const SubTitle = styled.Text`
  margin: 0 auto;
  padding-left: 17%;
  font-size: 20px;
  font-weight: bold;
`;
const LoginView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const LoginView2 = styled.View`
  flex: 1;
`;
let FindView;
if (Platform.OS == 'ios') {
  FindView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    margin-top: 30px;
  `;
} else {
  FindView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    margin-top: 50px;
  `;
}
const Input = styled.TextInput`
  width: 70%;
  height: 40px;
  background: #e5e5e5;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  margin-left: 10px;
  color: black;
  font-size: 12px;
`;
const CheckBoxView = styled.View`
  height: 25px;
  width: 100%;
  justify-content: center;
  flex-direction: row;
`;
const CheckBoxText = styled.Text`
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  background-color: black;
  width: 70%;
  height: 30px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
const LoginText = styled.Text`
  color: #e5e5e5;
  font-size: 24px;
`;
const Button2 = styled.TouchableOpacity`
  margin-right: 2%;
  margin-left: 2%;
  height: 20px;
`;
const Button2Text = styled.Text`
  color: #b0b0b0;
`;
const Button3 = styled.TouchableOpacity`
  height: 35px;
  width: 150px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  padding: 4px 6px;
  flex-direction: row;
`;

const Button3Text = styled.Text`
  margin-left: 15px;
`;
const Click = styled.TouchableOpacity``;

const Footer = styled.Text`
  font-weight: bold;
  margin-top: auto;
  margin-bottom: 10px;
`;
const Image = styled.Image``;

const Checkbox = styled.TouchableOpacity`
  margin-right: 2.5%;
  width: 20%;
  flex-direction: row;
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
function Login({navigation}) {
  const [idInput, setIdInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [autoLogin, setAutoLogin] = React.useState(false);
  const [saveId, setSaveId] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  //autoLogin, saveId 는 React.useCallback() 사용해서 asyncstorage에서 값을 가져와
  //checkbox이미지 찾아서 자동로그인, 아이디찾기에 넣어주기
  //네이버,카카오,페이스북로그인 이미지로 변경
  const search = async function () {
    try {
      setIsLoading(true);
      let url = Domain + 'login/1';
      let async_data = {
        user_id: idInput,
        user_password: passwordInput,
        autoLogin: autoLogin,
        saveId: saveId,
        key: Key,
      };
      let result = await axios.post(url, async_data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.data.type == 0) {
        setIsLoading(false);
        alert(result.data.message);
      } else {
        await AsyncStorage.setItem('login_data', JSON.stringify(async_data));
        let user = {
          _id: result.data._id,
          user_id: result.data.iu_id,
          user_name: result.data.iu_name,
        };
        setIsLoading(false);
        navigation.navigate('Home_navigator', user);
        //로그인 성공 -> 자동로그인,아이디저장 체크한값과 아이디 비밀번호를 가지고 async storage에 저장하고 메인페이지로 이동
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  React.useEffect(() => {
    let find_async = async function () {
      setIsLoading(true);
      let login_data = await AsyncStorage.getItem('login_data');
      if (login_data === null) {
        login_data = [];
      } else {
        login_data = await JSON.parse(login_data);
        if (login_data.saveId == true) {
          //아이디 저장하고 로그인페이지로 이동
          setIdInput(login_data.user_id);
          setSaveId(true);
        }
        if (login_data.autoLogin == true) {
          setAutoLogin(true);
        }
      }
      setIsLoading(false);
    };
    find_async();
  }, []);
  return (
    <Container>
      <TitleView>
        <Title>튜닝의 순정</Title>
        <SubTitle>사장님 사무실</SubTitle>
      </TitleView>
      <LoginView>
        <Input
          placeholder="아이디를 입력해주세요"
          value={idInput}
          autoCapitalize={'none'}
          onChangeText={(value) => setIdInput(value)}></Input>
        <Input
          placeholder="비밀번호를 입력해주세요"
          secureTextEntry={true}
          autoCapitalize={'none'}
          value={passwordInput}
          onChangeText={(value) => setPasswordInput(value)}></Input>
        <CheckBoxView>
          <Checkbox
            onPress={() => {
              setAutoLogin(!autoLogin);
            }}>
            <Image
              source={
                autoLogin
                  ? require('../../assets/image/checkbox_check.png')
                  : require('../../assets/image/checkbox.png')
              }></Image>
            <CheckBoxText>자동로그인</CheckBoxText>
          </Checkbox>
          <CheckBoxText> </CheckBoxText>
          <Checkbox
            onPress={() => {
              setSaveId(!saveId);
            }}>
            <Image
              source={
                saveId
                  ? require('../../assets/image/checkbox_check.png')
                  : require('../../assets/image/checkbox.png')
              }></Image>
            <CheckBoxText>아이디 저장</CheckBoxText>
          </Checkbox>
        </CheckBoxView>
        <Button
          onPress={() => {
            if (!idInput) {
              alert('아이디를 입력해주세요.');
            } else if (!passwordInput) {
              alert('비밀번호를 입력해주세요.');
            } else {
              search(idInput, passwordInput);
            }
          }}>
          <LoginText>로그인</LoginText>
        </Button>
      </LoginView>
      <LoginView2>
        <FindView>
          <Button3
            style={{backgroundColor: '#FEE500', borderRadius: 4}}
            onPress={() => {}}>
            <Image
              source={require('../../assets/image/kakaotalk_logo.png')}></Image>
            <Button3Text>카카오로그인</Button3Text>
          </Button3>
          <Button3
            style={{backgroundColor: '#1EC800', borderRadius: 4}}
            onPress={() => {}}>
            <Image
              source={require('../../assets/image/naver_logo.png')}></Image>
            <Button3Text style={{color: 'white'}}>네이버로그인</Button3Text>
          </Button3>
        </FindView>
        <FindView>
          <Button2
            onPress={() => {
              navigation.navigate('Join');
            }}>
            <Button2Text>회원가입 하기</Button2Text>
          </Button2>
          <Button2Text>|</Button2Text>
          <Button2
            onPress={() => {
              navigation.navigate('Find_id');
            }}>
            <Button2Text>아이디 찾기</Button2Text>
          </Button2>
          <Button2Text>|</Button2Text>
          <Button2
            onPress={() => {
              navigation.navigate('Find_password');
            }}>
            <Button2Text>비밀번호 찾기</Button2Text>
          </Button2>
        </FindView>
      </LoginView2>
      <FooterView></FooterView>
      {isLoading ? (
        <Container_act>
          <ActivityIndicator color="#999999" size="large"></ActivityIndicator>
        </Container_act>
      ) : null}
    </Container>
  );
}

export default Login;
