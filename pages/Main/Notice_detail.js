import React from 'react';
import styled from 'styled-components/native';
import Container_act from '../../components/Main/Container_act';
import moment from 'moment';
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
  height: 70px;
  margin: 20px 20px 0 20px;
  border: 1px solid #000000;
`;
const MidmidContainer_Text = styled.Text`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
`;
const MidmidContainer_Text2 = styled.Text`
  color: #000000;
  margin-top: 5px;
`;
const MidmidContainer_Detail_View = styled.ScrollView`
  margin: 20px 20px 0 20px;
  border: 1px solid #000000;
`;
const MidmidContainer_Detail_Text = styled.Text``;

function Notice({navigation, route}) {
  console.log(route.params);
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/arrow_left.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText></ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer></ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer></TopbottomContainer>
      </TopContainer>
      <MidContainer>
        {route.params[1] ? (
          <>
            <MidmidContainer key={route.params[1]._id}>
              <MidmidContainer_Text>
                {route.params[1].title}
              </MidmidContainer_Text>
              <MidmidContainer_Text2>
                {moment(route.params[1].regDate).format('YYYY년 MM월 DD일')}
              </MidmidContainer_Text2>
            </MidmidContainer>
            <MidmidContainer_Detail_View>
              <MidmidContainer_Detail_Text>
                {route.params[1].contents}
              </MidmidContainer_Detail_Text>
            </MidmidContainer_Detail_View>
          </>
        ) : null}
      </MidContainer>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Notice;
