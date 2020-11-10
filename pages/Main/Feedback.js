import React from 'react';
import styled from 'styled-components/native';
import DialogInput from 'react-native-dialog-input';

import Container_act from '../../components/Main/Container_act';
import moment from 'moment';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import {ActivityIndicator, Keyboard} from 'react-native';
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
const ToptoprightContainer = styled.TouchableOpacity`
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
const TopbottomContainer = styled.TouchableOpacity`
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
  flex: 7;
  border-top-color: #eeeeee;
  border-top-width: 2;
`;
const MidmidContainer = styled.View`
  height: 50;
  margin: 20px 20px 0 20px;
  background: #ededed;
  justify-content: center;
  border-radius: 5;
`;
const MidmidContainer_TextInput = styled.TextInput`
  margin-left: 10px;
  font-size: 18px;
`;
const MidmidContainer_2 = styled.ScrollView`
  margin: 20px 20px 0 20px;
  border: 1px solid #000000;
`;
const MidmidContainer_2_TextInput = styled.TextInput`
  margin-left: 10px;
  font-size: 16px;
`;
const BottomContainer = styled.View`
  flex: 1;
  margin-top: 20px;
`;
const BottomContainer_Button = styled.TouchableOpacity`
  margin: 0 20px 0 20px;
  border-radius: 5;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
  background: #2d61e9;
`;
const BottomContainer_Button_Text = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
`;
function Feedback({navigation, route}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [contents, setContents] = React.useState('');
  const feedback_register = async function () {
    try {
      setIsLoading(true);
      let url = Domain + 'feedback_register/1';
      let data = {
        writer: route.params.user_id, //작성자 아이디
        writer_name: route.params.user_name, //작성자 이름
        title: title, //제목
        contents: contents, //내용
        key: Key,
      };
      let result = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.data.type == 0) {
        setIsLoading(false);
        alert(result.data.message);
      } else {
        setIsLoading(false);
        navigation.goBack();
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
              source={require('../../assets/image/x.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <ToptoprightText>피드백주기</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <ToptoprightrightText></ToptoprightrightText>
          </ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer
          onPress={() => {
            Keyboard.dismiss();
          }}></TopbottomContainer>
      </TopContainer>
      <MidContainer>
        <MidmidContainer>
          <MidmidContainer_TextInput
            placeholder={'제목'}
            value={title}
            autoCapitalize={'none'}
            onChangeText={(value) =>
              setTitle(value)
            }></MidmidContainer_TextInput>
        </MidmidContainer>
        <MidmidContainer_2>
          <MidmidContainer_2_TextInput
            multiline={true}
            style={{textAlignVertical: 'top'}}
            placeholder={
              '튜닝의순정에게 뼈가 되고 살이 되는 피드백을 해주세요!'
            }
            value={contents}
            autoCapitalize={'none'}
            onChangeText={(value) =>
              setContents(value)
            }></MidmidContainer_2_TextInput>
        </MidmidContainer_2>
      </MidContainer>
      <BottomContainer>
        <BottomContainer_Button
          onPress={() => {
            setShowDialog(true);
          }}>
          <BottomContainer_Button_Text>작성완료</BottomContainer_Button_Text>
        </BottomContainer_Button>
      </BottomContainer>
      <DialogInput
        isDialogVisible={showDialog}
        messageVisible={false}
        title={
          '튜닝의순정에게 피드백을 해주셔서 감사합니다. \n\n 사장님들과 함께 튜닝시장을 변화시켜나가는 튜닝의순정이 되도록 노력하겠습니다.'
        }
        message={false}
        submitText={'확인'}
        submitInput={() => {
          setShowDialog(false);
          feedback_register();
        }}
        cancelText={'취소'}
        closeDialog={() => {
          setShowDialog(false);
        }}></DialogInput>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Feedback;
