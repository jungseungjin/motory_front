import React from 'react';
import styled from 'styled-components/native';
import {RefreshControl} from 'react-native';
import moment from 'moment';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import Container_act from '../../components/Main/Container_act';
import FastImage from 'react-native-fast-image';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 1.5;
`;
const ToptopContainer = styled.View`
  flex: 2;
  flex-direction: row;
`;

const ToptoprightContainer = styled.View`
  flex: 7;
  margin-left: 10%;
  align-items: center;
  justify-content: center;
`;
const ToptoprightrightContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
  flex-direction: row;
`;
const ToptoprightrightContainer_Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
`;
const ToptoprightrightImage = styled.Image``;

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
  flex: 8;
  border-top-color: #ff00ff;
  border-top-width: 1px;
  background-color: #f5f5f5;
`;
const MidmidContainer = styled.TouchableOpacity`
  height: 100px;
  margin: 10px 20px 0 20px;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidmidContainer_left = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_left_image = styled.Image`
  width: 45px;
  height: 45px;
  margin: auto;
`;
const MidmidContainer_mid = styled.View`
  flex: 5;
  margin: auto;
`;
const MidmidContainer_mid_top = styled.View`
  flex: 1;
  flex-direction: row;
`;
const MidmidContainer_mid_top_left = styled.View`
  flex: 2;
`;
const MidmidContainer_mid_top_left_text = styled.Text`
  font-weight: bold;
  margin: 0 0 0 auto;
  font-size: 15px;
`;
const MidmidContainer_mid_bottom_left_left = styled.View`
  flex: 1;
`;
const MidmidContainer_mid_bottom_left_right = styled.View`
  flex: 1;
`;
const MidmidContainer_mid_top_right = styled.View`
  flex: 8;
`;
const MidmidContainer_mid_top_right_Text = styled.Text`
  font-size: 16px;
`;
const MidmidContainer_mid_mid = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_mid_bottom = styled.View`
  flex-direction: row;
  flex: 1;
  border: 1px solid #ff00ff;
`;

const MidmidContainer_mid_top_Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const MidmidContainer_mid_mid_Text = styled.Text`
  font-size: 14px;
