import React from 'react';
import styled from 'styled-components/native';
import {RefreshControl} from 'react-native';
import FastImage from 'react-native-fast-image';
import Container_act from '../../components/Main/Container_act';
import moment from 'moment';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
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
const TopbottomrightContainer_right_View = styled.TouchableOpacity`
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
  border-top-width: 2px;
`;
const MidmidContainer = styled.View`
  height: 500px;
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
  flex: 3;
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
  flex: 2;
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
const MidmidContainer_Bottom_right_TextInput = styled.TextInput`
  height: 110px;
`;
function Review_detail({navigation, route}) {
  console.log('review_Detail');
  console.log(route.params.item.reviews);
  console.log('review_Detail');
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [ownerReply, setOwnerReply] = React.useState(false);
  const [sortType, setSortType] = React.useState(0); // 0 기본 1 최신 오름차순 2 최신 내림차순 3 별점 오름차순 4 별점 내림차순
  const [sortData, setSortData] = React.useState([]); //-> 후기
  const [selectData, setSelectData] = React.useState([]);
  const [reply_contents, setReply_contents] = React.useState('');
  const send_data = async function () {
    try {
      if (reply_contents) {
        setIsLoading(true);
        let url = Domain + 'review_owner_reply';
        let data = {
          key: Key,
          data: selectData,
          reply_contents,
        };
        let result = await axios.patch(url, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (result.data.type == 1) {
          console.log('ok');
          let reviese_data = sortData;
          for (var a = 0; a < reviese_data.length; a++) {
            if (reviese_data[a]._id == selectData._id) {
              reviese_data[a].review_owner_reply = 1;
              reviese_data[a].review_owner_reply_contents = reply_contents;
            }
          }
          setSortData(reviese_data);
          setSelectData([]);
          setReply_contents('');
          setIsLoading(false);
          //navigation.goBack();뭐라도 할거여
        } else {
          setIsLoading(false);
          alert(result.data.message);
        }
      } else {
        alert('답글을 입력해주세요.');
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };
  const sort_data = async function () {
    try {
      setIsLoading(true);
      let review_data;
      if (ownerReply == false) {
        review_data = route.params.item.reviews;
      } else {
        //ownerReply == true 답글 안단댓글만 보이기
        review_data = [];
        for (var a = 0; a < route.params.item.reviews.length; a++) {
          if (route.params.item.reviews[a].review_owner_reply == 0) {
            review_data.push(route.params.item.reviews[a]);
          }
        }
      }

      if (sortType == 0) {
        setSortData(review_data);
      } else if (sortType == 1) {
        review_data = review_data.sort(function (a, b) {
          // 오름차순
          return moment(a.review_work_regdate) - moment(b.review_work_regdate);
        });
        setSortData(review_data);
      } else if (sortType == 2) {
        review_data = review_data.sort(function (a, b) {
          // 내림차순
          return moment(b.review_work_regdate) - moment(a.review_work_regdate);
        });
        setSortData(review_data);
      } else if (sortType == 3) {
        review_data = review_data.sort(function (a, b) {
          // 오름차순
          return a.review_reply_grade - b.review_reply_grade;
        });
        setSortData(review_data);
      } else if (sortType == 4) {
        review_data = review_data.sort(function (a, b) {
          // 내림차순
          return b.review_reply_grade - a.review_reply_grade;
        });
        setSortData(review_data);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };
  React.useEffect(() => {
    sort_data();
  }, [ownerReply, sortType]);
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
                  {route.params.item.reviews.length}개
                </TopbottomleftContainer_left_Text>
              </TopbottomleftContainer_left>
              <TopbottomleftContainer_right>
                <TopbottomleftContainer_right_right>
                  <TopbottomleftContainer_right_right_Text>
                    {route.params.item.store_work_grade}
                  </TopbottomleftContainer_right_right_Text>
                </TopbottomleftContainer_right_right>
              </TopbottomleftContainer_right>
            </TopbottomleftContainer>
            <TopbottomrightContainer>
              <TopbottomrightContainer_right
                style={{width: '35%'}}></TopbottomrightContainer_right>
              <TopbottomrightContainer_right>
                <TopbottomrightContainer_right_View
                  onPress={() => {
                    setOwnerReply(!ownerReply);
                  }}>
                  <TopbottomrightContainer_right_View_Text>
                    답글 안단 글만{' '}
                  </TopbottomrightContainer_right_View_Text>
                  <TopbottomrightContainer_right_View_Image
                    style={{marginTop: 'auto', marginBottom: 2}}
                    source={
                      ownerReply == false
                        ? require('../../assets/image/green_nochk.png')
                        : require('../../assets/image/green_chk.png')
                    }></TopbottomrightContainer_right_View_Image>
                </TopbottomrightContainer_right_View>
                <TopbottomrightContainer_right_View>
                  <TopbottomrightContainer_right_View_Text
                    onPress={() => {
                      if (sortType == 0) {
                        setSortType(1); //최신오름차순
                      } else if (sortType == 1) {
                        setSortType(2); //최신내름차순
                      } else {
                        setSortType(1);
                      }
                    }}>
                    최신순
                  </TopbottomrightContainer_right_View_Text>
                  <TopbottomrightContainer_right_View_Text
                    style={sortType == 1 ? null : {color: '#AEAEAE'}}>
                    ↑
                  </TopbottomrightContainer_right_View_Text>
                  <TopbottomrightContainer_right_View_Text
                    style={sortType == 2 ? null : {color: '#AEAEAE'}}>
                    ↓
                  </TopbottomrightContainer_right_View_Text>
                  <TopbottomrightContainer_right_View_Text
                    onPress={() => {
                      if (sortType == 0) {
                        setSortType(3); //최신오름차순
                      } else if (sortType == 3) {
                        setSortType(4); //최신내름차순
                      } else {
                        setSortType(3);
                      }
                    }}>
                    별점순
                  </TopbottomrightContainer_right_View_Text>
                  <TopbottomrightContainer_right_View_Text
                    style={sortType == 3 ? null : {color: '#AEAEAE'}}>
                    ↑
                  </TopbottomrightContainer_right_View_Text>
                  <TopbottomrightContainer_right_View_Text
                    style={sortType == 4 ? null : {color: '#AEAEAE'}}>
                    ↓
                  </TopbottomrightContainer_right_View_Text>
                </TopbottomrightContainer_right_View>
              </TopbottomrightContainer_right>
            </TopbottomrightContainer>
          </>
        </TopbottomContainer>
      </TopContainer>
      <MidContainer>
        {sortData.map((item) => (
          <MidmidContainer key={item._id}>
            <MidmidContainer_Top>
              <MidmidContainer_Top_left>
                <FastImage
                  //style={styles.image}
                  style={{
                    width: '90%',
                    height: '50%',
                    borderRadius: 50,
                  }}
                  source={{
                    uri: item.review_user_iu_image,
                    //headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                  //'stretch'
                />
              </MidmidContainer_Top_left>
              <MidmidContainer_Top_right>
                <MidmidContainer_Top_right_Text
                  style={{fontWeight: 'bold', fontSize: 18, marginBottom: 2}}>
                  {item.review_user_iu_nickname}
                </MidmidContainer_Top_right_Text>
                <MidmidContainer_Top_right_Text
                  style={{color: '#8D8D8D', marginBottom: 4}}>
                  {item.review_reply_grade == 0
                    ? null
                    : item.review_reply_grade == 1
                    ? '⭐️'
                    : item.review_reply_grade == 2
                    ? '⭐️⭐️'
                    : item.review_reply_grade == 3
                    ? '⭐️⭐️⭐️'
                    : item.review_reply_grade == 4
                    ? '⭐️⭐️⭐️⭐️'
                    : item.review_reply_grade == 5
                    ? '⭐️⭐️⭐️⭐️⭐️'
                    : item.review_reply_grade}{' '}
                  {moment(
                    moment().add(-9, 'h') - moment(item.review_work_regdate),
                  ).format('HH시간 mm분전')}
                </MidmidContainer_Top_right_Text>
                <MidmidContainer_Top_right_Text
                  style={{color: '#8D8D8D', marginBottom: 4}}>
                  {route.params.item.store_work_name}
                </MidmidContainer_Top_right_Text>
                <MidmidContainer_Bottom_right_TextInput
                  multiline={true}
                  style={{textAlignVertical: 'top'}}
                  editable={false}
                  selectTextOnFocus={false}>
                  <MidmidContainer_Top_right_Text>
                    {item.review_reply_contents}
                  </MidmidContainer_Top_right_Text>
                </MidmidContainer_Bottom_right_TextInput>
              </MidmidContainer_Top_right>
            </MidmidContainer_Top>
            <MidmidContainer_Mid>
              <MidmidContainer_Mid_left></MidmidContainer_Mid_left>
              <MidmidContainer_Mid_right horizontal>
                {item.review_reply_image.map((item2) => (
                  <MidmidContainer_Mid_right_View key={item2}>
                    <FastImage
                      //style={styles.image}
                      style={{
                        height: 220,
                        width: 150,
                      }}
                      source={{
                        uri: item2,
                        //headers: {Authorization: 'someAuthToken'},
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                      //'stretch'
                    />
                  </MidmidContainer_Mid_right_View>
                ))}
              </MidmidContainer_Mid_right>
            </MidmidContainer_Mid>
            <MidmidContainer_Bottom>
              <MidmidContainer_Bottom_left>
                <MidmidContainer_Bottom_left_Image
                  source={require('../../assets/image/review_reply.png')}></MidmidContainer_Bottom_left_Image>
              </MidmidContainer_Bottom_left>
              <MidmidContainer_Bottom_right>
                <MidmidContainer_Bottom_right_Text
                  onPress={() => {
                    if (item.review_owner_reply == 0) {
                      send_data();
                    } else {
                      return false;
                    }
                  }}>
                  {item.review_owner_reply == 0 ? '답글달기' : null}
                </MidmidContainer_Bottom_right_Text>
                {item.review_owner_reply == 0 ? (
                  <MidmidContainer_Bottom_right_TextInput
                    multiline={true}
                    style={{textAlignVertical: 'top'}}
                    value={reply_contents}
                    autoCapitalize={'none'}
                    onChangeText={(value) => {
                      setSelectData(item);
                      setReply_contents(value);
                    }}
                    placeholder={
                      '사장님의 답글은 고객에게 신뢰를 줄 수 있습니다.'
                    }></MidmidContainer_Bottom_right_TextInput>
                ) : (
                  <MidmidContainer_Bottom_right_TextInput
                    multiline={true}
                    style={{textAlignVertical: 'top'}}
                    editable={false}
                    selectTextOnFocus={false}>
                    <MidmidContainer_Bottom_right_Text>
                      {item.review_owner_reply_contents}
                    </MidmidContainer_Bottom_right_Text>
                  </MidmidContainer_Bottom_right_TextInput>
                )}
              </MidmidContainer_Bottom_right>
            </MidmidContainer_Bottom>
          </MidmidContainer>
        ))}
      </MidContainer>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Review_detail;
