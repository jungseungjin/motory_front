import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 2;
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
  flex: 7;
`;
const MidmidContainer = styled.View`
  height: 150px;
  margin: 20px 20px 0 20px;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Top = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidmidContainer_Top_left = styled.View`
  flex: 2;
  border: 1px solid #ff00ff;
  border-radius: 10px;
`;
const MidmidContainer_Top_left_Image = styled.Image`
  width: 100%;
  height: 100%;
  margin: auto auto;
  flex: 1;
`;
const MidmidContainer_Top_right = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Top_right_Text_View = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Top_right_Text2_View = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Top_right_Text = styled.Text`
  font-weight: bold;
`;
const MidmidContainer_Top_right_Text2 = styled.Text`
  font-weight: bold;
`;

const MidmidContainer_Bottom = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidmidContainer_Bottom_left = styled.View`
  flex: 2;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Bottom_right = styled.View`
  flex: 3;
  flex-direction: row;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Bottom_right_Button = styled.TouchableOpacity`
  width: 50%;
  border: 1px solid #946aef;
  margin: 1% 2% 1% 2%;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  margin-left: auto;
`;
const MidmidContainer_Bottom_right_Button_Text = styled.Text``;
const BottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const BottomleftContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000000;
`;
const BottomleftText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;
const BottomrightContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;
const BottomrightText = styled.Text`
  color: #000000;
  font-weight: bold;
`;

function Review({navigation}) {
  const [page, setPage] = React.useState(0);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/arrow_left.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>후기관리</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer></ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer>
          {page == 0 ? (
            <>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText>드레스업</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(1);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>퍼포먼스</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(2);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>편의장치</TopbottomleftText>
              </TopbottomleftContainer>
            </>
          ) : page == 1 ? (
            <>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(0);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>드레스업</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText>퍼포먼스</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(2);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>편의장치</TopbottomleftText>
              </TopbottomleftContainer>
            </>
          ) : (
            <>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(0);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>드레스업</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(1);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>퍼포먼스</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText>편의장치</TopbottomleftText>
              </TopbottomleftContainer>
            </>
          )}
        </TopbottomContainer>
      </TopContainer>
      <MidContainer>
        {page == 0 ? (
          <>
            <MidmidContainer>
              <MidmidContainer_Top>
                <MidmidContainer_Top_left>
                  <MidmidContainer_Top_left_Image
                    source={require('../../assets/image/arrow_left.png')}></MidmidContainer_Top_left_Image>
                </MidmidContainer_Top_left>
                <MidmidContainer_Top_right>
                  <MidmidContainer_Top_right_Text_View>
                    <MidmidContainer_Top_right_Text>
                      G70 카나드 콘 바디킷
                    </MidmidContainer_Top_right_Text>
                  </MidmidContainer_Top_right_Text_View>
                  <MidmidContainer_Top_right_Text2_View>
                    <MidmidContainer_Top_right_Text2 style={{fontSize: 24}}>
                      ⭐️ 4.9
                    </MidmidContainer_Top_right_Text2>
                    <MidmidContainer_Top_right_Text2>
                      고객후기 15개
                    </MidmidContainer_Top_right_Text2>
                    <MidmidContainer_Top_right_Text2>
                      사장님답글 13개
                    </MidmidContainer_Top_right_Text2>
                  </MidmidContainer_Top_right_Text2_View>
                </MidmidContainer_Top_right>
              </MidmidContainer_Top>
              <MidmidContainer_Bottom>
                <MidmidContainer_Bottom_left></MidmidContainer_Bottom_left>
                <MidmidContainer_Bottom_right>
                  <MidmidContainer_Bottom_right_Button
                    onPress={() => {
                      navigation.navigate('Review_detail');
                    }}
                    style={{
                      borderBottomColor: '#946AEF',
                      borderTopColor: '#946AEF',
                      borderRightColor: '#946AEF',
                      borderLeftColor: '#946AEF',
                    }}>
                    <MidmidContainer_Bottom_right_Button_Text
                      style={{color: '#946AEF'}}>
                      답글남기러가기
                    </MidmidContainer_Bottom_right_Button_Text>
                  </MidmidContainer_Bottom_right_Button>
                </MidmidContainer_Bottom_right>
              </MidmidContainer_Bottom>
            </MidmidContainer>
            <MidmidContainer></MidmidContainer>
          </>
        ) : page == 1 ? null : null}
      </MidContainer>

      <BottomContainer>
        <BottomleftContainer>
          <BottomleftText>차량선택</BottomleftText>
        </BottomleftContainer>
        <BottomrightContainer>
          <BottomrightText>작업종류</BottomrightText>
        </BottomrightContainer>
      </BottomContainer>
    </Container>
  );
}

export default Review;
