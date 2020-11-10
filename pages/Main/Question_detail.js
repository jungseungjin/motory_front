import React from 'react';
import styled from 'styled-components/native';

import DialogInput from 'react-native-dialog-input';
import Container_act from '../../components/Main/Container_act';
import moment from 'moment';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import {
  ActivityIndicator,
  Keyboard,
  RefreshControlComponent,
} from 'react-native';
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
  flex-direction: row;
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
const MidmidContainer = styled.TouchableOpacity`
  height: 25px;
  margin: 20px 10px 0 20px;
  flex-direction: row;
`;
const MidmidContainer_left = styled.View`
  width: 70%;
  border: 1px solid #000000;
`;
const MidmidContainer_right = styled.View`
  border: 1px solid #000000;
`;
const MidmidContainer_right_Text = styled.Text`
  color: #9f9f9f;
  font-size: 12px;
  margin: 0 0 0 auto;
`;
const MidmidContainer_Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
const MidmidContainer_Text2 = styled.Text`
  margin-top: 5px;
`;
const MidmidContainer2 = styled.View`
  height: 300px;
  border-top-color: #a8a8a8;
  border-top-width: 1px;
  border-bottom-color: #a8a8a8;
  border-bottom-width: 1px;
`;
const MidmidContainer2_nested = styled.ScrollView``;
const MidmidContainer2_nested_Text = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;
const MidmidContainer3 = styled.View`
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  height: 25px;
  flex-direction: row;
  align-items: center;
`;

const MidmidContainer3_left = styled.View`
  width: 10%;
`;
const MidmidContainer3_right = styled.View``;
const MidmidContainer3_Image = styled.Image``;
const MidmidContainer3_Text = styled.Text`
  color: #37a0db;
`;
const MidmidContainer4 = styled.View`
  height: 300px;
  border-top-color: #a8a8a8;
  border-top-width: 1px;
  border-bottom-color: #a8a8a8;
  border-bottom-width: 1px;
  border: 1px solid #ff00ff;
`;
const MidmidContainer4_nested = styled.ScrollView``;
const MidmidContainer4_nested_Text = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
`;
function Question_detail({navigation, route}) {
  const [showDialog, setShowDialog] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [reply, setReply] = React.useState({});
  React.useEffect(() => {
    let get_reply = async function () {
      try {
        setIsLoading(true);
        let url =
          Domain +
          'question_reply?key=' +
          Key +
          '&iq_id=' +
          route.params[1]._id;
        let result = await axios.get(url);
        if (result.data[0].type) {
          setIsLoading(false);
          alert(result.data[0].message);
        } else {
          setIsLoading(false);
          setReply(result.data[0]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    get_reply();
    console.log(reply);
  }, []);
  const question_delete = async function () {
    setIsLoading(true);
    let url = Domain + 'question_delete';
    let data = {
      iq_id: route.params[1]._id,
      key: Key,
    };
    let result = await axios.patch(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (result.data.type == 0) {
      setIsLoading(false);
      alert(result.data.message);
    } else if (result.data.type == 1) {
      setIsLoading(false);
      navigation.navigate('Question', route.params[0]);
    }
  };
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/x.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>문의확인</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer>
            <ToptoprightrightText
              style={{color: '#63BEDB'}}
              onPress={() => {
                if (route.params[1]) {
                  if (route.params[1].reply.length == 0) {
                    //답변이 달리지 않았을때는 수정가능
                    navigation.navigate('Question_revise', route.params);
                  } else {
                    alert('답변이 완료된 글은 수정이 불가능합니다.');
                  }
                } else {
                  alert('답변이 완료된 글은 수정이 불가능합니다.');
                }
              }}>
              수정
            </ToptoprightrightText>
            <ToptoprightrightText> </ToptoprightrightText>
            <ToptoprightrightText
              style={{color: '#FF0000'}}
              onPress={() => {
                setShowDialog(true);
              }}>
              삭제
            </ToptoprightrightText>
          </ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer></TopbottomContainer>
      </TopContainer>
      <MidContainer>
        <MidmidContainer>
          {route.params[1] ? (
            <>
              <MidmidContainer_left>
                <MidmidContainer_Text>
                  {route.params[1].title}
                </MidmidContainer_Text>
              </MidmidContainer_left>
              <MidmidContainer_right>
                <MidmidContainer_right_Text>
                  {moment(route.params[1].regDate).format('YYYY년 MM월 DD일')}
                </MidmidContainer_right_Text>
              </MidmidContainer_right>
            </>
          ) : null}
        </MidmidContainer>
        <MidmidContainer2>
          <MidmidContainer2_nested>
            {route.params[1] ? (
              <>
                <MidmidContainer2_nested_Text>
                  {route.params[1].contents}
                </MidmidContainer2_nested_Text>
              </>
            ) : null}
          </MidmidContainer2_nested>
        </MidmidContainer2>
        <MidmidContainer3>
          <MidmidContainer3_left>
            <MidmidContainer3_Image
              source={require('../../assets/image/review_reply.png')}></MidmidContainer3_Image>
          </MidmidContainer3_left>
          <MidmidContainer3_right>
            {reply ? (
              <MidmidContainer3_Text>답변완료</MidmidContainer3_Text>
            ) : (
              <MidmidContainer3_Text style={{color: '#908E8E'}}>
                답변예정
              </MidmidContainer3_Text>
            )}
          </MidmidContainer3_right>
        </MidmidContainer3>
        <MidmidContainer4>
          <MidmidContainer4_nested>
            {reply ? (
              <MidmidContainer4_nested_Text>
                {reply.contents}
              </MidmidContainer4_nested_Text>
            ) : null}
          </MidmidContainer4_nested>
        </MidmidContainer4>
      </MidContainer>
      <DialogInput
        isDialogVisible={showDialog}
        messageVisible={false}
        cancelVisible={true}
        title={'문의를 삭제하시겠습니까?'}
        message={false}
        submitText={'확인'}
        cancelText={'취소'}
        submitInput={() => {
          setShowDialog(false);
          question_delete();
        }}
        closeDialog={() => {
          setShowDialog(false);
        }}></DialogInput>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Question_detail;
