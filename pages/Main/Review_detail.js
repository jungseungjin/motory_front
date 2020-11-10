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
  margin-top: 20px;
  border-top-color: #eeeeee;
  border-top-width: 2;
`;
const MidmidContainer = styled.View`
  height: 350;
  margin: 20px 0 0 20px;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Top = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidmidContainer_Top_left = styled.View`
  width: 15%;
  align-items: center;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Top_left_Image = styled.Image`
  width: 90%;
  border-radius: 50;
`;
const MidmidContainer_Top_right = styled.View`
  width: 80%;
  border: 1px solid #ff00ff;
  margin-right: 5%;
`;
const MidmidContainer_Top_right_Text = styled.Text``;
const MidmidContainer_Mid = styled.View`
  flex: 4;
  flex-direction: row;
`;
const MidmidContainer_Mid_left = styled.View`
  width: 15%;
  align-items: center;
`;
const MidmidContainer_Mid_right = styled.ScrollView`
  margin-top: 10px;
  flex-direction: row;
  margin-bottom: 10px;
  border: 1px solid #000000;
`;
const MidmidContainer_Mid_right_View = styled.View`
  width: 220px;
  height: 150px;
  border: 1px solid #ff00ff;
  border-radius: 5px;
  margin-right: 10px;
`;
const MidmidContainer_Mid_right_Image = styled.Image`
  width: 220px;
  height: 150px;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Bottom = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidmidContainer_Bottom_left = styled.View`
  width: 15%;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Bottom_left_Image = styled.Image`
  margin-left: auto;
  margin-right: 0;
`;
const MidmidContainer_Bottom_right = styled.TouchableOpacity`
  width: 80%;
  border: 1px solid #ff00ff;
  margin-right: 5%;
`;
const MidmidContainer_Bottom_right_Text = styled.Text`
  font-weight: bold;
