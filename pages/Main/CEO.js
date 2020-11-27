import React from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 1;
`;
const ToptopContainer = styled.View`
  flex: 2;
  flex-direction: row;
`;

const ToptopleftContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const ToptopleftImage = styled.Image`
  width: 25px;
  height: 20px;
`;
const ToptoprightContainer = styled.View`
  flex: 7;
  margin-left: 10%;
  align-items: center;
  justify-content: center;
`;
const ToptoprightrightContainer = styled.TouchableOpacity`
  flex: 2;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
`;
const ToptoprightrightText = styled.Text`
  font-size: 14px;
  color: #946aef;
`;
const ToptoprightText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const TopbottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const TopbottomleftContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const TopbottomleftContainer_left = styled.View`
  width: 50%;
`;
const TopbottomleftContainer_left_Text = styled.Text`
  font-weight: bold;
  margin-left: auto;
  margin-right: 0;
  height: 50%;
  font-size: 14px;
`;
const TopbottomleftContainer_right = styled.View`
  width: 50%;
`;
const TopbottomleftContainer_right_right = styled.View`
  width: 50%;
  height: 100%;
  border-radius: 3px;
  background: #ffc187;
  margin-left: 5%;
  align-items: center;
  justify-content: center;
`;
const TopbottomleftContainer_right_right_Text = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: #ffffff;
`;
const TopbottomrightContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const TopbottomrightContainer_right = styled.View`
  width: 60%;
`;
const TopbottomrightContainer_right_View = styled.View`
  flex: 1;
  flex-direction: row;
`;
const TopbottomrightContainer_right_View_Text = styled.Text`
  margin: auto 0 0 0;
`;
const TopbottomrightContainer_right_View_Image = styled.Image``;

const MidContainer = styled.View`
  flex: 8;
  border-top-color: #eeeeee;
  border-top-width: 2px;
`;
const MidmidContainer = styled.View`
  flex: 1;
  margin: 20px 40px 0 40px;
  border: 1px solid #000000;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
const MidmidContainer_Text_View = styled.TouchableOpacity`
  width: 50%;
  height: 60%;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: center;
`;
const MidmidContainer_Text = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #000000;
`;
const MidBottomContainer = styled.View`
  flex: 1;
  margin: 20px 20px 0 20px;
  justify-content: center;
  align-items: center;
`;
const MidBottomContainer_View = styled.View`
  flex: 1;
`;
const MidBottomContainer_View_bottom = styled.View`
  flex: 1;
  flex-direction: row;
`;
const MidBottomContainer_View_left = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const MidBottomContainer_View_left_button = styled.TouchableOpacity`
  height: 50%;
  width: 95%;
  border-radius: 5px;
  background: #d9c1ed;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const MidBottomContainer_View_left_button_Image = styled.Image``;
const MidBottomContainer_View_left_button_Text = styled.Text``;
const MidBottomContainer_View_right = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const MidBottomContainer_View_right_button = styled.TouchableOpacity`
  height: 50%;
  width: 95%;
  border-radius: 5px;
  background: #fddc3f;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const MidBottomContainer_View_right_button_Image = styled.Image``;
const MidBottomContainer_View_right_button_Text = styled.Text``;
const MidBottomContainer_View_Text = styled.Text``;
function CEO({navigation, route}) {
  const [page, setPage] = React.useState(0);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/arrow_left.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>사장님센터</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer></ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer></TopbottomContainer>
      </TopContainer>
      <MidContainer>
        <MidmidContainer>
          <MidmidContainer_Text_View
            onPress={() => {
              navigation.navigate('Notice', route.params);
            }}>
            <MidmidContainer_Text adjustsFontSizeToFit>
              공지사항
            </MidmidContainer_Text>
          </MidmidContainer_Text_View>
        </MidmidContainer>
        <MidmidContainer>
          <MidmidContainer_Text_View
            onPress={() => {
              navigation.navigate('Question', route.params);
            }}>
            <MidmidContainer_Text adjustsFontSizeToFit>
              1대1문의
            </MidmidContainer_Text>
          </MidmidContainer_Text_View>
        </MidmidContainer>
        <MidmidContainer>
          <MidmidContainer_Text_View
            onPress={() => {
              navigation.navigate('Feedback', route.params);
            }}>
            <MidmidContainer_Text adjustsFontSizeToFit>
              튜닝의순정에게
            </MidmidContainer_Text>
            <MidmidContainer_Text adjustsFontSizeToFit>
              피드백주기
            </MidmidContainer_Text>
          </MidmidContainer_Text_View>
        </MidmidContainer>
        <MidBottomContainer>
          <MidBottomContainer_View
            style={{justifyContent: 'center', alignItems: 'center'}}>
            <MidBottomContainer_View_Text
              style={{fontSize: 20, fontWeight: 'bold'}}>
              튜닝의순정 고객센터
            </MidBottomContainer_View_Text>
            <MidBottomContainer_View_Text>
              오전 9시 ~ 오후 6시
            </MidBottomContainer_View_Text>
          </MidBottomContainer_View>
          <MidBottomContainer_View_bottom>
            <MidBottomContainer_View_left>
              <MidBottomContainer_View_left_button
                onPress={() => {
                  Linking.openURL('tel:01027655361');
                }}>
                <MidBottomContainer_View_left_button_Image
                  source={require('../../assets/image/ceo_call.png')}></MidBottomContainer_View_left_button_Image>
                <MidBottomContainer_View_left_button_Text>
                  010-2765-5361
                </MidBottomContainer_View_left_button_Text>
              </MidBottomContainer_View_left_button>
            </MidBottomContainer_View_left>
            <MidBottomContainer_View_right>
              <MidBottomContainer_View_right_button
                onPress={() => {
                  alert('gd');
                }}>
                <MidBottomContainer_View_right_button_Image
                  source={require('../../assets/image/ceo_chat.png')}></MidBottomContainer_View_right_button_Image>
                <MidBottomContainer_View_right_button_Text>
                  카카오톡 상담
                </MidBottomContainer_View_right_button_Text>
              </MidBottomContainer_View_right_button>
            </MidBottomContainer_View_right>
          </MidBottomContainer_View_bottom>
        </MidBottomContainer>
      </MidContainer>
    </Container>
  );
}

export default CEO;
