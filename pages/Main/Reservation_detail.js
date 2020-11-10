import React from 'react';
import styled from 'styled-components/native';
import DialogInput from 'react-native-dialog-input';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 1;
  flex-direction: row;
  background: #212055;
  z-index: 5;
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
const MidContainer = styled.ScrollView`
  flex: 7;
  border: 1px solid #ff00ff;
`;
const MidContainer_1 = styled.View`
  height: 150;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidContainer_1_View = styled.View`
  border: 1px solid #ff00ff;
  flex: 3;
`;
const MidContainer_1_View_Top = styled.View`
  border: 1px solid #ff00ff;
  flex: 1;
`;
const MidContainer_1_View_Top_Text = styled.Text`
  color: #777777;
  margin: auto auto 0 0;
  font-size: 14px;
`;
const MidContainer_1_View_Mid = styled.View`
  border: 1px solid #ff00ff;
  flex: 1;
`;
const MidContainer_1_View_Mid_Text = styled.Text`
  font-weight: bold;
  font-size: 40px;
  margin: 0 0 0 auto;
`;
const MidContainer_1_View_Bottom = styled.View`
  border: 1px solid #ff00ff;
  flex: 1;
`;
const MidContainer_1_View_Bottom_Text = styled.Text`
  margin: 0 0 0 auto;
  font-size: 10px;
`;
const MidContainer_1_center_View = styled.View`
  border: 1px solid #ff00ff;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const MidContainer_1_center_View_Image = styled.Image``;
const MidContainer_2 = styled.View`
  height: 200;
`;
const MidContainer_2_View = styled.View`
  flex: 1;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  flex-direction: row;
`;
const MidContainer_2_View_left_Text = styled.Text`
  color: #777777;
`;
const MidContainer_2_View_right_Text = styled.Text`
  color: #000000;
  font-weight: bold;
`;
const MidContainer_3 = styled.View`
  height: 160;
`;
const MidContainer_3_View_Top = styled.View`
  flex: 1;
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
`;
const MidContainer_3_View_Top_Image = styled.Image``;
const MidContainer_3_View_Top_Text = styled.Text`
  color: #000000;
`;
const MidContainer_3_View_Bottom = styled.View`
  flex: 3;
  width: 90%;
  margin: 0 auto;
`;
const MidContainer_3_View_Bottom_TextInput = styled.TextInput`
  border: 1px solid #000000;
  border-radius: 2px;
  height: 120;
  font-size: 14px;
`;
const MidContainer_4 = styled.View`
  margin-top: 20px;
  height: 350;
  border: 1px solid #126753;
`;
const MidContainer_4_View_Top = styled.View`
  width: 90%;
  height: 30;
  margin: 0 auto;
  border-bottom-color: #000000;
  border-bottom-width: 2;
`;
const MidContainer_4_View_Top_Text = styled.Text`
  color: #000000;
`;
const MidContainer_4_View_Mid = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-top: 20;
  height: 100;
  flex-direction: row;
`;
const MidContainer_4_View_Mid_Left = styled.View`
  border: 1px solid #ff00ff;
  width: 40%;
  justify-content: center;
  align-items: center;
`;
const MidContainer_4_View_Mid_Left_Image = styled.Image``;
const MidContainer_4_View_Mid_Right = styled.View`
  border: 1px solid #ff00ff;
  width: 60%;
`;
const MidContainer_4_View_Mid_Right_View = styled.View`
  height: 25;
  flex-direction: row;
`;
const MidContainer_4_View_Mid_Right_View_Text = styled.Text`
  font-weight: bold;
`;
const MidContainer_4_View_Mid_Right_View_Text2 = styled.Text``;
const BottomContainer = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidContainer_4_View_Bottom_Top = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 50;
  margin-top: 10;
  border: 1px solid #ff00ff;
`;
const MidContainer_4_View_Bottom_Top_Top = styled.View`
  height: 20;
  border: 1px solid #ff00ff;
`;
const MidContainer_4_View_Bottom_Top_Top_Text = styled.Text`
  color: #777777;
`;
const MidContainer_4_View_Bottom_Top_Bottom = styled.View`
  height: 30;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidContainer_4_View_Bottom_Top_Bottom_Text = styled.Text`
  color: #000000;
  font-weight: bold;
