import React from 'react';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import Container from '../../components/Login/Container';
import TopContainer from '../../components/Login/TopContainer';
import MidContainer from '../../components/Login/MidContainer';
import FooterContainer from '../../components/Login/FooterContainer';
import FooterView from '../../components/Login/FooterView';
import FooterTouch from '../../components/Login/FooterTouch';
import FooterText from '../../components/Login/FooterText';
import Title from '../../components/Login/Title';
import GoBackImage from '../../components/Login/GoBackImage';
import GoBack from '../../components/Login/GoBack';
import Auth from '../../components/Login/Auth';
import AuthText from '../../components/Login/AuthText';
import PhoneView from '../../components/Login/PhoneView';
import Join from './Join';
import Join_ok from './Join_ok';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import {ActivityIndicator} from 'react-native';
/*
안된것
1. 휴대폰인증
3. 빨간색 경고문구 위치조정
4. 다 적어놓고 값을 다르게 했을때 체크값 -  아이디 변경시마다 체크값 변경ok 비밀번호 변경시마다 체크값 변경 ok 이메일은 체크값없이 넘기기만하고 이름도 ok 휴대폰번호는 인증이 끝나면 수정못하게막아버리기
*/
const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 8;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;

const Input = styled.TextInput`
  width: 90%;
  border: 1px solid #aaaaaa;
  padding: 3.5%;
  background-color: #ffffff;
  margin-top: 5%;
  height: 50px;
  border-radius: 5px;
`;
const InputSubView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
const InputSub = styled.TextInput`
  width: 40%;
  border: 1px solid #aaaaaa;
  padding: 3.5%;
  background-color: #ffffff;
  margin-top: 5%;
  height: 50px;
  border-radius: 5;
`;
const PicketView = styled.View`
  flex: 1;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
`;
const Text = styled.Text`
  font-size: 24px;
  margin-top: 3%;
`;
const Text_red = styled.Text`
  color: red;
  font-size: 10px;
`;
const Text_background = styled.Text`
  color: #f4f4f4;
  font-size: 10px;
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
function Join_info(props) {
  const aa = props.route.params.Agree_1;
  const bb = props.route.params.Agree_2;
  const cc = props.route.params.Agree_3;
  const dd = props.route.params.Agree_4;
  const ee = props.route.params.Agree_5;
  const [isLoading, setIsLoading] = React.useState(false);
  const [idInput, setIdInput] = React.useState(''); //아아디
  const [idCheck, setIdCheck] = React.useState(true); //아이디체크값
  const [passwordInput, setPasswordInput] = React.useState(''); //패스워드
  const [passwordCheckInput, setPasswordCheckInput] = React.useState(''); //패스워드확인
  const [passwordReInput, setpasswordReInput] = React.useState(true); //패스워드 체크값
  const [passwordReCheckInput, setpasswordReCheckInput] = React.useState(true); //패스워드확인 체크값
  const [mailInput, setMailInput] = React.useState(''); //메일 앞주소
  const [mailAddrInput, setMailAddrInput] = React.useState(''); //메일 뒷주소
  const [mailPicker, setMailPicker] = React.useState(''); //메일 선택 값
  const [nameInput, setNameInput] = React.useState(''); //이름
  const [phoneInput, setPhoneInput] = React.useState(''); //휴대폰번호
  const [phoneSend, setPhoneSendInput] = React.useState(''); //휴대폰번호인증버튼 눌렀는지
  const [phoneCheckInput, setPhoneCheckInput] = React.useState(''); //휴대폰 인증값
  const [phoneCheckAuth, setPhoneCheckAuth] = React.useState(true); //휴대폰인증버튼을 눌러서 인증받았는지
  const chk_id = async function (value) {
    var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
    if (pattern3.test(value)) {
      setIdCheck('특수문자를 사용할 수 없습니다.');
    } else {
      if (value.length > 3) {
        let url = Domain + 'chk_id?user_id=' + value + '&' + Key;
        console.log(url);
        let result = await axios.post(url);
        if (result.data.type == 1) {
          setIdCheck(1);
        } else {
          setIdCheck(result.data.message);
        }
      }
    }
  };
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
      setpasswordReInput(false);
    } else {
      setpasswordReInput(true);
    }
  };
  const join = async function () {
    setIsLoading(true);
    let url =
      Domain +
      'join?user_id=' +
      idInput +
      '&user_password=' +
      passwordInput +
      '&user_name=' +
      nameInput +
      '&user_phone=' +
      phoneInput +
      '&user_mail=' +
      mailInput +
      '@' +
      mailAddrInput +
      '&agree1=' +
      aa +
      '&agree2=' +
      bb +
      '&agree3=' +
      cc +
      '&agree4=' +
      dd +
      '&agree5=' +
      ee +
      '&' +
      Key;
    console.log(url);
    let result = await axios.post(url);
    if (result.data.type == 0) {
      //오류메시지
      setIsLoading(false);
      alert(result.data.message);
    } else {
      setIsLoading(false);
      props.navigation.navigate('Join_ok');
    }
  }; //뒷단으로 회원가입
  return (
    <Container>
      <TopContainer>
        <GoBack
          onPress={() => {
            props.navigation.goBack();
          }}>
          <GoBackImage></GoBackImage>
        </GoBack>
        <Title>필수정보 입력</Title>
      </TopContainer>
      <KeyboardAvoidingView behavior="padding" enabled>
        <Input
          placeholder={'아이디* (4~20자)'}
          value={idInput}
          maxLength={20}
          autoCapitalize="none"
          onChangeText={(value) => {
            setIdInput(value);
            chk_id(value);
          }}></Input>
        {idCheck == 1 ? (
          <Text_background>1</Text_background>
        ) : (
          <Text_red>*{idCheck}</Text_red>
        )}
        <Input
          placeholder={'비밀번호*(영문+숫자+특수문자 8~20자)'}
          value={passwordInput}
          secureTextEntry={true}
          maxLength={20}
          autoCapitalize="none"
          onChangeText={(value) => {
            setPasswordInput(value);
            chk_password(value);
          }}></Input>
        {passwordReInput == true ? (
          <Text_background>1</Text_background>
        ) : (
          <Text_red>*비밀번호 형식을 지켜주세요.</Text_red>
        )}
        <Input
          placeholder={'비밀번호 재입력*'}
          value={passwordCheckInput}
          secureTextEntry={true}
          maxLength={20}
          autoCapitalize="none"
          onChangeText={(value) => {
            setPasswordCheckInput(value);
            if (value != passwordInput) {
              //위아래 비밀번호 다름
              setpasswordReCheckInput(false);
            } else {
              setpasswordReCheckInput(true);
            }
          }}></Input>
        {passwordReCheckInput == true ? (
          <Text_background>1</Text_background>
        ) : (
          <Text_red>*비밀번호와 비밀번호 확인이 다릅니다.</Text_red>
        )}
        <InputSubView>
          <InputSub
            placeholder={'이메일주소*'}
            value={mailInput}
            autoCapitalize="none"
            onChangeText={(value) => {
              setMailInput(value);
            }}></InputSub>
          <Text>@</Text>
          {mailPicker === 'self' ? (
            <PicketView
              style={{
                backgrounColor: '#ffffff',
                border: '1px solid #aaaaaa',
                width: '90%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <InputSub
                autoCapitalize="none"
                value={mailAddrInput}
                onChangeText={(value) => {
                  setMailAddrInput(value);
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  marginBottom: 10,
                }}></InputSub>
            </PicketView>
          ) : (
            <PicketView>
              <DropDownPicker
                items={[
                  {label: '메일 선택', value: 'null'},
                  {label: '네이버', value: 'naver.com'},
                  {label: '다음', value: 'daum.net'},
                  {label: '직접 입력', value: 'self'},
                ]}
                style={{
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                defaultValue="null"
                containerStyle={{
                  border: '1px solid #aaaaaa',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                zIndex={10}
                style={{
                  backgroundColor: '#fafafa',
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                labelStyle={{
                  fontSize: 14,
                  textAlign: 'left',
                  color: '#000',
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
                onChangeItem={(value) => {
                  if (value.value == 'self') {
                    setMailAddrInput('');
                  } else {
                    setMailAddrInput(value.value);
                  }
                  setMailPicker(value.value);
                }}
              />
            </PicketView>
          )}
        </InputSubView>
        <Input
          style={{zIndex: -5000}}
          placeholder={'이름*'}
          value={nameInput}
          autoCapitalize="none"
          onChangeText={(value) => {
            setNameInput(value);
          }}></Input>
        <PhoneView style={{zIndex: -5000}}>
          <Input
            dataDetectorTypes={'phoneNumber'}
            keyboardType={'number-pad'}
            style={{zIndex: -5000, width: '65%'}}
            placeholder={'휴대폰번호*'}
            value={phoneInput}
            onChangeText={(value) => {
              setPhoneInput(value);
            }}></Input>
          {phoneInput.length === 11 ? (
            <Auth
              style={{color: '#7E88E4', borderColor: '#7E88E4'}}
              onPress={() => {
                alert('인증번호 전송');
                setPhoneSendInput(true);
                Keyboard.dismiss();
              }}>
              <AuthText style={{color: '#7E88E4'}}>인증</AuthText>
            </Auth>
          ) : (
            <Auth
              onPress={() => {
                alert('휴대폰번호를 모두 입력해주세요.');
              }}>
              <AuthText>인증</AuthText>
            </Auth>
          )}
        </PhoneView>
      </KeyboardAvoidingView>
      <FooterContainer>
        <FooterView
          style={{
            backgroundColor: '#f4f4f4',
          }}>
          {idCheck &&
          passwordReInput &&
          passwordReCheckInput &&
          mailInput &&
          mailAddrInput &&
          nameInput &&
          phoneCheckAuth &&
          idInput &&
          passwordInput &&
          passwordCheckInput &&
          phoneInput ? (
            <FooterTouch
              style={{backgroundColor: 'blue'}}
              onPress={() => {
                //axios로 백엔드에 값을 먼저 보내고 응답값을 받아서 페이지 전환
                join();
              }}>
              <FooterText>회원가입 완료</FooterText>
            </FooterTouch>
          ) : (
            <FooterTouch
              style={{
                backgroundColor: '#bdbdbd',
              }}
              onPress={() => {
                if (idCheck != 1 || !idInput) {
                  alert('아이디를 확인해주세요.');
                } else if (
                  !passwordReInput ||
                  !passwordReCheckInput ||
                  !passwordInput ||
                  !passwordCheckInput
                ) {
                  alert('비밀번호를 확인해주세요.');
                } else if (!mailInput || !mailAddrInput) {
                  alert('메일주소를 확인해주세요.');
                } else if (!nameInput) {
                  alert('이름을 확인해주세요.');
                } else if (!phoneInput) {
                  alert('휴대폰번호를 확인해주세요.');
                } else if (!phoneCheckAuth) {
                  alert('휴대폰번호 인증을 진행을 해주세요.');
                } else {
                  alert('필수정보를 모두 입력해주세요.');
                }
              }}>
              <FooterText>회원가입 완료</FooterText>
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

export default Join_info;
