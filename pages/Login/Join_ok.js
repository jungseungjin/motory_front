import React from 'react';
import styled from 'styled-components/native';
import Login from './Login';
import TitleView from '../../components/Login/TitleView';
import FooterContainer from '../../components/Login/FooterContainer';
import FooterView from '../../components/Login/FooterView';
import FooterTouch from '../../components/Login/FooterTouch';
import FooterText from '../../components/Login/FooterText';
import Container from '../../components/Login/Container';
import MidContainer from '../../components/Login/MidContainer';

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
const FooterTouch2 = styled.TouchableOpacity`
  flex: 1;
  width: 35%;
  justify-content: center;
  align-items: center;
`;
const FooterTouch2Text = styled.Text`
  color: blue;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
const MidText = styled.Text`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
const BottomText = styled.Text`
  font-size: 15px;
  font-weight: normal;
  text-align: center;
`;
function Join_ok(props) {
  return (
    <Container>
      <TitleView>
        <Title>튜닝의 순정</Title>
        <SubTitle>사장님 사무실</SubTitle>
      </TitleView>
      <TitleView
        style={{
          width: '90%',
          marginTop: 30,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <MidText>사장님의 사무실 입주를 축하드립니다</MidText>
      </TitleView>
      <TitleView
        style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
        <BottomText>
          긍정적이고 열린 튜닝문화를 만들어, 사장님들의 숙력된 기술과 노하우가
          모두에게 인정받고 정당한 가치를 받을 수 있는 환경을 만들기 위해
          노력하겠습니다.
        </BottomText>
      </TitleView>
      <FooterContainer>
        <FooterView
          style={{
            backgroundColor: '#f4f4f4',
          }}>
          <FooterTouch
            style={{backgroundColor: 'blue'}}
            onPress={() => {
              props.navigation.navigate('Login', {});
            }}>
            <FooterText>로그인 하기</FooterText>
          </FooterTouch>
        </FooterView>
      </FooterContainer>
      <FooterContainer
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FooterTouch2
          onPress={() => {
            props.navigation.navigate('Login', {});
          }}>
          <FooterTouch2Text>다시 로그인 첫화면으로 이동!</FooterTouch2Text>
        </FooterTouch2>
      </FooterContainer>
    </Container>
  );
}

export default Join_ok;
