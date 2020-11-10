import React from 'react';
import styled from 'styled-components/native';
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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import agree_1 from './join_agree/agree_1';

const MidTitle = styled.View`
  flex: 1;
`;

const MidTitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  width: 80%;
  margin: 10px auto 0 auto;
`;
const MidTitleSubText = styled.Text`
  font-weight: bold;
  width: 100%;
  margin-top: 3px;
  padding-left: 70%;
`;
const MidContents = styled.View`
  flex: 3;
`;
const MidAllAgree = styled.View`
  flex: 1;
  flex-direction: row;
  width: 90%;
  background: #e5e5e5;
  border-radius: 8px;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 5%;
`;
const MidAllAgreeText = styled.Text`
  font-weight: bold;
  margin-left: 5%;
  font-size: 16px;
`;
const MidAllAgreeSubText = styled.Text`
  color: #a0a0a0;
  font-size: 12px;
`;
const MidSellect = styled.View`
  flex: 9;
`;
const Image = styled.Image``;

const Checkbox = styled.TouchableOpacity`
  margin-right: 2.5%;
  margin-left: auto;
  padding: 2.5%;
`;
const MidSellectView = styled.View`
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;
  align-items: center;
  justify-content: flex-start;
`;
const MidSellectText = styled.Text`
  margin-left: 10px;
  font-size: 14px;
  text-decoration-line: underline;
`;
function Join({navigation}) {
  //뒤로가기대신 아이콘이나 이미지 삽입
  const [AllAgree, setAllAgree] = React.useState(false);
  const [Agree_1, setAgree_1] = React.useState(false);
  const [Agree_2, setAgree_2] = React.useState(false);
  const [Agree_3, setAgree_3] = React.useState(false);
  const [Agree_4, setAgree_4] = React.useState(false);
  const [Agree_5, setAgree_5] = React.useState(false);
  return (
    <Container>
      <TopContainer>
        <GoBack
          onPress={() => {
            navigation.goBack();
          }}>
          <GoBackImage></GoBackImage>
        </GoBack>
        <Title>회원가입</Title>
      </TopContainer>
      <MidContainer>
        <MidTitle>
          <MidTitleText>
            사장님의 사무실 이용을 위해 약관 동의가 필요합니다.
          </MidTitleText>
          <MidTitleSubText>-튜닝의순정</MidTitleSubText>
        </MidTitle>
        <MidContents>
          <MidAllAgree>
            <MidAllAgreeText>전체동의</MidAllAgreeText>
            <MidAllAgreeSubText>_선택항목까지 포함</MidAllAgreeSubText>
            <Checkbox
              onPress={() => {
                setAllAgree(!AllAgree);
                setAgree_1(!AllAgree);
                setAgree_2(!AllAgree);
                setAgree_3(!AllAgree);
                setAgree_4(!AllAgree);
                setAgree_5(!AllAgree);
              }}>
              <Image
                source={
                  AllAgree
                    ? require('../../assets/image/checkbox_check.png')
                    : require('../../assets/image/checkbox.png')
                }></Image>
            </Checkbox>
          </MidAllAgree>
          <MidSellect>
            <MidSellectView>
              <MidSellectText
                onPress={() => {
                  navigation.navigate('agree_1');
                }}>
                튜닝의순정 사장님 사무실 이용약관 동의 (필수)
              </MidSellectText>
              <Checkbox
                onPress={() => {
                  setAgree_1(!Agree_1);
                }}>
                <Image
                  source={
                    Agree_1
                      ? require('../../assets/image/checkbox_check.png')
                      : require('../../assets/image/checkbox.png')
                  }></Image>
              </Checkbox>
            </MidSellectView>
            <MidSellectView>
              <MidSellectText
                onPress={() => {
                  alert(
                    '정보통신망 이용촉진 및 정보보호 등에 관한 법률에는 만 14세미만 아동의 개인정보  수집시 법정대리인 동의를 받도록 규정하고 있으며, 만 14세 미만 아동이 법정대리인 동의없이 회원가입을 하는 경우 회원탈퇴 또는 서비스 이용이 제한 될 수 있습니다.',
                  );
                }}>
                만 14세 이상 확인 (필수)
              </MidSellectText>
              <Checkbox
                onPress={() => {
                  setAgree_2(!Agree_2);
                }}>
                <Image
                  source={
                    Agree_2
                      ? require('../../assets/image/checkbox_check.png')
                      : require('../../assets/image/checkbox.png')
                  }></Image>
              </Checkbox>
            </MidSellectView>
            <MidSellectView>
              <MidSellectText
                onPress={() => {
                  navigation.navigate('agree_3');
                }}>
                개인정보 수집이용 동의 (필수)
              </MidSellectText>
              <Checkbox
                onPress={() => {
                  setAgree_3(!Agree_3);
                }}>
                <Image
                  source={
                    Agree_3
                      ? require('../../assets/image/checkbox_check.png')
                      : require('../../assets/image/checkbox.png')
                  }></Image>
              </Checkbox>
            </MidSellectView>
            <MidSellectView>
              <MidSellectText
                onPress={() => {
                  navigation.navigate('agree_4');
                }}>
                개인정보 제3자 제공 동의 (선택)
              </MidSellectText>
              <Checkbox
                onPress={() => {
                  setAgree_4(!Agree_4);
                }}>
                <Image
                  source={
                    Agree_4
                      ? require('../../assets/image/checkbox_check.png')
                      : require('../../assets/image/checkbox.png')
                  }></Image>
              </Checkbox>
            </MidSellectView>
            <MidSellectView>
              <MidSellectText
                onPress={() => {
                  navigation.navigate('agree_5');
                }}>
                광고성 정보 수신동의 (선택)
              </MidSellectText>
              <Checkbox
                onPress={() => {
                  setAgree_5(!Agree_5);
                }}>
                <Image
                  source={
                    Agree_5
                      ? require('../../assets/image/checkbox_check.png')
                      : require('../../assets/image/checkbox.png')
                  }></Image>
              </Checkbox>
            </MidSellectView>
          </MidSellect>
        </MidContents>
      </MidContainer>
      <FooterContainer>
        <FooterView>
          {Agree_1 && Agree_2 && Agree_3 ? (
            <FooterTouch
              style={{backgroundColor: 'blue'}}
              onPress={() => {
                navigation.navigate('Join_info', {
                  Agree_1: Agree_1,
                  Agree_2: Agree_2,
                  Agree_3: Agree_3,
                  Agree_4: Agree_4,
                  Agree_5: Agree_5,
                });
              }}>
              <FooterText>다음단계</FooterText>
            </FooterTouch>
          ) : (
            <FooterTouch
              onPress={() => {
                alert('필수항목을 모두 동의해주세요.');
              }}>
              <FooterText>다음단계</FooterText>
            </FooterTouch>
          )}
        </FooterView>
      </FooterContainer>
    </Container>
  );
}

export default Join;
