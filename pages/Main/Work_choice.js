import React from 'react';
import styled from 'styled-components/native';
import axios from 'axios';
import Domain from '../../net/Domain';
import {ActivityIndicator} from 'react-native';
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
const MidContainer = styled.View`
  flex: 8;
  flex-direction: row;
`;
const MidContainer_left = styled.ScrollView`
  width: 30%;
  background: #f1f1f1;
`;
const MidContainer_left_View = styled.TouchableOpacity`
  height: 60px;
  justify-content: center;
  align-items: center;
  border-bottom-color: #ffffff;
  border-bottom-width: 1px;
`;
const MidContainer_left_View_Text = styled.Text``;
const MidContainer_right = styled.ScrollView`
  width: 70%;
`;
const MidContainer_right_View = styled.TouchableOpacity`
  height: 30px;
  justify-content: center;
  margin-left: 10px;
`;
const MidContainer_right_View_Text = styled.Text``;
function Work_choice({navigation, route}) {
  console.log(route);
  const [isLoading, setIsLoading] = React.useState(false);
  const [list, setList] = React.useState([]);
  const [list_select, setList_select] = React.useState('');
  const [list2, setList2] = React.useState([]);
  const [list2_select, setList2_select] = React.useState([]);
  const [list2_korean_select, setList2_korean_select] = React.useState([]);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    let url = Domain + 'work_findAll?work_type=1';
    setIsLoading(true);
    if (route.params.work_list_select.length > 0) {
      setList2_select(route.params.work_list_select);
      setList2_korean_select(route.params.work_list_korean_select);
    }

    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        //console.log(response.data);
        setList(response.data);
        page_change2(response.data[0].work_sub_type_name);
        setList_select(response.data[0]._id);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  const page_change = React.useCallback(
    (pages) => {
      setIsLoading(true);
      let url = Domain + 'work_findAll?work_type=';
      if (pages === 1) {
        url += 1;
      } else if (pages === 2) {
        url += 2;
      } else if (pages === 3) {
        url += 3;
      } else if (pages === 4) {
        url += 4;
      }
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          setIsLoading(false);
          //console.log(response.data[0].work_sub_type_name);
          setList(response.data);
          page_change2(response.data[0].work_sub_type_name);
          setList_select(response.data[0]._id);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    [page],
  );
  const page_change2 = React.useCallback((work_sub_type_name) => {
    let url = Domain + 'work_findAll?work_sub_type_name=' + work_sub_type_name;
    setIsLoading(true);
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setList2(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/x.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>작업종류</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer
            onPress={() => {
              //route.params.onGoBack(list2_select);
              route.params.setWork_list_select(list2_select);
              route.params.setWork_list_korean_select(list2_korean_select);
              navigation.goBack();
              /*navigation.navigate('Work_register', {
                list2_select,
                list2_korean_select,
              });*/
            }}>
            <ToptoprightrightText>완료</ToptoprightrightText>
          </ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer>
          {page == 1 ? (
            <>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText>드레스업</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(2);
                  page_change(2);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  퍼포먼스
                </TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(3);
                  page_change(3);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  편의장치
                </TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(4);
                  page_change(4);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  캠핑카
                </TopbottomleftText>
              </TopbottomleftContainer>
            </>
          ) : page == 2 ? (
            <>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(1);
                  page_change(1);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  드레스업
                </TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText>퍼포먼스</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(3);
                  page_change(3);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  편의장치
                </TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(4);
                  page_change(4);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  캠핑카
                </TopbottomleftText>
              </TopbottomleftContainer>
            </>
          ) : page == 3 ? (
            <>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(1);
                  page_change(1);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  드레스업
                </TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(2);
                  page_change(2);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  퍼포먼스
                </TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText>편의장치</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(4);
                  page_change(4);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  캠핑카
                </TopbottomleftText>
              </TopbottomleftContainer>
            </>
          ) : (
            <>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(1);
                  page_change(1);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  드레스업
                </TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(2);
                  page_change(2);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  퍼포먼스
                </TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(3);
                  page_change(3);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText style={{color: '#aaaaaa'}}>
                  편의장치
                </TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomleftContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomleftText style={{color: '#000000'}}>
                  캠핑카
                </TopbottomleftText>
              </TopbottomleftContainer>
            </>
          )}
        </TopbottomContainer>
      </TopContainer>
      {isLoading ? (
        <MidContainer style={{justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color="#999999" size="large"></ActivityIndicator>
        </MidContainer>
      ) : (
        <MidContainer>
          <MidContainer_left>
            {list.map((item) =>
              list_select == item._id ? (
                <MidContainer_left_View
                  style={{backgroundColor: '#DBDBDB'}}
                  key={item._id}
                  onPress={() => {
                    page_change2(item.work_sub_type_name);
                  }}>
                  <MidContainer_left_View_Text style={{color: '#000000'}}>
                    {item.work_sub_type_name}
                  </MidContainer_left_View_Text>
                </MidContainer_left_View>
              ) : (
                <MidContainer_left_View
                  key={item._id}
                  onPress={() => {
                    page_change2(item.work_sub_type_name);
                    setList_select(item._id);
                  }}>
                  <MidContainer_left_View_Text>
                    {item.work_sub_type_name}
                  </MidContainer_left_View_Text>
                </MidContainer_left_View>
              ),
            )}
          </MidContainer_left>
          <MidContainer_right>
            {list2.map((item) =>
              list2_select.indexOf(item._id) != -1 ? (
                <MidContainer_right_View
                  key={item._id}
                  onPress={() => {
                    list2_select.splice(list2_select.indexOf(item._id), 1);
                    let change_val = list2_select.slice();
                    setList2_select(change_val);

                    list2_korean_select.splice(
                      list2_korean_select.indexOf(item.work_name),
                      1,
                    );
                    let change_val2 = list2_korean_select.slice();
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
      )}
    </Container>
  );
}

export default Work_choice;
