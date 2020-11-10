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
import Login from '../Login';
import Domain from '../../../net/Domain';
import Key from '../../../net/Key';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

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
function Find_password_ok(props) {
  const [passwordInput, setPasswordInput] = React.useState(''); //패스워드
  const [passwordInput_chk, setPasswordInput_chk] = React.useState(false); //패스워드 정규식 확인
  const [passwordReInput, setpasswordReInput] = React.useState(''); //패스워드 체크값
  const [isLoading, setIsLoading] = React.useState(false);
  const chk_password = function (str) {
    //비밀번호 정규식 체크
    var pattern1 = /[0-9]/; // 숫자
    var pattern2 = /[a-zA-Z]/; // 문자
    var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
    if (
      !pattern1.test(str) ||
      !pattern2.test(str) ||
      !pattern3.test(str) ||
      str.length < 8
    ) {
      setPasswordInput_chk(false);
    } else {
      setPasswordInput_chk(true);
    }
  };
  const search = async function () {
    setIsLoading(true);
    if (passwordInput_chk) {
      if (passwordInput === passwordReInput) {
        console.log(props.route.params.result_data[0]);
        let url = Domain + 'change_password/1';
        let data = {
          user_id: props.route.params.result_data[0].iu_id,
          user_password: passwordInput,
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
          setIsLoading(false);
          props.navigation.navigate('Login', {});
        }
      } else {
        setIsLoading(false);
        alert('비밀번호와 비밀번호 확인은 같아야 합니다.');
      }
    } else {
      setIsLoading(false);
      alert('비밀번호형식을 지켜주세요.');
    }
  };
  return (
    <Container>
      <TopContainer>
        <GoBack
          onPress={() => {
            props.navigation.goBack();
          }}>
          <GoBackImage></GoBackImage>
        </GoBack>
        <Title>비밀번호 찾기</Title>
      </TopContainer>
      <MidContainer>
        <TitleView style={{marginTop: 30}}>
          <Title>비밀번호 재설정</Title>
          <Input
            autoCapitalize="none"
            placeholder={'비밀번호 (영문+숫자+특수문자 8~20자)'}
            value={passwordInput}
            secureTextEntry={true}
            autoCapitalize={'none'}
            onChangeText={(value) => {
              setPasswordInput(value);
              chk_password(value);
            }}></Input>
          <Input
            autoCapitalize="none"
            placeholder={'비밀번호 확인 (영문+숫자+특수문자 8~20자)'}
            value={passwordReInput}
            secureTextEntry={true}
            autoCapitalize={'none'}
            onChangeText={(value) => {
              setpasswordReInput(value);
            }}></Input>
        </TitleView>
        <TitleView></TitleView>
        <TitleView></TitleView>
      </MidContainer>
      <FooterContainer>
        <FooterView>
          {passwordInput_chk && passwordInput === passwordReInput ? (
            <FooterTouch
              style={{backgroundColor: 'blue'}}
              onPress={() => {
                search();
              }}>
              <FooterText>설정완료</FooterText>
            </FooterTouch>
          ) : (
            <FooterTouch
              onPress={() => {
                alert('비밀번호를 확인 해주세요.');
              }}>
              <FooterText>설정완료</FooterText>
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

export default Find_password_ok;
