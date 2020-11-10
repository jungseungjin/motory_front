import React from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import Domain from '../../net/Domain';

import Container_act from '../../components/Main/Container_act';
import FastImage from 'react-native-fast-image';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 1;
  border-bottom-color: #dbdbdb;
  border-bottom-width: 1px;
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
const MidContainer = styled.View`
  flex: 8;
  flex-direction: row;
`;
const MidContainer_left = styled.View`
  width: 30%;
  background: #ffffff;
  border-right-color: #dbdbdb;
  border-right-width: 1px;
`;
const MidContainer_left_View = styled.View`
  height: 90px;
  justify-content: center;
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-width: 1px;
`;
const MidContainer_left_View_Brand_View = styled.ScrollView``;
const MidContainer_left_View_Brand = styled.TouchableOpacity`
  height: 90px;
  justify-content: center;
  align-items: center;
`;
const MidContainer_left_View_Brand_Text = styled.Text``;
const MidContainer_left_View_nested = styled.TouchableOpacity`
  height: 30px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const MidContainer_left_View_nested_Text = styled.Text``;
const MidContainer_left_View_nested_Box = styled.View`
  margin-left: 15px;
  height: 15px;
  width: 15px;
  background: #dbdbdb;
  border-radius: 3px;
`;

const MidContainer_left_View_Text = styled.Text``;
const MidContainer_right = styled.ScrollView`
  width: 70%;
`;
const MidContainer_right_View = styled.TouchableOpacity`
  height: 40px;
  justify-content: center;
  margin-left: 20px;
`;
const MidContainer_right_View_Text = styled.Text``;

const Bottom_Container = styled.View`
  flex: 1;
  flex-direction: row;
