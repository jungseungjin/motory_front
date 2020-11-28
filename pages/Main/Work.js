import React from 'react';
import {RefreshControl} from 'react-native';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import Container_act from '../../components/Main/Container_act';

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
const MidmidContainer_Top_right_Text2 = styled.Text``;

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
  flex: 1;
  border: 1px solid #ff00ff;
  margin: 1% 2% 1% 2%;
  align-items: center;
  justify-content: center;
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

function Work({navigation, route}) {
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [work_list_select, setWork_list_select] = React.useState([]);
  const [work_list_korean_select, setWork_list_korean_select] = React.useState(
    [],
  );
  const [car_list_select, setCar_list_select] = React.useState([]);
  const [car_list_korean_select, setCar_list_korean_select] = React.useState(
    [],
  );
  const [page0_list, setPage0_list] = React.useState([]);
  const [page1_list, setPage1_list] = React.useState([]);
  const [page2_list, setPage2_list] = React.useState([]);
  const [page3_list, setPage3_list] = React.useState([]);
  const [data_list, setData_list] = React.useState([]);
  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const get_data = async function () {
    try {
      setIsLoading(true);
      let url =
        Domain +
        'work_list' +
        '?user_id=' +
        route.params.user_id +
        '&key=' +
        Key +
        '&car_id=' +
        car_list_select +
        '&work_id=' +
        work_list_select;
      let result = await axios.get(url);
      if (result.data[0].type == 0) {
        //에러
        setIsLoading(false);
        alert(result.data[0].message);
      } else {
        //데이터가 없을때도 고려
        let page0_data = [];
        let page1_data = [];
        let page2_data = [];
        let page3_data = [];
        for (var a = 0; a < result.data.length; a++) {
          if (result.data[a].store_info_work_type.indexOf('1') != -1) {
            page0_data.push(result.data[a]);
          }
          if (result.data[a].store_info_work_type.indexOf('2') != -1) {
            page1_data.push(result.data[a]);
          }
          if (result.data[a].store_info_work_type.indexOf('3') != -1) {
            page2_data.push(result.data[a]);
          }
          if (result.data[a].store_info_work_type.indexOf('4') != -1) {
            page3_data.push(result.data[a]);
          }
        }
        setPage0_list(page0_data);
        setPage1_list(page1_data);
        setPage2_list(page2_data);
        setPage3_list(page3_data);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };
  const data_delete = async function (item) {
    try {
      setIsLoading(true);
      let url = Domain + 'work_list/delete';
      let data = {
        key: Key,
        route: route.params,
        item: item,
      };
      let result = await axios.patch(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (result.data.type == 0) {
        setIsLoading(false);
        alert(result.data.message);
      } else {
        setIsLoading(false);
        get_data();
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };
  const data_pause = async function (item) {
    try {
      setIsLoading(true);
      let url = Domain + 'work_list/pause';
      let data = {
        key: Key,
        route: route.params,
        item: item,
      };
      let result = await axios.patch(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (result.data.type == 0) {
        setIsLoading(false);
        alert(result.data.message);
      } else {
        setIsLoading(false);
        get_data();
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };
  const data_open = async function (item) {
    try {
      setIsLoading(true);
      let url = Domain + 'work_list/open';
      let data = {
        key: Key,
        route: route.params,
        item: item,
      };
      let result = await axios.patch(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (result.data.type == 0) {
        setIsLoading(false);
        alert(result.data.message);
      } else {
        setIsLoading(false);
        get_data();
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    get_data();
    setRefreshing(false);
  }, []);
  React.useEffect(() => {
    get_data();
  }, [work_list_select, car_list_select]);
  React.useEffect(() => {
    if (page == 0) {
      setData_list(page0_list);
    } else if (page == 1) {
      setData_list(page1_list);
    } else if (page == 2) {
      setData_list(page2_list);
    } else if (page == 3) {
      setData_list(page3_list);
    }
  }, [page, page0_list, page1_list, page2_list, page3_list]);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/arrow_left.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>작업관리</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer
            onPress={() => {
              navigation.navigate('Work_register', route.params);
            }}>
            <ToptoprightrightText>작업등록</ToptoprightrightText>
          </ToptoprightrightContainer>
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
              <TopbottomleftContainer
                onPress={() => {
                  setPage(3);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>캠핑카</TopbottomleftText>
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
              <TopbottomleftContainer
                onPress={() => {
                  setPage(3);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>캠핑카</TopbottomleftText>
              </TopbottomleftContainer>
            </>
          ) : page == 2 ? (
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
              <TopbottomleftContainer
                onPress={() => {
                  setPage(3);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>캠핑카</TopbottomleftText>
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
              <TopbottomleftContainer
                onPress={() => {
                  setPage(2);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>편의장치</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText>캠핑카</TopbottomleftText>
              </TopbottomleftContainer>
            </>
          )}
        </TopbottomContainer>
      </TopContainer>
      <MidContainer
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {data_list.map((item) => (
          <MidmidContainer key={item._id}>
            <MidmidContainer_Top>
              <MidmidContainer_Top_left>
                <MidmidContainer_Top_left_Image
                  source={{
                    uri: item.store_thumbnail[0],
                  }}></MidmidContainer_Top_left_Image>
              </MidmidContainer_Top_left>
              <MidmidContainer_Top_right>
                <MidmidContainer_Top_right_Text_View>
                  <MidmidContainer_Top_right_Text>
                    {item.store_work_name}
                  </MidmidContainer_Top_right_Text>
                </MidmidContainer_Top_right_Text_View>
                <MidmidContainer_Top_right_Text2_View>
                  <MidmidContainer_Top_right_Text2>
                    차종 :{' '}
                    {item.store_info_car[0] == 'all'
                      ? '전체'
                      : item.cars.length == 1
                      ? item.cars[0].model
                      : item.cars.length > 1
                      ? item.cars[0].model +
                        '외 ' +
                        (item.cars.length - 1) +
                        '종'
                      : null}
                  </MidmidContainer_Top_right_Text2>
                  <MidmidContainer_Top_right_Text2>
                    작업소요시간 : {item.store_work_time}
                  </MidmidContainer_Top_right_Text2>
                  <MidmidContainer_Top_right_Text2>
                    공임비 : {item.store_work_labor_cost}원
                  </MidmidContainer_Top_right_Text2>
                  <MidmidContainer_Top_right_Text2>
                    부품비 :{' '}
                    {item.store_work_total_cost - item.store_work_labor_cost}원
                  </MidmidContainer_Top_right_Text2>
                </MidmidContainer_Top_right_Text2_View>
              </MidmidContainer_Top_right>
            </MidmidContainer_Top>
            <MidmidContainer_Bottom>
              <MidmidContainer_Bottom_left></MidmidContainer_Bottom_left>
              <MidmidContainer_Bottom_right>
                <MidmidContainer_Bottom_right_Button
                  onPress={() => {
                    navigation.navigate('Work_revise', {
                      route,
                      item,
                      onRefresh,
                    });
                  }}
                  style={{
                    borderBottomColor: '#0066B1',
                    borderTopColor: '#0066B1',
                    borderRightColor: '#0066B1',
                    borderLeftColor: '#0066B1',
                  }}>
                  <MidmidContainer_Bottom_right_Button_Text
                    style={{color: '#0066B1'}}>
                    수정
                  </MidmidContainer_Bottom_right_Button_Text>
                </MidmidContainer_Bottom_right_Button>
                <MidmidContainer_Bottom_right_Button
                  onPress={() => {
                    if (item.store_work_stop == false) {
                      data_pause(item);
                    } else {
                      data_open(item);
                    }
                  }}
                  style={{
                    borderBottomColor: '#003D78',
                    borderTopColor: '#003D78',
                    borderRightColor: '#003D78',
                    borderLeftColor: '#003D78',
                  }}>
                  <MidmidContainer_Bottom_right_Button_Text
                    style={{color: '#003D78'}}>
                    {item.store_work_stop == false ? '일시중지' : '다시시작'}
                  </MidmidContainer_Bottom_right_Button_Text>
                </MidmidContainer_Bottom_right_Button>
                <MidmidContainer_Bottom_right_Button
                  onPress={() => {
                    data_delete(item);
                  }}
                  style={{
                    borderBottomColor: '#FF0000',
                    borderTopColor: '#FF0000',
                    borderRightColor: '#FF0000',
                    borderLeftColor: '#FF0000',
                  }}>
                  <MidmidContainer_Bottom_right_Button_Text
                    style={{color: '#FF0000'}}>
                    삭제
                  </MidmidContainer_Bottom_right_Button_Text>
                </MidmidContainer_Bottom_right_Button>
              </MidmidContainer_Bottom_right>
            </MidmidContainer_Bottom>
          </MidmidContainer>
        ))}
      </MidContainer>
      <BottomContainer>
        <BottomleftContainer
          onPress={() => {
            navigation.navigate('Car_choice', {
              setCar_list_select,
              setCar_list_korean_select,
              /*carOnGoBack: (data) => {
                setCar_list_select(data);
              },
              carOnGoBack2: (data) => {
                setCar_list_korean_select(data);
              },*/
              car_list_select,
              car_list_korean_select,
            });
          }}>
          <BottomleftText>차량선택</BottomleftText>
        </BottomleftContainer>
        <BottomrightContainer
          onPress={() => {
            navigation.navigate('Work_choice', {
              setWork_list_select,
              setWork_list_korean_select,
              /*onGoBack : (data)=>{
                setWork_list_select(data)
              }*/
              work_list_select,
              work_list_korean_select,
            });
          }}>
          <BottomrightText>작업종류</BottomrightText>
        </BottomrightContainer>
      </BottomContainer>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Work;
