import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
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
`;
const MidContainer_Mid = styled.View`
  height: 70px;
  width: 100%;
  flex-direction: row;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
  align-items: center;
`;
const MidContainer_Mid_Left = styled.View`
  width: 80%;
`;
const MidContainer_Mid_Left_Text = styled.Text`
  font-size: 18px;
  margin-left: 5%;
  color: #000000;
`;
const MidContainer_Mid_Right = styled.View`
  width: 20%;
`;
const MidContainer_Mid_Right_Image = styled.Image``;
function setting({navigation}) {
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/arrow_left.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>설정</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer></ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer></TopbottomContainer>
      </TopContainer>
      <MidContainer>
        <MidContainer_Mid>
          <MidContainer_Mid_Left>
            <MidContainer_Mid_Left_Text>예약알림</MidContainer_Mid_Left_Text>
          </MidContainer_Mid_Left>
          <MidContainer_Mid_Right>
            <MidContainer_Mid_Right_Image
              source={require('../../assets/image/setting_nochk.png')}></MidContainer_Mid_Right_Image>
          </MidContainer_Mid_Right>
        </MidContainer_Mid>
        <MidContainer_Mid>
          <MidContainer_Mid_Left>
            <MidContainer_Mid_Left_Text>
              후기작성글 알림
            </MidContainer_Mid_Left_Text>
          </MidContainer_Mid_Left>
          <MidContainer_Mid_Right>
            <MidContainer_Mid_Right_Image
              source={require('../../assets/image/setting_chk.png')}></MidContainer_Mid_Right_Image>
          </MidContainer_Mid_Right>
        </MidContainer_Mid>
        <MidContainer_Mid>
          <MidContainer_Mid_Left>
            <MidContainer_Mid_Left_Text>채팅알림</MidContainer_Mid_Left_Text>
          </MidContainer_Mid_Left>
          <MidContainer_Mid_Right>
            <MidContainer_Mid_Right_Image
              source={require('../../assets/image/setting_chk.png')}></MidContainer_Mid_Right_Image>
          </MidContainer_Mid_Right>
        </MidContainer_Mid>
        <MidContainer_Mid>
          <MidContainer_Mid_Left>
            <MidContainer_Mid_Left_Text>
              공지사항 알림
            </MidContainer_Mid_Left_Text>
          </MidContainer_Mid_Left>
          <MidContainer_Mid_Right>
            <MidContainer_Mid_Right_Image
              source={require('../../assets/image/setting_nochk.png')}></MidContainer_Mid_Right_Image>
          </MidContainer_Mid_Right>
        </MidContainer_Mid>
      </MidContainer>
    </Container>
  );
}

export default setting;