`;
const MidContainer_4_View_Bottom_Bottom = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 50;
  margin-top: 10;
  border-top-color: #cbcbcb;
  border-top-width: 1;
`;
const MidContainer_4_View_Bottom_Bottom_Text1 = styled.Text`
  color: #777777;
  margin-left: auto;
  margin-right: 0;
`;
const MidContainer_4_View_Bottom_Bottom_Text2 = styled.Text`
  font-weight: bold;
  margin-left: auto;
  margin-right: 0;
`;
const BottomleftContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2d61e9;
`;
const BottomleftText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;
const BottomrightContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #5f5f5f;
`;
const BottomrightText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;
function Reservation_detail({navigation}) {
  const [showDialog, setShowDialog] = React.useState(false);
  const [sendInput, setSendInput] = React.useState('');

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
        <MidContainer_1>
          <MidContainer_1_center_View></MidContainer_1_center_View>
          <MidContainer_1_View>
            <MidContainer_1_View_Top>
              <MidContainer_1_View_Top_Text>
                작업시작
              </MidContainer_1_View_Top_Text>
            </MidContainer_1_View_Top>
            <MidContainer_1_View_Mid>
              <MidContainer_1_View_Mid_Text>13:00</MidContainer_1_View_Mid_Text>
            </MidContainer_1_View_Mid>
            <MidContainer_1_View_Bottom>
              <MidContainer_1_View_Bottom_Text>
                2020년 07월 17일
              </MidContainer_1_View_Bottom_Text>
            </MidContainer_1_View_Bottom>
          </MidContainer_1_View>
          <MidContainer_1_center_View>
            <MidContainer_1_center_View_Image
              source={require('../../assets/image/arrow_right.png')}></MidContainer_1_center_View_Image>
          </MidContainer_1_center_View>
          <MidContainer_1_View>
            <MidContainer_1_View_Top>
              <MidContainer_1_View_Top_Text>
                작업완료
              </MidContainer_1_View_Top_Text>
            </MidContainer_1_View_Top>
            <MidContainer_1_View_Mid>
              <MidContainer_1_View_Mid_Text>15:00</MidContainer_1_View_Mid_Text>
            </MidContainer_1_View_Mid>
            <MidContainer_1_View_Bottom>
              <MidContainer_1_View_Bottom_Text>
                2020년 07월 17일
              </MidContainer_1_View_Bottom_Text>
            </MidContainer_1_View_Bottom>
          </MidContainer_1_View>
          <MidContainer_1_center_View></MidContainer_1_center_View>
        </MidContainer_1>
        <MidContainer_2>
          <MidContainer_2_View
            style={{borderBottomWidth: 1, borderBottomColor: '#000000'}}>
            <MidContainer_2_View_right_Text>
              예약 정보
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
          <MidContainer_2_View>
            <MidContainer_2_View_left_Text>
              예약자명{'  '}
            </MidContainer_2_View_left_Text>
            <MidContainer_2_View_right_Text>
              백준열
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
          <MidContainer_2_View>
            <MidContainer_2_View_left_Text>
              차종{'  '}
            </MidContainer_2_View_left_Text>
            <MidContainer_2_View_right_Text>
              기아 스팅어, 2.0T, 2018년형~현재
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
          <MidContainer_2_View>
            <MidContainer_2_View_left_Text>
              차량번호{'  '}
            </MidContainer_2_View_left_Text>
            <MidContainer_2_View_right_Text>
              15너 2551
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
          <MidContainer_2_View>
            <MidContainer_2_View_left_Text>
              휴대폰번호{'  '}
            </MidContainer_2_View_left_Text>
            <MidContainer_2_View_right_Text>
              01012345678
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
          <MidContainer_2_View>
            <MidContainer_2_View_left_Text>
              결제방식{'  '}
            </MidContainer_2_View_left_Text>
            <MidContainer_2_View_right_Text>
              현장 카드결제
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
        </MidContainer_2>
        <MidContainer_3>
          <MidContainer_3_View_Top>
            <MidContainer_3_View_Top_Image
              source={require('../../assets/image/request_memo.png')}></MidContainer_3_View_Top_Image>
            <MidContainer_3_View_Top_Text>
              {'  '}
              요청사항
            </MidContainer_3_View_Top_Text>
          </MidContainer_3_View_Top>
          <MidContainer_3_View_Bottom>
            <MidContainer_3_View_Bottom_TextInput
              placeholder={
                '사장님이 작업에 필요한 고객님께 요청한 사항(ex. 페인트코드 등)이 있다면 꼭 적어주세요.'
              }
              multiline={true}
              textAlignVertical={'top'}></MidContainer_3_View_Bottom_TextInput>
          </MidContainer_3_View_Bottom>
        </MidContainer_3>
        <MidContainer_4>
          <MidContainer_4_View_Top>
            <MidContainer_4_View_Top_Text>
              작업 정보
            </MidContainer_4_View_Top_Text>
          </MidContainer_4_View_Top>
          <MidContainer_4_View_Mid>
            <MidContainer_4_View_Mid_Left>
              <MidContainer_4_View_Mid_Left_Image
                style={{width: '100%', height: 90}}
                resizeMode={'stretch'}
                source={require('../../assets/image/image8.png')}></MidContainer_4_View_Mid_Left_Image>
            </MidContainer_4_View_Mid_Left>
            <MidContainer_4_View_Mid_Right>
              <MidContainer_4_View_Mid_Right_View>
                <MidContainer_4_View_Mid_Right_View_Text>
                  가게상호명{' '}
                </MidContainer_4_View_Mid_Right_View_Text>
                <MidContainer_4_View_Mid_Right_View_Text2>
                  MOTOToooo
                </MidContainer_4_View_Mid_Right_View_Text2>
              </MidContainer_4_View_Mid_Right_View>
              <MidContainer_4_View_Mid_Right_View>
                <MidContainer_4_View_Mid_Right_View_Text>
                  대표명{' '}
                </MidContainer_4_View_Mid_Right_View_Text>
                <MidContainer_4_View_Mid_Right_View_Text2>
                  MOTOToooo
                </MidContainer_4_View_Mid_Right_View_Text2>
              </MidContainer_4_View_Mid_Right_View>
              <MidContainer_4_View_Mid_Right_View>
                <MidContainer_4_View_Mid_Right_View_Text>
                  전화번호{' '}
                </MidContainer_4_View_Mid_Right_View_Text>
                <MidContainer_4_View_Mid_Right_View_Text2>
                  MOTOToooo
                </MidContainer_4_View_Mid_Right_View_Text2>
              </MidContainer_4_View_Mid_Right_View>
              <MidContainer_4_View_Mid_Right_View>
                <MidContainer_4_View_Mid_Right_View_Text>
                  주소{' '}
                </MidContainer_4_View_Mid_Right_View_Text>
                <MidContainer_4_View_Mid_Right_View_Text2>
                  MOTOToooo
                </MidContainer_4_View_Mid_Right_View_Text2>
              </MidContainer_4_View_Mid_Right_View>
            </MidContainer_4_View_Mid_Right>
          </MidContainer_4_View_Mid>
          <MidContainer_4_View_Bottom_Top>
            <MidContainer_4_View_Bottom_Top_Top>
              <MidContainer_4_View_Bottom_Top_Top_Text>
                작업명
              </MidContainer_4_View_Bottom_Top_Top_Text>
            </MidContainer_4_View_Bottom_Top_Top>
            <MidContainer_4_View_Bottom_Top_Bottom>
              <MidContainer_4_View_Bottom_Top_Bottom_Text>
                에이드로 스트릭 에어댐
              </MidContainer_4_View_Bottom_Top_Bottom_Text>
              <MidContainer_4_View_Bottom_Top_Bottom_Text
                style={{marginLeft: 'auto', marginRight: 0}}>
                480,000원
              </MidContainer_4_View_Bottom_Top_Bottom_Text>
            </MidContainer_4_View_Bottom_Top_Bottom>
          </MidContainer_4_View_Bottom_Top>
          <MidContainer_4_View_Bottom_Top>
            <MidContainer_4_View_Bottom_Top_Top>
              <MidContainer_4_View_Bottom_Top_Top_Text>
                공임비
              </MidContainer_4_View_Bottom_Top_Top_Text>
            </MidContainer_4_View_Bottom_Top_Top>
            <MidContainer_4_View_Bottom_Top_Bottom>
              <MidContainer_4_View_Bottom_Top_Bottom_Text>
                2시간 작업
              </MidContainer_4_View_Bottom_Top_Bottom_Text>
              <MidContainer_4_View_Bottom_Top_Bottom_Text
                style={{marginLeft: 'auto', marginRight: 0}}>
                80,000원
              </MidContainer_4_View_Bottom_Top_Bottom_Text>
            </MidContainer_4_View_Bottom_Top_Bottom>
          </MidContainer_4_View_Bottom_Top>
          <MidContainer_4_View_Bottom_Bottom>
            <MidContainer_4_View_Bottom_Bottom_Text1>
              총 결제금액
            </MidContainer_4_View_Bottom_Bottom_Text1>
            <MidContainer_4_View_Bottom_Bottom_Text2>
              560,000원
            </MidContainer_4_View_Bottom_Bottom_Text2>
          </MidContainer_4_View_Bottom_Bottom>
        </MidContainer_4>
      </MidContainer>
      <BottomContainer>
        <BottomleftContainer
          onPress={() => {
            navigation.navigate('Chat');
          }}>
          <BottomleftText>1:1채팅</BottomleftText>
        </BottomleftContainer>
        <BottomrightContainer
          onPress={() => {
            setShowDialog(true);
          }}>
          <BottomrightText>고객예약 취소하기</BottomrightText>
        </BottomrightContainer>
      </BottomContainer>
      <DialogInput
        isDialogVisible={showDialog}
        messageVisible={true}
        cancelVisible={true}
        title={'예약취소사유'}
        hintInput={'고객에게 예약을 받지 못하는 이유를 자세하게 설명해주세요.'}
        submitText={'등록'}
        cancelText={'취소'}
        submitInput={(inputText) => {
          setSendInput(inputText);
          setShowDialog(false);
          alert(inputText);
        }}
        closeDialog={() => {
          setShowDialog(false);
          alert('취소');
        }}></DialogInput>
    </Container>
  );
}

export default Reservation_detail;
