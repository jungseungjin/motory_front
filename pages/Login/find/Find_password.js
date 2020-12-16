import React from 'react';
import styled from 'styled-components/native';
import Container from '../../../components/Login/Container';
import TopContainer from '../../../components/Login/TopContainer';
import GoBack from '../../../components/Login/GoBack';
import GoBackImage from '../../../components/Login/GoBackImage';
import Title from '../../../components/Login/Title';
import TitleView from '../../../components/Login/TitleView';
import MidContainer from '../../../components/Login/MidContainer';
import FooterContainer from '../../../components/Login/FooterContainer';
import FooterView from '../../../components/Login/FooterView';
import FooterTouch from '../../../components/Login/FooterTouch';
import FooterText from '../../../components/Login/FooterText';
import Auth from '../../../components/Login/Auth';
import AuthText from '../../../components/Login/AuthText';
import PhoneView from '../../../components/Login/PhoneView';
import {Keyboard} from 'react-native';
import Find_password_ok from './Find_password_ok';
import Domain from '../../../net/Domain';
import Key from '../../../net/Key';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
const Input = styled.TextInput`
  width: 90%;
  border: 1px solid #000000;
  padding: 3.5%;
  background-color: #ffffff;
  margin-top: 5%;
  height: 50px;
  border-radius: 5px;
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

const PhoneView2_view = styled.View`
  flex-direction: row;
  border: 1px solid #aaaaaa;