`;

const MidmidContainer_right = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  margin: auto;
`;
const MidmidContainer_right_Text = styled.Text`
  font-size: 10px;
  margin: auto;
`;
const MidmidContainer_right_mid = styled.View`
  background-color: red;
  width: 20px;
  height: 20px;
  margin: auto;
  border-radius: 20px;
  margin-top: 5px;
`;
const MidmidContainer_right_mid_Text = styled.Text`
  color: #ffffff;
  margin: auto;
  font-weight: bold;
  font-size: 10px;
`;
const MidmidContainer_right_mid_image = styled.Image`
  margin: auto;
  width: 20px;
  height: 20px;
`;
function Reservation_list({navigation, route}) {
  console.log('reservation_list');
  console.log(route);
  console.log('reservation_list');
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [showData, setShowData] = React.useState([]);
  const [page0Data, setPage0Data] = React.useState([]);
  const [page1Data, setPage1Data] = React.useState([]);

  const get_data = async function () {
    try {
      setIsLoading(true);
      let url =
        Domain +
        'reservation_list' +
        '?key=' +
        Key +
        '&user_id=' +
        route.params.user_id;

      let result = await axios.get(url);

      if (result.data[0].type == 0) {
        setIsLoading(false);
        alert(result.data[0].message);
      } else {
        let page0 = [];
        let page1 = [];
        for (var a = 0; a < result.data.length; a++) {
          if (result.data[a].message == 'ok') {
          } else {
            if (result.data[a].reservation_type == 5) {
              page1.push(result.data[a]);
            } else {
              page0.push(result.data[a]);
            }
          }
        }
        setPage(0);
        setShowData(page0);
        setPage0Data(page0);
        setPage1Data(page1);
        setIsLoading(false);
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
  }, []);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptoprightContainer>
            <ToptoprightText>예약내역</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer></ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer>
          <TopbottomleftContainer
            onPress={() => {
              if (page == 1) {
                setPage(0);
                setShowData(page0Data);
              }
            }}
            style={
              page == 0
                ? {borderBottomColor: '#000000'}
                : page == 1
                ? {borderBottomColor: '#aaaaaa'}
                : null
            }>
            <TopbottomleftText
              style={
                page == 0
                  ? {color: '#000000'}
                  : page == 1
                  ? {color: '#aaaaaa'}
                  : null
              }>
              작업예정
            </TopbottomleftText>
          </TopbottomleftContainer>
          <TopbottomleftContainer
            onPress={() => {
              if (page == 0) {
                setPage(1);
                setShowData(page1Data);
              }
            }}
            style={
              page == 0
                ? {borderBottomColor: '#aaaaaa'}
                : page == 1
                ? {borderBottomColor: '#000000'}
                : null
            }>
            <TopbottomleftText
              style={
                page == 0
                  ? {color: '#aaaaaa'}
                  : page == 1
                  ? {color: '#000000'}
                  : null
              }>
              작업완료
            </TopbottomleftText>
          </TopbottomleftContainer>
        </TopbottomContainer>
      </TopContainer>
      <MidContainer
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {showData.map((item) => (
          <MidmidContainer
            key={item._id}
            onPress={() => {
              navigation.navigate('Reservation_detail', item);
            }}>
            <MidmidContainer_left>
              <FastImage
                //style={styles.image}
                style={{
                  width: 45,
                  height: 45,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
                source={{
                  uri: item.users[0].review_user_iu_image,
                  //headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
                //'stretch'
              />
            </MidmidContainer_left>
            <MidmidContainer_mid>
              <MidmidContainer_mid_top></MidmidContainer_mid_top>
              <MidmidContainer_mid_top>
                <MidmidContainer_mid_top_left>
                  <MidmidContainer_mid_top_left_text>
                    작업명 :{' '}
                  </MidmidContainer_mid_top_left_text>
                </MidmidContainer_mid_top_left>
                <MidmidContainer_mid_top_right>
                  <MidmidContainer_mid_top_right_Text>
                    {item.works[0].store_work_name}
                  </MidmidContainer_mid_top_right_Text>
                </MidmidContainer_mid_top_right>
              </MidmidContainer_mid_top>
              <MidmidContainer_mid_top>
                <MidmidContainer_mid_top_left>
                  <MidmidContainer_mid_top_left_text>
                    차종 :{' '}
                  </MidmidContainer_mid_top_left_text>
                </MidmidContainer_mid_top_left>
                <MidmidContainer_mid_top_right>
                  <MidmidContainer_mid_top_right_Text>
                    {item.cars[0].model},{item.cars[0].grade},
                    {item.cars[0].grade_detail}
                  </MidmidContainer_mid_top_right_Text>
                </MidmidContainer_mid_top_right>
              </MidmidContainer_mid_top>
              <MidmidContainer_mid_top>
                <MidmidContainer_mid_top_left>
                  <MidmidContainer_mid_top_left_text
                    style={{fontWeight: 'normal', fontSize: 10}}>
                    예약일정 :{' '}
                  </MidmidContainer_mid_top_left_text>
                </MidmidContainer_mid_top_left>
                <MidmidContainer_mid_top_right>
                  <MidmidContainer_mid_top_right_Text style={{fontSize: 10}}>
                    {moment(item.reservation_date).format('YYYY년 MM월 DD일')}
                    {moment(item.reservation_start_time, 'HHmm').format(
                      'HH:mm',
                    )}{' '}
                    ~
                    {moment(
                      moment(item.reservation_start_time, 'HHmm').format(
                        'HHmm',
                      ) *
                        1 +
                        moment(
                          item.works[0].store_work_time
                            .replace('시간', '')
                            .replace(' ', '')
                            .replace('분', ''),
                          'HHmm',
                        ).format('HHmm') *
                          1,
                      'HHmm',
                    ).format('HH:mm')}
                    고객명 : {item.users[0].iu_name}
                  </MidmidContainer_mid_top_right_Text>
                </MidmidContainer_mid_top_right>
              </MidmidContainer_mid_top>
              <MidmidContainer_mid_top></MidmidContainer_mid_top>
            </MidmidContainer_mid>
          </MidmidContainer>
        ))}
      </MidContainer>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Reservation_list;
