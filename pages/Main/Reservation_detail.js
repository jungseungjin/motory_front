import React from 'react';
import styled from 'styled-components/native';
import DialogInput from 'react-native-dialog-input';
import {Dimensions} from 'react-native';
import moment from 'moment';
import Container_act from '../../components/Main/Container_act';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
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
  height: 150px;
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
  height: 200px;
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
  height: 160px;
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
  height: 120px;
  font-size: 14px;
`;
const MidContainer_4 = styled.View`
  margin-top: 20px;
  height: 350px;
  border: 1px solid #126753;
`;
const MidContainer_4_View_Top = styled.View`
  width: 90%;
  height: 30px;
  margin: 0 auto;
  border-bottom-color: #000000;
  border-bottom-width: 2px;
`;
const MidContainer_4_View_Top_Text = styled.Text`
  color: #000000;
`;
const MidContainer_4_View_Mid = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  height: 100px;
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
  height: 25px;
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
  height: 50px;
  margin-top: 10px;
  border: 1px solid #ff00ff;
`;
const MidContainer_4_View_Bottom_Top_Top = styled.View`
  height: 20px;
  border: 1px solid #ff00ff;
`;
const MidContainer_4_View_Bottom_Top_Top_Text = styled.Text`
  color: #777777;
`;
const MidContainer_4_View_Bottom_Top_Bottom = styled.View`
  height: 30px;
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
  height: 50px;
  margin-top: 10px;
  border-top-color: #cbcbcb;
  border-top-width: 1px;
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
function Reservation_detail({navigation, route}) {
  console.log(route.params);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [sendInput, setSendInput] = React.useState('');
  const Cancel_reservation = async function (inputText) {
    try {
      setIsLoading(true);
      let url = Domain + 'reservation_cancel';
      let data = {
        key: Key,
        data: route.params,
        contents: inputText,
      };

      let result = await axios.patch(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (result.data.type == 1) {
        console.log('ok');
        setIsLoading(false);
        navigation.goBack();
      } else {
        setIsLoading(false);
        alert(result.data.message);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };
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
              <MidContainer_1_View_Mid_Text>
                {moment(route.params.reservation_start_time, 'HHmm').format(
                  'HH:mm',
                )}
              </MidContainer_1_View_Mid_Text>
            </MidContainer_1_View_Mid>
            <MidContainer_1_View_Bottom>
              <MidContainer_1_View_Bottom_Text>
                {moment(route.params.reservation_date).format(
                  'YYYY년 MM월 DD일',
                )}
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
              <MidContainer_1_View_Mid_Text>
                {moment(
                  moment(route.params.reservation_start_time, 'HHmm').format(
                    'HHmm',
                  ) *
                    1 +
                    moment(
                      route.params.works[0].store_work_time
                        .replace('시간', '')
                        .replace(' ', '')
                        .replace('분', ''),
                      'HHmm',
                    ).format('HHmm') *
                      1,
                  'HHmm',
                ).format('HH:mm')}
              </MidContainer_1_View_Mid_Text>
            </MidContainer_1_View_Mid>
            <MidContainer_1_View_Bottom>
              <MidContainer_1_View_Bottom_Text>
                {moment(route.params.reservation_date).format(
                  'YYYY년 MM월 DD일',
                )}
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
              {route.params.users[0].iu_name}
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
          <MidContainer_2_View>
            <MidContainer_2_View_left_Text>
              차종{'  '}
            </MidContainer_2_View_left_Text>
            <MidContainer_2_View_right_Text>
              {route.params.cars[0].model},{route.params.cars[0].grade},
              {route.params.cars[0].grade_detail}
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
          <MidContainer_2_View>
            <MidContainer_2_View_left_Text>
              차량번호{'  '}
            </MidContainer_2_View_left_Text>
            <MidContainer_2_View_right_Text>
              {route.params.reservation_user_car_number}
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
          <MidContainer_2_View>
            <MidContainer_2_View_left_Text>
              휴대폰번호{'  '}
            </MidContainer_2_View_left_Text>
            <MidContainer_2_View_right_Text>
              {route.params.users[0].iu_phone}
            </MidContainer_2_View_right_Text>
          </MidContainer_2_View>
          <MidContainer_2_View>
            <MidContainer_2_View_left_Text>
              결제방식{'  '}
            </MidContainer_2_View_left_Text>
            <MidContainer_2_View_right_Text>
              {route.params.reservation_payment == 0
                ? '현장 현금결제'
                : route.params.reservation_payment == 1
                ? '현장 카드결제'
                : route.params.reservation_payment == 2
                ? '현장 계좌이체'
                : null}
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
                '사장님이 작업에 필요한 고객님께 요청한 사항(ex. 페인트코드 등)이 있다면 꼭 적어주세요.----'
              }
              multiline={true}
              editable={false}
              selectTextOnFocus={false}
              textAlignVertical={'top'}>
              {route.params.reservation_contents}
            </MidContainer_3_View_Bottom_TextInput>
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
                  {route.params.stores[0].store_name}
                </MidContainer_4_View_Mid_Right_View_Text2>
              </MidContainer_4_View_Mid_Right_View>
              <MidContainer_4_View_Mid_Right_View>
                <MidContainer_4_View_Mid_Right_View_Text>
                  대표명{' '}
                </MidContainer_4_View_Mid_Right_View_Text>
                <MidContainer_4_View_Mid_Right_View_Text2>
                  {route.params.stores[0].store_ceo}
                </MidContainer_4_View_Mid_Right_View_Text2>
              </MidContainer_4_View_Mid_Right_View>
              <MidContainer_4_View_Mid_Right_View>
                <MidContainer_4_View_Mid_Right_View_Text>
                  전화번호{' '}
                </MidContainer_4_View_Mid_Right_View_Text>
                <MidContainer_4_View_Mid_Right_View_Text2>
                  MOTOToooo-----???
                </MidContainer_4_View_Mid_Right_View_Text2>
              </MidContainer_4_View_Mid_Right_View>
              <MidContainer_4_View_Mid_Right_View>
                <MidContainer_4_View_Mid_Right_View_Text>
                  주소{' '}
                </MidContainer_4_View_Mid_Right_View_Text>
                <MidContainer_4_View_Mid_Right_View_Text2>
                  {route.params.stores[0].store_address.roadAddress}{' '}
                  {route.params.stores[0].store_address_detail}
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
                {route.params.works[0].store_work_name}
              </MidContainer_4_View_Bottom_Top_Bottom_Text>
              <MidContainer_4_View_Bottom_Top_Bottom_Text
                style={{marginLeft: 'auto', marginRight: 0}}>
                {route.params.works[0].store_work_total_cost -
                  route.params.works[0].store_work_labor_cost}
                원
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
                {route.params.works[0].store_work_time}작업
              </MidContainer_4_View_Bottom_Top_Bottom_Text>
              <MidContainer_4_View_Bottom_Top_Bottom_Text
                style={{marginLeft: 'auto', marginRight: 0}}>
                {route.params.works[0].store_work_labor_cost}원
              </MidContainer_4_View_Bottom_Top_Bottom_Text>
            </MidContainer_4_View_Bottom_Top_Bottom>
          </MidContainer_4_View_Bottom_Top>
          <MidContainer_4_View_Bottom_Bottom>
            <MidContainer_4_View_Bottom_Bottom_Text1>
              총 결제금액
            </MidContainer_4_View_Bottom_Bottom_Text1>
            <MidContainer_4_View_Bottom_Bottom_Text2>
              {route.params.works[0].store_work_total_cost}원
            </MidContainer_4_View_Bottom_Bottom_Text2>
          </MidContainer_4_View_Bottom_Bottom>
        </MidContainer_4>
      </MidContainer>
      <BottomContainer>
        {route.params.store_info_work_type == 5 ? (
          <>
            <BottomrightContainer>
              <BottomrightText>작업완료</BottomrightText>
            </BottomrightContainer>
          </>
        ) : (
          <>
            <BottomleftContainer
              onPress={() => {
                navigation.navigate('Chat');
              }}>
              <BottomleftText>쪽지</BottomleftText>
            </BottomleftContainer>
            <BottomrightContainer
              onPress={() => {
                setShowDialog(true);
              }}>
              <BottomrightText>고객예약 취소하기</BottomrightText>
            </BottomrightContainer>
          </>
        )}
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
          Cancel_reservation(inputText);
          setShowDialog(false);
        }}
        closeDialog={() => {
          setShowDialog(false);
          alert('취소');
        }}></DialogInput>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Reservation_detail;
