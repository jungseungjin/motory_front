import React from 'react';
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
  border: 1px solid #ff00ff;
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
  border-top-width: 1px;
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
  margin-right: 5px;
`;
const MidmidContainer_left_image = styled.Image`
  width: 45px;
  height: 45px;
  margin: auto;
`;
const MidmidContainer_mid = styled.View`
  flex: 5;
  border: 1px solid #ff00ff;
  margin: auto;
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
  width: 20;
  height: 20;
`;
function Chat_list({navigation}) {
  const [page, setPage] = React.useState(0);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptoprightContainer>
            <ToptoprightText>작업관리</ToptoprightText>
          </ToptoprightContainer>
          {page == 0 ? (
            <>
              <ToptoprightrightContainer
                onPress={() => {
                  setPage(1);
                }}>
                <ToptoprightrightImage
                  source={require('../../assets/image/setting.png')}></ToptoprightrightImage>
              </ToptoprightrightContainer>
            </>
          ) : (
            <>
              <ToptoprightrightContainer>
                <ToptoprightrightContainer_Text
                  style={{color: '#63BEDB'}}
                  onPress={() => {
                    setPage(0);
                  }}>
                  취소
                </ToptoprightrightContainer_Text>
                <ToptoprightrightContainer_Text style={{color: '#FF0000'}}>
                  삭제
                </ToptoprightrightContainer_Text>
              </ToptoprightrightContainer>
            </>
          )}
        </ToptopContainer>
      </TopContainer>
      <MidContainer>
        <MidmidContainer>
          <MidmidContainer_left>
            <MidmidContainer_left_image
              source={require('../../assets/image/Group24.png')}></MidmidContainer_left_image>
          </MidmidContainer_left>
          <MidmidContainer_mid>
            <MidmidContainer_mid_top_Text>
              백준열 고객 / 차종 : 기아 스팅어
            </MidmidContainer_mid_top_Text>
            <MidmidContainer_mid_mid_Text>
              보통 에어댐에 추가적으로 립을 많이 장착하시는분
            </MidmidContainer_mid_mid_Text>
          </MidmidContainer_mid>
          <MidmidContainer_right>
            {page == 0 ? (
              <>
                <MidmidContainer_right_Text>
                  오후 8:09
                </MidmidContainer_right_Text>
                <MidmidContainer_right_mid>
                  <MidmidContainer_right_mid_Text>
                    1
                  </MidmidContainer_right_mid_Text>
                </MidmidContainer_right_mid>
              </>
            ) : (
              <MidmidContainer_right_mid_image
                source={require('../../assets/image/chat_checkbox_check.png')}></MidmidContainer_right_mid_image>
            )}
          </MidmidContainer_right>
        </MidmidContainer>
      </MidContainer>
    </Container>
  );
}

export default Chat_list;
