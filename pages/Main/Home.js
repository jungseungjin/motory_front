import React from 'react';
import styled from 'styled-components/native';
import {ImageBackground} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Store from './Store';
import AsyncStorage from '@react-native-community/async-storage';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';
import moment from 'moment';
const Stack = createStackNavigator();
const Container = styled.SafeAreaView`
  flex: 1;
`;
const TopContainer = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  margin-right: 10px;
  margin-left: 10px;
`;
const ToptopContainer = styled.View`
  flex: 2;
  border: 1px solid #ff00ff;
`;
const ToptoptopContainer = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
  align-items: flex-end;
  flex-direction: row;
`;
const ToptoptopTextView = styled.View`
  flex: 1;
`;
const ToptoptopText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const ToptoptopBellView = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
`;
const ToptoptopBell = styled.Image``;

const ToptopBottomTextView = styled.View`
  flex: 1;
  align-items: flex-start;
`;
const ToptopBottomText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const ToptopBottom_rightTextView = styled.View`
  flex: 1;
  align-items: flex-end;
  margin-top: 10px;
`;
const ToptopBottom_rightText = styled.Text`
  font-size: 12px;
`;

const ToptopbottomContainer = styled.View`
  flex: 2;
  align-items: flex-start;
  flex-direction: row;
`;
const TopbottomContainer = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const Topbottom_leftContainer = styled.TouchableOpacity`
  flex: 4;
  border: 1px solid #ff00ff;
`;
const Topbottom_leftText = styled.Text`
  margin: auto 0 auto 0;
`;

const Topbottom_rightContainer = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;
const Topbottom_rightText = styled.Text`
  text-align: center;
  margin: auto 0 auto 0;
`;
const MidContainer = styled.View`
  flex: 4;
`;
const MidtopContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 5px 10px 5px 10px;
  border-radius: 25px;
`;
const MidbottomContainer = styled.View`
  flex: 3;
  flex-direction: row;
`;
const MidbottomleftContainer = styled.View`
  flex: 1;
`;
const MidbottomlefttopContainer = styled.TouchableOpacity`
  flex: 2;
  border-radius: 25px;
  margin: 0px 5px 5px 10px;
`;
const MidbottomleftbottomContainer = styled.TouchableOpacity`
  flex: 3;
  border-radius: 25px;
  margin: 0px 5px 5px 10px;
`;
const MidbottomrightContainer = styled.View`
  flex: 1;
`;
const MidbottomrighttopContainer = styled.TouchableOpacity`
  flex: 3;
  border-radius: 25px;
  margin: 0px 10px 5px 5px;
`;
const MidbottomrightbottomContainer = styled.TouchableOpacity`
  flex: 2;
  border-radius: 25px;
  margin: 0px 10px 5px 5px;
`;
const TopText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  margin-left: 10px;
`;
const BottomTextView = styled.View`
  flex: 1;
