import React from 'react';
import styled from 'styled-components/native';
import {BlurView} from '@react-native-community/blur';
const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background: #212055;
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
const ToptoprightText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`;
const MidContainer = styled.View`
  flex: 7;
  border: 1px solid #ff00ff;
`;
const MidContainer_Flex1 = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const MidContainer_Flex1_Text = styled.Text`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;
const MidContainer_Flex1_Text2 = styled.Text`
  color: #ffffff;
  font-size: 20px;
  margin-left: auto;
  margin-right: 10%;
`;
const MidContainer_Flex2 = styled.View`
  flex: 2;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidContainer_Flex2_side = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: center;
`;
const MidContainer_Flex2_side_nest = styled.View`
  width: 100;
  height: 100;
  border: 1px solid #ff00ff;
`;
const MidContainer_Flex2_side_nest_view1 = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: flex-end;
`;
const MidContainer_Flex2_side_nest_view1_text = styled.Text`
  font-size: 8px;
  font-weight: bold;
  margin-right: 4px;
`;
const MidContainer_Flex2_side_nest_view2 = styled.View`
  flex: 2;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: flex-start;
`;
const MidContainer_Flex2_side_nest_view2_text = styled.Text`
  font-size: 12px;
  color: #777777;
`;
const MidContainer_Flex2_side_nest_view3 = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: center;
`;
const MidContainer_Flex2_side_nest_view3_text = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;
const MidContainer_Flex2_center = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: center;
`;
const MidContainer_Flex2_center_image = styled.Image``;
const MidContainer_Flex3 = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: center;
`;
const BottomContainer = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;
function Reservation_detail({navigation}) {
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/arrow_left_white.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>예약세부일정</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer></ToptoprightrightContainer>
        </ToptopContainer>
      </TopContainer>
      <MidContainer>
        <MidContainer_Flex1 style={{backgroundColor: '#212055'}}>
          <MidContainer_Flex1_Text>
            에이드로 스트릭 에어댐 외 1개
          </MidContainer_Flex1_Text>
          <MidContainer_Flex1_Text2>KIA STINGER</MidContainer_Flex1_Text2>
        </MidContainer_Flex1>
        <MidContainer_Flex2>
          <MidContainer_Flex2_side>
            <MidContainer_Flex2_side_nest>
              <MidContainer_Flex2_side_nest_view2>
                <MidContainer_Flex2_side_nest_view2_text>
                  작업시작
                </MidContainer_Flex2_side_nest_view2_text>
              </MidContainer_Flex2_side_nest_view2>
              <MidContainer_Flex2_side_nest_view3>
                <MidContainer_Flex2_side_nest_view3_text>
                  09:00
                </MidContainer_Flex2_side_nest_view3_text>
              </MidContainer_Flex2_side_nest_view3>
              <MidContainer_Flex2_side_nest_view1>
                <MidContainer_Flex2_side_nest_view1_text>
                  2020년 07월 20일
                </MidContainer_Flex2_side_nest_view1_text>
              </MidContainer_Flex2_side_nest_view1>
            </MidContainer_Flex2_side_nest>
          </MidContainer_Flex2_side>
          <MidContainer_Flex2_center>
            <MidContainer_Flex2_center_image
              source={require('../../assets/image/arrow_right.png')}></MidContainer_Flex2_center_image>
          </MidContainer_Flex2_center>
          <MidContainer_Flex2_side>
            <MidContainer_Flex2_side_nest>
              <MidContainer_Flex2_side_nest_view2>
                <MidContainer_Flex2_side_nest_view2_text>
                  작업완료
                </MidContainer_Flex2_side_nest_view2_text>
              </MidContainer_Flex2_side_nest_view2>
              <MidContainer_Flex2_side_nest_view3>
                <MidContainer_Flex2_side_nest_view3_text>
                  11:00
                </MidContainer_Flex2_side_nest_view3_text>
              </MidContainer_Flex2_side_nest_view3>
              <MidContainer_Flex2_side_nest_view1>
                <MidContainer_Flex2_side_nest_view1_text>
                  2020년 07월 20일
                </MidContainer_Flex2_side_nest_view1_text>
              </MidContainer_Flex2_side_nest_view1>
            </MidContainer_Flex2_side_nest>
          </MidContainer_Flex2_side>
        </MidContainer_Flex2>
        <MidContainer_Flex3></MidContainer_Flex3>
        <MidContainer_Flex2></MidContainer_Flex2>
      </MidContainer>
      <BottomContainer></BottomContainer>
    </Container>
  );
}

export default Reservation_detail;