`;
function Review_detail({navigation}) {
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
          <>
            <TopbottomleftContainer>
              <TopbottomleftContainer_left>
                <TopbottomleftContainer_left_Text>
                  작업후기
                </TopbottomleftContainer_left_Text>
                <TopbottomleftContainer_left_Text>
                  37개
                </TopbottomleftContainer_left_Text>
              </TopbottomleftContainer_left>
              <TopbottomleftContainer_right>
                <TopbottomleftContainer_right_right>
                  <TopbottomleftContainer_right_right_Text>
                    4.6
                  </TopbottomleftContainer_right_right_Text>
                </TopbottomleftContainer_right_right>
              </TopbottomleftContainer_right>
            </TopbottomleftContainer>
            <TopbottomrightContainer>
              <TopbottomrightContainer_right
                style={{width: '35%'}}></TopbottomrightContainer_right>
              <TopbottomrightContainer_right>
                <TopbottomrightContainer_right_View>
                  <TopbottomrightContainer_right_View_Text>
                    답글 안단 글만{' '}
                  </TopbottomrightContainer_right_View_Text>
                  <TopbottomrightContainer_right_View_Image
                    style={{marginTop: 'auto', marginBottom: 2}}
                    source={require('../../assets/image/green_chk.png')}></TopbottomrightContainer_right_View_Image>
                </TopbottomrightContainer_right_View>
                <TopbottomrightContainer_right_View>
                  <TopbottomrightContainer_right_View_Text>
                    최신순↑
                  </TopbottomrightContainer_right_View_Text>
                  <TopbottomrightContainer_right_View_Text
                    style={{color: '#AEAEAE'}}>
                    ↓
                  </TopbottomrightContainer_right_View_Text>
                  <TopbottomrightContainer_right_View_Text>
                    별점순↑↓
                  </TopbottomrightContainer_right_View_Text>
                </TopbottomrightContainer_right_View>
              </TopbottomrightContainer_right>
            </TopbottomrightContainer>
          </>
        </TopbottomContainer>
      </TopContainer>
      <MidContainer>
        <MidmidContainer>
          <MidmidContainer_Top>
            <MidmidContainer_Top_left>
              <MidmidContainer_Top_left_Image
                resizeMode={'stretch'}
                source={require('../../assets/image/Group24.png')}></MidmidContainer_Top_left_Image>
            </MidmidContainer_Top_left>
            <MidmidContainer_Top_right>
              <MidmidContainer_Top_right_Text
                style={{fontWeight: 'bold', fontSize: 18, marginBottom: 2}}>
                광주 검팅어
              </MidmidContainer_Top_right_Text>
              <MidmidContainer_Top_right_Text
                style={{color: '#8D8D8D', marginBottom: 4}}>
                ⭐️⭐️⭐️⭐️⭐️ 1일전
              </MidmidContainer_Top_right_Text>
              <MidmidContainer_Top_right_Text
                style={{color: '#8D8D8D', marginBottom: 4}}>
                G70 카나드 콘 바디킷
              </MidmidContainer_Top_right_Text>
              <MidmidContainer_Top_right_Text>
                정말 친절하시고 실력까지 좋은 가게입니다. 다른분들께
                강력추천드립니다!
              </MidmidContainer_Top_right_Text>
            </MidmidContainer_Top_right>
          </MidmidContainer_Top>
          <MidmidContainer_Mid>
            <MidmidContainer_Mid_left></MidmidContainer_Mid_left>
            <MidmidContainer_Mid_right horizontal>
              <MidmidContainer_Mid_right_View>
                <MidmidContainer_Mid_right_Image
                  resizeMode={'stretch'}
                  source={require('../../assets/image/Group24.png')}></MidmidContainer_Mid_right_Image>
              </MidmidContainer_Mid_right_View>
              <MidmidContainer_Mid_right_View>
                <MidmidContainer_Mid_right_Image
                  resizeMode={'stretch'}
                  source={require('../../assets/image/Group24.png')}></MidmidContainer_Mid_right_Image>
              </MidmidContainer_Mid_right_View>
              <MidmidContainer_Mid_right_View>
                <MidmidContainer_Mid_right_Image
                  resizeMode={'stretch'}
                  source={require('../../assets/image/Group24.png')}></MidmidContainer_Mid_right_Image>
              </MidmidContainer_Mid_right_View>
              <MidmidContainer_Mid_right_View>
                <MidmidContainer_Mid_right_Image
                  resizeMode={'stretch'}
                  source={require('../../assets/image/Group24.png')}></MidmidContainer_Mid_right_Image>
              </MidmidContainer_Mid_right_View>
              <MidmidContainer_Mid_right_View>
                <MidmidContainer_Mid_right_Image
                  resizeMode={'stretch'}
                  source={require('../../assets/image/Group24.png')}></MidmidContainer_Mid_right_Image>
              </MidmidContainer_Mid_right_View>
              <MidmidContainer_Mid_right_View>
                <MidmidContainer_Mid_right_Image
                  resizeMode={'stretch'}
                  source={require('../../assets/image/Group24.png')}></MidmidContainer_Mid_right_Image>
              </MidmidContainer_Mid_right_View>
              <MidmidContainer_Mid_right_View>
                <MidmidContainer_Mid_right_Image
                  resizeMode={'stretch'}
                  source={require('../../assets/image/Group24.png')}></MidmidContainer_Mid_right_Image>
              </MidmidContainer_Mid_right_View>
            </MidmidContainer_Mid_right>
          </MidmidContainer_Mid>
          <MidmidContainer_Bottom>
            <MidmidContainer_Bottom_left>
              <MidmidContainer_Bottom_left_Image
                source={require('../../assets/image/review_reply.png')}></MidmidContainer_Bottom_left_Image>
            </MidmidContainer_Bottom_left>
            <MidmidContainer_Bottom_right
              onPress={() => {
                alert('gd');
              }}>
              <MidmidContainer_Bottom_right_Text>
                답글달기
              </MidmidContainer_Bottom_right_Text>
              <MidmidContainer_Bottom_right_Text
                style={{fontWeight: 'normal', color: '#8D8D8D'}}>
                사장님의 답글은 고객에게 신뢰를 줄 수 있습니다.
              </MidmidContainer_Bottom_right_Text>
            </MidmidContainer_Bottom_right>
          </MidmidContainer_Bottom>
        </MidmidContainer>
      </MidContainer>
    </Container>
  );
}

export default Review_detail;