`;
const BottomText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  margin-left: 10px;
`;
const TabImage = styled.Image`
  width: 100%;
  height: 100%;
  margin: auto auto;
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
function Home({navigation, route}) {
  const [user, setUser] = React.useState([]);
  const [notice, setNotice] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    //공지사항 가져오기
    //알람 가져오기 추가해야됨
    setIsLoading(true);
    let chk_notice = async function () {
      let url = Domain + 'home/1' + '?key=' + Key;
      let result = await axios.get(url);
      //알림에 대한 데이터 들어오면 수정필요할것으로 보임. 배열과 객체
      if (result.data[0].type) {
        //get방식에서 data에 type이 있으면 잘못된것
        setIsLoading(false);
        alert(result.data[0].message);
      } else {
        setNotice(result.data);
        setIsLoading(false);
      }
    };
    chk_notice();
    setIsLoading(false);
  }, []);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptoptopContainer>
            <ToptoptopTextView>
              <ToptoptopText>튜닝의순정</ToptoptopText>
            </ToptoptopTextView>
            <ToptoptopBellView
              onPress={() => {
                navigation.navigate('Alarm', route.params);
              }}>
              <ToptoptopBell
                source={require('../../assets/image/bell.png')}></ToptoptopBell>
            </ToptoptopBellView>
          </ToptoptopContainer>
          <ToptopbottomContainer>
            <ToptopBottomTextView>
              <ToptopBottomText>사장님 사무실</ToptopBottomText>
            </ToptopBottomTextView>
            <ToptopBottom_rightTextView>
              {route.params.user_name ? (
                <ToptopBottom_rightText>
                  대표 : {route.params.user_name}
                </ToptopBottom_rightText>
              ) : null}
            </ToptopBottom_rightTextView>
          </ToptopbottomContainer>
        </ToptopContainer>
        <TopbottomContainer>
          {notice.length > 0 ? (
            <>
              <Topbottom_leftContainer
                onPress={() => {
                  navigation.navigate('Notice_detail', [
                    route.params,
                    notice[0],
                  ]);
                }}
                key={notice[0]._id}>
                <Topbottom_leftText>
                  [공지사항] {notice[0].title}
                </Topbottom_leftText>
              </Topbottom_leftContainer>
              <Topbottom_rightContainer>
                <Topbottom_rightText>
                  {moment(notice[0].regDate).format('YY-MM-DD')}
                </Topbottom_rightText>
              </Topbottom_rightContainer>
            </>
          ) : (
            <>
              <Topbottom_leftContainer>
                <Topbottom_leftText>[공지사항]</Topbottom_leftText>
              </Topbottom_leftContainer>
              <Topbottom_rightContainer>
                <Topbottom_rightText>공지사항 작성일</Topbottom_rightText>
              </Topbottom_rightContainer>
            </>
          )}
        </TopbottomContainer>
      </TopContainer>
      <MidContainer>
        <MidtopContainer
          onPress={() => navigation.navigate('Store', route.params)}>
          <ImageBackground
            source={require('../../assets/image/background_1.png')}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'flex-end',
            }}
            imageStyle={{borderRadius: 15}}>
            <TopText>매장운영</TopText>
            <BottomText>Store Operation</BottomText>
          </ImageBackground>
        </MidtopContainer>
        <MidbottomContainer>
          <MidbottomleftContainer>
            <MidbottomlefttopContainer
              onPress={() => navigation.navigate('Work', route.params)}>
              <ImageBackground
                source={require('../../assets/image/background_2.png')}
                style={{
                  flex: 1,
                  resizeMode: 'cover',
                  justifyContent: 'flex-end',
                }}
                imageStyle={{borderRadius: 15}}>
                <TopText>작업관리</TopText>
                <BottomText>Work</BottomText>
                <BottomText>Management</BottomText>
              </ImageBackground>
            </MidbottomlefttopContainer>
            <MidbottomleftbottomContainer
              onPress={() => navigation.navigate('Review', route.params)}>
              <ImageBackground
                source={require('../../assets/image/background_4.png')}
                style={{
                  flex: 1,
                  resizeMode: 'cover',
                  justifyContent: 'flex-end',
                }}
                imageStyle={{borderRadius: 15}}>
                <TopText>후기관리</TopText>
                <BottomText>Review</BottomText>
                <BottomText>Management</BottomText>
              </ImageBackground>
            </MidbottomleftbottomContainer>
          </MidbottomleftContainer>
          <MidbottomrightContainer>
            <MidbottomrighttopContainer
              onPress={() => navigation.navigate('Reservation')}>
              <ImageBackground
                source={require('../../assets/image/background_3.png')}
                style={{
                  flex: 1,
                  resizeMode: 'cover',
                  justifyContent: 'flex-end',
                }}
                imageStyle={{borderRadius: 15}}>
                <TopText>예약관리</TopText>
                <BottomText>Reservation</BottomText>
                <BottomText>Management</BottomText>
              </ImageBackground>
            </MidbottomrighttopContainer>
            <MidbottomrightbottomContainer
              onPress={() => navigation.navigate('Ceo', route.params)}>
              <ImageBackground
                source={require('../../assets/image/background_5.png')}
                style={{
                  flex: 1,
                  resizeMode: 'cover',
                  justifyContent: 'flex-end',
                }}
                imageStyle={{borderRadius: 15}}>
                <TopText>사장님센터</TopText>
                <BottomText>CEO Center</BottomText>
              </ImageBackground>
            </MidbottomrightbottomContainer>
          </MidbottomrightContainer>
        </MidbottomContainer>
      </MidContainer>
      {isLoading ? (
        <Container_act>
          <ActivityIndicator color="#999999" size="large"></ActivityIndicator>
        </Container_act>
      ) : null}
    </Container>
  );
}

export default Home;