`;
const Bottom_Container_Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Bottom_Container_Button_Text = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;
function Work_choice({navigation, route}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [type_touch, setType_touch] = React.useState(0);
  const [list, setList] = React.useState([]);
  const [list2, setList2] = React.useState([]);
  const [list2_select, setList2_select] = React.useState([]);
  const [list2_korean_select, setList2_korean_select] = React.useState([]);
  const [list3, setList3] = React.useState([]);
  const [list3_select, setList3_select] = React.useState([]);
  React.useEffect(() => {
    if (route.params.car_list_select.length > 0) {
      setList2_select(route.params.car_list_select);
      setList3_select(route.params.car_list_select);
      setList2_korean_select(route.params.car_list_korean_select);
    }
  }, []);
  React.useEffect(() => {
    let get_data = async function () {
      if (type_touch == 0 || type_touch == 3) {
        setList([]);
      } else {
        let url = Domain + 'brand_list/' + type_touch;
        setIsLoading(true);
        let result = await axios.get(url);
        if (result.data[0].type) {
          //get에서 type이 있으면 잘못된거
          alert(result.data[0].message);
          setIsLoading(false);
        } else {
          setList(result.data);
          setIsLoading(false);
        }
      }
    };
    get_data();
  }, [type_touch]);
  let get_data2 = async function (data) {
    setIsLoading(true);
    setList2([]);
    let url = Domain + 'model_list/' + data.brand;

    let result = await axios.get(url);
    if (result.data[0].type) {
      //get에서 type이 있으면 잘못된거
      alert(result.data[0].message);
      setIsLoading(false);
    } else {
      setList2(result.data);
      setIsLoading(false);
    }
  };
  let get_data3 = async function (data) {
    setIsLoading(true);
    setList3([]);
    let url = Domain + 'model_detail_list/' + data.brand + '/' + data.model;
    let result = await axios.get(url);
    if (result.data[0].type) {
      //get에서 type이 있으면 잘못된거
      alert(result.data[0].message);
      setIsLoading(false);
    } else {
      setList3(result.data);
      setIsLoading(false);
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
            <ToptoprightText>차량선택</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer
            onPress={() => {
              //route.params.carOnGoBack(list3_select);
              route.params.setCar_list_select(list3_select);
              if (list2_korean_select.length > 0) {
                let arr = list2_korean_select;
                arr = arr.filter(function (a, i, self) {
                  return self.indexOf(a) === i;
                });
                route.params.setCar_list_korean_select(arr);
              } else {
                route.params.setCar_list_korean_select(list2_korean_select);
              }
              navigation.goBack();
            }}>
            <ToptoprightrightText>완료</ToptoprightrightText>
          </ToptoprightrightContainer>
        </ToptopContainer>
      </TopContainer>
      <MidContainer>
        <MidContainer_left>
          <MidContainer_left_View>
            <MidContainer_left_View_nested
              onPress={() => {
                if (type_touch != 1) {
                  setType_touch(1);
                  setList2([]);
                  setList3([]);
                  if (list3_select.length > 0) {
                    if (list3_select[0] == 'all') {
                      setList3_select([]);
                      setList2_korean_select([]);
                    }
                  }
                } else {
                  setType_touch(0);
                  setList2([]);
                  setList3([]);
                  if (list3_select.length > 0) {
                    if (list3_select[0] == 'all') {
                      setList3_select([]);
                      setList2_korean_select([]);
                    }
                  }
                }
              }}>
              <MidContainer_left_View_nested_Text>
                국산
              </MidContainer_left_View_nested_Text>
              {type_touch == 1 ? (
                <MidContainer_left_View_nested_Box
                  style={{
                    backgroundColor: '#F05568',
                  }}></MidContainer_left_View_nested_Box>
              ) : (
                <MidContainer_left_View_nested_Box></MidContainer_left_View_nested_Box>
              )}
            </MidContainer_left_View_nested>
            <MidContainer_left_View_nested
              onPress={() => {
                if (type_touch != 2) {
                  setType_touch(2);
                  setList2([]);
                  setList3([]);
                  if (list3_select.length > 0) {
                    if (list3_select[0] == 'all') {
                      setList3_select([]);
                      setList2_korean_select([]);
                    }
                  }
                } else {
                  setType_touch(0);
                  setList2([]);
                  setList3([]);
                  if (list3_select.length > 0) {
                    if (list3_select[0] == 'all') {
                      setList3_select([]);
                      setList2_korean_select([]);
                    }
                  }
                }
              }}>
              <MidContainer_left_View_nested_Text>
                수입
              </MidContainer_left_View_nested_Text>
              {type_touch == 2 ? (
                <MidContainer_left_View_nested_Box
                  style={{
                    backgroundColor: '#F05568',
                  }}></MidContainer_left_View_nested_Box>
              ) : (
                <MidContainer_left_View_nested_Box></MidContainer_left_View_nested_Box>
              )}
            </MidContainer_left_View_nested>
            <MidContainer_left_View_nested
              onPress={() => {
                if (type_touch != 3) {
                  setType_touch(3);
                  setList2([{_id: 'self', model: '전체 차종 선택'}]);
                  setList2_select(['self']);
                  setList2_korean_select(['전체 차종 선택']);
                  setList3([]);
                  setList3_select(['all']);
                } else {
                  setType_touch(0);
                  setList2([]);
                  setList2_select([]);
                  setList2_korean_select([]);
                  setList3([]);
                  setList3_select([]);
                }
              }}>
              <MidContainer_left_View_nested_Text>
                전체
              </MidContainer_left_View_nested_Text>
              {type_touch == 3 ? (
                <MidContainer_left_View_nested_Box
                  style={{
                    backgroundColor: '#F05568',
                  }}></MidContainer_left_View_nested_Box>
              ) : (
                <MidContainer_left_View_nested_Box></MidContainer_left_View_nested_Box>
              )}
            </MidContainer_left_View_nested>
          </MidContainer_left_View>
          <MidContainer_left_View_Brand_View>
            {list.map((item) => (
              <MidContainer_left_View_Brand
                key={item._id}
                onPress={() => {
                  get_data2(item);
                }}>
                <FastImage
                  style={{marginTop: -30, height: 100, width: 100}}
                  source={{
                    uri: item.brand_image,
                    //headers: {Authorization: 'someAuthToken'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}></FastImage>
                <MidContainer_left_View_Brand_Text style={{marginTop: -30}}>
                  {item.brand}
                </MidContainer_left_View_Brand_Text>
              </MidContainer_left_View_Brand>
            ))}
          </MidContainer_left_View_Brand_View>
        </MidContainer_left>
        <MidContainer_right>
          {list2.map((item) => (
            <>
              <MidContainer_right_View
                key={item._id}
                onPress={() => {
                  if (item._id == 'self') {
                  } else {
                    get_data3(item);
                  }
                }}>
                {list2_select.indexOf(item._id) != -1 ? (
                  <MidContainer_right_View_Text style={{color: '#946AEF'}}>
                    • {item.model}
                  </MidContainer_right_View_Text>
                ) : (
                  <MidContainer_right_View_Text>
                    • {item.model}
                  </MidContainer_right_View_Text>
                )}
              </MidContainer_right_View>
              {list3.map((item2) =>
                item.model == item2.model ? (
                  list3_select.indexOf(item2._id) != -1 ? (
                    <MidContainer_right_View
                      key={item2._id}
                      style={{marginLeft: 40}}
                      onPress={() => {
                        list3_select.splice(list3_select.indexOf(item2._id), 1);
                        let change_val2 = list3_select.slice();
                        setList3_select(change_val2);

                        list2_select.splice(list2_select.indexOf(item._id), 1);
                        let change_val = list2_select.slice();
                        setList2_select(change_val);

                        list2_korean_select.splice(
                          list2_korean_select.indexOf(item.model),
                          1,
                        );
                        let change_val3 = list2_korean_select.slice();
                        setList2_korean_select(change_val3);
                      }}>
                      <MidContainer_right_View_Text style={{color: '#946AEF'}}>
                        {item2.model_detail}
                      </MidContainer_right_View_Text>
                    </MidContainer_right_View>
                  ) : (
                    <MidContainer_right_View
                      key={item2._id}
                      style={{marginLeft: 40}}
                      onPress={() => {
                        list3_select.push(item2._id);
                        let change_val2 = list3_select.slice();
                        setList3_select(change_val2);

                        list2_select.push(item._id);
                        let change_val = list2_select.slice();
                        setList2_select(change_val);

                        list2_korean_select.push(item.model);
                        let change_val3 = list2_korean_select.slice();
                        setList2_korean_select(change_val3);
                      }}>
                      <MidContainer_right_View_Text>
                        {item2.model_detail}
                      </MidContainer_right_View_Text>
                    </MidContainer_right_View>
                  )
                ) : null,
              )}
            </>
          ))}
          {list2.map((item) =>
            list2_select.indexOf(item._id) != -1 ? (
              <MidContainer_right_View
                key={item._id}
                onPress={() => {
                  list2_select.splice(list2_select.indexOf(item._id), 1);
                  let change_val = list2_select.slice();
                  setList2_select(change_val);

                  list2_korea_select.splice(
                    list2_korea_select.indexOf(item.work_name),
                    1,
                  );
                  let change_val2 = list2_korea_select.slice();
                  setList2_korean_select(change_val2);
                }}>
                <MidContainer_right_View_Text style={{color: '#946AEF'}}>
                  {item.work_name}
                </MidContainer_right_View_Text>
              </MidContainer_right_View>
            ) : (
              <MidContainer_right_View
                key={item._id}
                onPress={() => {
                  list2_select.push(item._id);
                  let change_val = list2_select.slice();
                  setList2_select(change_val);

                  list2_korean_select.push(item.work_name);
                  let change_val2 = list2_korean_select.slice();
                  setList2_korean_select(change_val2);
                }}>
                <MidContainer_right_View_Text>
                  {item.work_name}
                </MidContainer_right_View_Text>
              </MidContainer_right_View>
            ),
          )}
        </MidContainer_right>
      </MidContainer>
      <Bottom_Container>
        <Bottom_Container_Button
          style={{backgroundColor: '#5F5F5F'}}
          onPress={() => {
            setType_touch(0);
            setList([]);
            setList2([]);
            setList2_select([]);
            setList2_korean_select([]);
            setList3([]);
            setList3_select([]);
          }}>
          <Bottom_Container_Button_Text>초기화</Bottom_Container_Button_Text>
        </Bottom_Container_Button>
        <Bottom_Container_Button
          style={{backgroundColor: '#946AEF'}}
          onPress={() => {
            route.params.setCar_list_select(list3_select);
            if (list2_korean_select.length > 0) {
              let arr = list2_korean_select;
              arr = arr.filter(function (a, i, self) {
                return self.indexOf(a) === i;
              });
              route.params.setCar_list_korean_select(arr);
            } else {
              route.params.setCar_list_korean_select(list2_korean_select);
            }
            navigation.goBack();
          }}>
          <Bottom_Container_Button_Text>저장</Bottom_Container_Button_Text>
        </Bottom_Container_Button>
      </Bottom_Container>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Work_choice;
