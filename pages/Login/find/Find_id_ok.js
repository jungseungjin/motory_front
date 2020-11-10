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
import moment from 'moment';
import Login from '../Login';
import {ActivityIndicator} from 'react-native';
const NewMidContainer = styled.ScrollView`
  flex: 7;
`;
const NewMidTitleView = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const NewFooterContainer = styled.View`
  flex: 2;
`;
const Text = styled.Text`
  font-size: 14px;
`;
const TextView = styled.View`
  flex: 2;
`;
const Text2 = styled.Text`
  font-size: 28px;
`;

const TextSubView = styled.View`
  flex: 1;
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
function Find_id_ok(props) {
  const [list, setList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setIsLoading(true);
    setList(props.route.params.result_data);
    setIsLoading(false);
  });
  console.log(list);
  return (
    <Container>
      {isLoading ? (
        <Container_act>
          <ActivityIndicator color="#999999" size="large"></ActivityIndicator>
        </Container_act>
      ) : (
        <>
          <TopContainer>
            <GoBack
              onPress={() => {
                props.navigation.goBack();
              }}>
              <GoBackImage></GoBackImage>
            </GoBack>
            <Title>아이디 찾기</Title>
          </TopContainer>
          <NewMidContainer>
            <TitleView>
              <Title>아이디 찾기 인증 완료</Title>
            </TitleView>
            <TitleView>
              <Text>사장님의 튜닝의 순정 아이디입니다.</Text>
            </TitleView>
            {list.map((item) => (
              <>
                <NewMidTitleView
                  key={item._id}
                  style={{
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    paddingTop: '3%',
                    paddingBottom: '3%',
                    paddingRight: '2%',
                    paddingLeft: '2%',
                    width: '70%',
                    borderRadius: 5,
                    borderColor: '#000000',
                    borderRightWidth: 2,
                    borderLeftWidth: 2,
                    borderTopWidth: 2,
                    borderBottomWidth: 2,
                  }}>
                  <TextView>
                    <Text2>{item.iu_id}</Text2>
                  </TextView>
                  <TextSubView>
                    <Text>
                      가입일 :{' '}
                      {moment(item.iu_regdate).format('YYYY-MM-DD HH:mm')}
                    </Text>
                  </TextSubView>
                </NewMidTitleView>
              </>
            ))}
          </NewMidContainer>
          <NewFooterContainer>
            <FooterView>
              <FooterTouch
                style={{backgroundColor: 'blue', marginBottom: 10}}
                onPress={() => {
                  props.navigation.navigate('Login', {});
                }}>
                <FooterText>로그인 하기</FooterText>
              </FooterTouch>
              <FooterTouch
                style={{backgroundColor: '#5F5F5F'}}
                onPress={() => {
                  props.navigation.navigate('Find_password', {});
                }}>
                <FooterText>비밀번호 찾기</FooterText>
              </FooterTouch>
            </FooterView>
          </NewFooterContainer>
        </>
      )}
    </Container>
  );
}

export default Find_id_ok;
