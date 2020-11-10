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
import Domain from '../../../net/Domain';
import Key from '../../../net/Key';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

const Text = styled.Text``;

const Input = styled.TextInput`
  width: 90%;
  border: 1px solid #aaaaaa;
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
function Find_id({navigation}) {
  const [phoneInput, setPhoneInput] = React.useState(''); //휴대폰번호
  const [phoneSend, setPhoneSendInput] = React.useState(0); //휴대폰번호인증버튼 눌렀는지
  const [phoneCheckInput, setPhoneCheckInput] = React.useState(''); //휴대폰 인증값
  const [phoneCheckAuth, setPhoneCheckAuth] = React.useState(false); //휴대폰인증버튼을 눌러서 인증받았는지
  const [isLoading, setIsLoading] = React.useState(false);
  const search = async function () {
    if (phoneSend && phoneCheckAuth) {
      //휴대폰번호인증버튼 눌렀고 인증버튼눌러서 인증받았으면
      setIsLoading(true);
      let url = Domain + 'find_id/1';
      let data = {
        user_phone: phoneInput,
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
        setIsLoading(false);
        navigation.navigate('Find_id_ok', {result_data});
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
        <Title>아이디 찾기</Title>
      </TopContainer>
      <MidContainer>
        <TitleView style={{marginTop: 30}}>
          <Title>휴대폰 번호 입력</Title>
          <PhoneView style={{zIndex: -5000}}>
            {phoneInput.length === 11 && phoneSend == 0 ? (
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
                  style={{color: '#7E88E4', borderColor: '#7E88E4'}}
                  onPress={() => {
                    alert('인증번호 전송');
                    setPhoneSendInput(1);
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
                    setPhoneSendInput(phoneSend + 1);
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
              <Input
                dataDetectorTypes={'phoneNumber'}
                keyboardType={'number-pad'}
                style={{zIndex: -5000, width: '65%', borderColor: 'black'}}
                placeholder={'인증번호'}
                value={phoneCheckInput}
                onChangeText={(value) => {
                  setPhoneCheckInput(value);
                }}></Input>
              <Auth
                style={{color: 'black', borderColor: 'black'}}
                onPress={() => {
                  setPhoneCheckAuth(true);
                  alert('인증번호 확인');
                  Keyboard.dismiss();
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
          <PhoneView></PhoneView>
        </TitleView>
      </MidContainer>
      <FooterContainer>
        <FooterView>
          {phoneCheckAuth ? (
            <FooterTouch
              style={{backgroundColor: 'blue'}}
              onPress={() => {
                //등록된 휴대폰 번호를 가지고 백엔드로 들어가서 아이디,가입일 가지고 나와야함
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

export default Find_id;
