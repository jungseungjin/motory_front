import React from 'react';
import styled from 'styled-components/native';
import Container_act from '../../components/Main/Container_act';
import moment from 'moment';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import {ActivityIndicator} from 'react-native';

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

const MidContainer = styled.ScrollView`
  flex: 8;
  border-top-color: #eeeeee;
  border-top-width: 2px;
`;
const MidmidContainer = styled.TouchableOpacity`
  height: 70px;
  margin: 20px 20px 0 20px;
  border: 1px solid #000000;
  flex-direction: row;
`;
const MidmidContainer_left = styled.View`
  width: 80%;
  border: 1px solid #000000;
`;
const MidmidContainer_right = styled.View`
  width: 20%;
  border: 1px solid #000000;
  justify-content: center;
  align-items: center;
`;
const MidmidContainer_right_Text = styled.Text`
  color: #37a0db;
`;
const MidmidContainer_Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
const MidmidContainer_Text2 = styled.Text`
  margin-top: 5px;
`;
function Question({navigation, route}) {
  console.log(route.params);
  const [isLoading, setIsLoading] = React.useState(false);
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    let get_data = async function () {
      try {
        setIsLoading(true);
        let url =
          Domain +
          'question_list/1' +
          '?key=' +
          Key +
          '&user_id=' +
          route.params.user_id;
        let result = await axios.get(url);
        if (result.data[0].type) {
          //get에서 type이 있으면 잘못된거
          alert(result.data[0].message);
          setIsLoading(false);
        } else {
          setList(result.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    get_data();
  }, [route.params]);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/arrow_left.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>문의내역</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer
            onPress={() => {
              navigation.navigate('Question_register', route.params);
            }}>
            <ToptoprightrightText>문의작성</ToptoprightrightText>
          </ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer></TopbottomContainer>
      </TopContainer>
      <MidContainer>
        {list.map((item) => (
          <>
            <MidmidContainer
              key={item._id}
              onPress={() => {
                navigation.navigate('Question_detail', [route.params, item]);
              }}>
              <MidmidContainer_left>
                <MidmidContainer_Text>{item.title}</MidmidContainer_Text>
                <MidmidContainer_Text2>
                  {moment(item.regDate).format('YYYY년 MM월 DD일')}
                </MidmidContainer_Text2>
              </MidmidContainer_left>
              <MidmidContainer_right>
                {item.reply.length == 0 ? (
                  <>
                    <MidmidContainer_right_Text style={{color: '#908E8E'}}>
                      답변예정
                    </MidmidContainer_right_Text>
                  </>
                ) : (
                  <>
                    <MidmidContainer_right_Text>
                      답변완료
                    </MidmidContainer_right_Text>
                  </>
                )}
              </MidmidContainer_right>
            </MidmidContainer>
          </>
        ))}
      </MidContainer>
    </Container>
  );
}

export default Question;
