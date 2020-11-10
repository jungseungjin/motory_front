import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 1.5;
`;
const ToptopContainer = styled.View`
  flex: 2;
  flex-direction: row;
`;

const ToptoprightContainer = styled.View`
  flex: 7;
  margin-left: 10%;
  align-items: center;
  justify-content: center;
`;
const ToptoprightrightContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  flex-direction: row;
`;
const ToptoprightrightContainer_Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
`;
const ToptoprightrightImage = styled.Image``;

const ToptoprightText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const TopbottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
// container , test 두개 선택된곳에 따라 글씨 색,border-bottom 색상 변경
const TopbottomleftContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-bottom-color: #000000;
  border-bottom-width: 2px;
`;
const TopbottomleftText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const MidContainer = styled.ScrollView`
  flex: 8;
  border-top-color: #ff00ff;
  border-top-width: 1;
  background-color: #f5f5f5;
`;
const MidmidContainer = styled.TouchableOpacity`
  height: 100px;
  margin: 10px 20px 0 20px;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidmidContainer_left = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_left_image = styled.Image`
  width: 45px;
  height: 45px;
  margin: auto;
`;
const MidmidContainer_mid = styled.View`
  flex: 5;
  margin: auto;
`;
const MidmidContainer_mid_top = styled.View`
  flex: 1;
  flex-direction: row;
`;
const MidmidContainer_mid_top_left = styled.View`
  flex: 2;
`;
const MidmidContainer_mid_top_left_text = styled.Text`
  font-weight: bold;
  margin: 0 0 0 auto;
  font-size: 15px;
`;
const MidmidContainer_mid_bottom_left_left = styled.View`
  flex: 1;
`;
const MidmidContainer_mid_bottom_left_right = styled.View`
  flex: 1;
`;
const MidmidContainer_mid_top_right = styled.View`
  flex: 8;
`;
const MidmidContainer_mid_top_right_Text = styled.Text`
  font-size: 16px;
`;
const MidmidContainer_mid_mid = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_mid_bottom = styled.View`
  flex-direction: row;
  flex: 1;
  border: 1px solid #ff00ff;
`;

const MidmidContainer_mid_top_Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const MidmidContainer_mid_mid_Text = styled.Text`
  font-size: 14px;
`;

const MidmidContainer_right = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  margin: auto;
`;
const MidmidContainer_right_Text = styled.Text`
  font-size: 10px;
  margin: auto;
`;
const MidmidContainer_right_mid = styled.View`
  background-color: red;
  width: 20px;
  height: 20px;
  margin: auto;
  border-radius: 20px;
  margin-top: 5px;
`;
const MidmidContainer_right_mid_Text = styled.Text`
  color: #ffffff;
  margin: auto;
  font-weight: bold;
  font-size: 10px;
`;
const MidmidContainer_right_mid_image = styled.Image`
  margin: auto;
  width: 20px;
  height: 20px;
`;
function Reservation_list({navigation}) {
  const [page, setPage] = React.useState(0);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptoprightContainer>
            <ToptoprightText>예약내역</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer></ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer>
          {page == 0 ? (
            <>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText>작업예정</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(1);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>작업완료</TopbottomleftText>
              </TopbottomleftContainer>
            </>
          ) : page == 1 ? (
            <>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(0);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>작업예정</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText>작업완료</TopbottomleftText>
              </TopbottomleftContainer>
            </>
          ) : null}
        </TopbottomContainer>
      </TopContainer>
      <MidContainer>
        <MidmidContainer
          onPress={() => {
            navigation.navigate('Reservation_detail');
          }}>
          <MidmidContainer_left>
            <MidmidContainer_left_image
              source={require('../../assets/image/Group24.png')}></MidmidContainer_left_image>
          </MidmidContainer_left>
          <MidmidContainer_mid>
            <MidmidContainer_mid_top></MidmidContainer_mid_top>
            <MidmidContainer_mid_top>
              <MidmidContainer_mid_top_left>
                <MidmidContainer_mid_top_left_text>
                  작업명 :{' '}
                </MidmidContainer_mid_top_left_text>
              </MidmidContainer_mid_top_left>
              <MidmidContainer_mid_top_right>
                <MidmidContainer_mid_top_right_Text>
                  G70 카나드 콘 바디킷
                </MidmidContainer_mid_top_right_Text>
              </MidmidContainer_mid_top_right>
            </MidmidContainer_mid_top>
            <MidmidContainer_mid_top>
              <MidmidContainer_mid_top_left>
                <MidmidContainer_mid_top_left_text>
                  차종 :{' '}
                </MidmidContainer_mid_top_left_text>
              </MidmidContainer_mid_top_left>
              <MidmidContainer_mid_top_right>
                <MidmidContainer_mid_top_right_Text>
                  2018년형 제네시스 G70
                </MidmidContainer_mid_top_right_Text>
              </MidmidContainer_mid_top_right>
            </MidmidContainer_mid_top>
            <MidmidContainer_mid_top>
              <MidmidContainer_mid_top_left>
                <MidmidContainer_mid_top_left_text
                  style={{fontWeight: 'normal', fontSize: 10}}>
                  예약일정 :{' '}
                </MidmidContainer_mid_top_left_text>
              </MidmidContainer_mid_top_left>
              <MidmidContainer_mid_top_right>
                <MidmidContainer_mid_top_right_Text style={{fontSize: 10}}>
                  2020년 08월 02일 10:00 ~ 12:00 고객명 : 백준열
                </MidmidContainer_mid_top_right_Text>
              </MidmidContainer_mid_top_right>
            </MidmidContainer_mid_top>
            <MidmidContainer_mid_top></MidmidContainer_mid_top>
          </MidmidContainer_mid>
        </MidmidContainer>
      </MidContainer>
    </Container>
  );
}

export default Reservation_list;