`;

const PhoneView2_input = styled.TextInput``;
const PhoneView2_text = styled.Text``;
function Find_password({navigation}) {
  const [confirm, setConfirm] = React.useState(null);
  const [code, setCode] = React.useState(''); //휴대폰 인증값

  const [idInput, setIdInput] = React.useState(''); //아이디
  const [phoneInput, setPhoneInput] = React.useState(''); //휴대폰번호
  const [phoneSend, setPhoneSendInput] = React.useState(0); //휴대폰번호인증버튼 눌렀는지
  const [phoneCheckInput, setPhoneCheckInput] = React.useState(''); //휴대폰 인증값
  const [phoneCheckAuth, setPhoneCheckAuth] = React.useState(false); //휴대폰인증버튼을 눌러서 인증받았는지
  const [isLoading, setIsLoading] = React.useState(false);
  const [codeTime, setCodeTime] = React.useState(''); //인증번호 시간

  React.useEffect(() => {
    if (codeTime && codeTime != '00:00') {
      setTimeout(() => {
        setCodeTime(
          moment(codeTime, 'mm:ss').add(-1, 'seconds').format('mm:ss'),
        );
      }, 1000);
    }
  }, [codeTime]);
  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    try {
      console.log(phoneNumber);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (err) {
      console.log(err);
    }
  }

  async function confirmCode() {
    try {
      let result = await confirm.confirm(code);
      setPhoneCheckAuth(true);
      alert('완료');
    } catch (error) {
      setPhoneCheckAuth(false);
      alert('인증번호를 확인해주세요.');
      console.log(error);
    }
  }

  const search = async function () {
    if (phoneSend && phoneCheckAuth) {
      //휴대폰번호인증버튼 눌렀고 인증버튼눌러서 인증받았으면
      setIsLoading(true);
      let url = Domain + 'find_password/1';
      let data = {
        user_phone: phoneInput,
        user_id: idInput,
        //user_name : 인증api열면 값 추가
        key: Key,
      };
      let result = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.data.type == 0) {
        //안됨
        setIsLoading(false);
        alert(result.data.message);
      } else if (result.data.type == 1) {
        let result_data = result.data.result;
        console.log(result_data);
        setIsLoading(false);
        navigation.navigate('Find_password_ok', {result_data});
      }
    }
  };
  return (
    <Container>
      <TopContainer>
        <GoBack
          onPress={() => {
            navigation.goBack();
          }}>
          <GoBackImage></GoBackImage>
        </GoBack>
        <Title>비밀번호 찾기</Title>
      </TopContainer>
      <MidContainer>
        <TitleView style={{marginTop: 30}}>
          <Title>아이디와 휴대폰번호 입력</Title>
          <Input
            placeholder={'아이디'}
            value={idInput}
            autoCapitalize="none"
            onChangeText={(value) => {
              setIdInput(value);
            }}></Input>

          <PhoneView style={{zIndex: -5000}}>
            {phoneInput.length === 11 && phoneSend == 0 ? (
              <>
                <Input
                  dataDetectorTypes={'phoneNumber'}
                  keyboardType={'number-pad'}
                  style={{zIndex: -5000, width: '65%', borderColor: 'black'}}
                  placeholder={'휴대폰번호(숫자만 입력해주세요.)'}
                  value={phoneInput}
                  onChangeText={(value) => {
                    setPhoneInput(value);
                  }}></Input>
                <Auth
                  style={{color: '#7E88E4', borderColor: '#7E88E4'}}
                  onPress={() => {
                    let new_num = phoneInput;
                    new_num = new_num.replace(0, '');
                    signInWithPhoneNumber('+82' + new_num);
                    setPhoneSendInput(1);
                    setCodeTime(moment('0300', 'mmss').format('mm:ss'));
                    alert('인증번호 전송');
                  }}>
                  <AuthText style={{color: '#7E88E4'}}>인증</AuthText>
                </Auth>
              </>
            ) : phoneSend !== 0 ? (
              <>
                <Input
                  editable={false}
                  selectTextOnFocus={false}
                  dataDetectorTypes={'phoneNumber'}
                  keyboardType={'number-pad'}
                  style={{zIndex: -5000, width: '65%', borderColor: 'black'}}
                  placeholder={'휴대폰번호'}
                  value={phoneInput}
                  onChangeText={(value) => {
                    setPhoneInput(value);
                  }}></Input>
                <Auth
                  style={{color: 'black', borderColor: 'black'}}
                  onPress={() => {
                    let new_num = phoneInput;
                    new_num = new_num.replace(0, '');
                    signInWithPhoneNumber('+82' + new_num);
                    setPhoneSendInput(1);
                    setCodeTime(moment('0300', 'mmss').format('mm:ss'));
                    alert('인증번호 전송');
                  }}>
                  <AuthText style={{color: 'black'}}>재전송</AuthText>
                </Auth>
              </>
            ) : (
              <>
                <Input
                  dataDetectorTypes={'phoneNumber'}
                  keyboardType={'number-pad'}
                  style={{zIndex: -5000, width: '65%', borderColor: 'black'}}
                  placeholder={'휴대폰번호'}
                  value={phoneInput}
                  onChangeText={(value) => {
                    setPhoneInput(value);
                  }}></Input>
                <Auth
                  onPress={() => {
                    alert('휴대폰번호를 모두 입력해주세요.');
                  }}>
                  <AuthText>인증</AuthText>
                </Auth>
              </>
            )}
          </PhoneView>
          {phoneSend ? (
            <PhoneView>
              <PhoneView2_view
                style={{
                  marginTop: '5%',
                  zIndex: -5000,
                  width: '65%',
                  height: 50,
                  backgroundColor: '#ffffff',
                  border: '1px solid #aaaaaa',
                  borderRadius: 5,
                  borderColor: 'black',
                }}>
                <PhoneView2_input
                  style={{
                    marginLeft: '2%',
                    width: '80%',
                  }}
                  dataDetectorTypes={'phoneNumber'}
                  keyboardType={'number-pad'}
                  placeholder={'인증번호'}
                  value={code}
                  onChangeText={(value) => {
                    setCode(value);
                  }}></PhoneView2_input>
                <PhoneView2_text
                  style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    color: 'red',
                  }}>
                  {codeTime}
                </PhoneView2_text>
              </PhoneView2_view>
              <Auth
                style={{color: 'black', borderColor: 'black'}}
                onPress={() => {
                  if (codeTime != '00:00') {
                    confirmCode();
                    Keyboard.dismiss();
                  } else {
                    alert('시간초과');
                  }
                }}>
                <AuthText style={{color: 'black'}}>완료</AuthText>
              </Auth>
            </PhoneView>
          ) : (
            <PhoneView></PhoneView>
          )}
          <PhoneView></PhoneView>
          <PhoneView></PhoneView>
          <PhoneView></PhoneView>
          <PhoneView></PhoneView>
        </TitleView>
      </MidContainer>
      <FooterContainer>
        <FooterView>
          {phoneCheckAuth ? (
            <FooterTouch
              style={{backgroundColor: 'blue'}}
              onPress={() => {
                search();
              }}>
              <FooterText>다음단계</FooterText>
            </FooterTouch>
          ) : (
            <FooterTouch
              onPress={() => {
                alert('휴대폰 인증을 해주세요.');
              }}>
              <FooterText>다음단계</FooterText>
            </FooterTouch>
          )}
        </FooterView>
      </FooterContainer>
      {isLoading ? (
        <Container_act>
          <ActivityIndicator color="#999999" size="large"></ActivityIndicator>
        </Container_act>
      ) : null}
    </Container>
  );
}

export default Find_password;
