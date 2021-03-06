import React from 'react';
import styled from 'styled-components/native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import Container_act from '../../components/Main/Container_act';
import {LocaleConfig} from 'react-native-calendars';
import {add, set} from 'react-native-reanimated';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 1;
  flex-direction: row;
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
const MidContainer = styled.View`
  flex: 5;
  border: 1px solid #ff00ff;
`;
const BottomContainer = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
`;
const BottomTopContainer = styled.View`
  flex: 1;
  background: #222e75;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const BottomTopContainer_touch = styled.TouchableOpacity`
  padding: 5px;
  border: 1px solid #ff00ff;
`;
const BottomTopContainer_image = styled.Image`
  margin-right: 20px;
  width: 15px;
  height: 15px;
`;
const BottomTopContainer_Text = styled.Text`
  color: #ffffff;
  border: 1px solid #ff00ff;
  margin: 0 auto 0 auto;
`;
const BottomTopContainer_TextRight = styled.Text`
  color: #ffffff;
  border: 1px solid #ff00ff;
`;
const BottomBottomContainer = styled.ScrollView`
  flex: 5;
  background: #212055;
`;
const BottomBottomContainer_nest = styled.View`
  height: 100px;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const BottomBottomContainer_nest_touch = styled.TouchableOpacity`
  height: 100px;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const BottomBottomContainer_nest_left = styled.View`
  flex: 1.2;
  flex-direction: row;
`;
const BottomBottomContainer_nest_left_text = styled.Text`
  color: #ffffff;
  text-align: right;
  font-size: 18px;
`;
const BottomBottomContainer_nest_right_image = styled.Image`
  height: 100%;
`;
const BottomBottomContainer_nest_right = styled.View`
  flex: 4;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const BottomBottomContainer_nest_right_left = styled.View`
  flex: 4;
  border: 1px solid #ff00ff;
`;
const BottomBottomContainer_nest_right_left_text = styled.Text`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 2px;
`;
const BottomBottomContainer_nest_right_left_text2 = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;
const BottomBottomContainer_nest_right_right = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: center;
`;
const BottomBottomContainer_nest_right_right_image = styled.Image``;

LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘', // 공식 문서에는 today 프로퍼티가 있지만, 타입스크립트를 이용하는 분들에게는 에러가 발생합니다.
};
LocaleConfig.defaultLocale = 'fr';
function Reservation({navigation, route}) {
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectDay, setSelectDay] = React.useState(
    moment().format('YYYY-MM-DD'),
  );
  const [calendarArray, setCalendarArray] = React.useState({
    //'2020-11-18': {disabled: true},
    //한달끝까지 객체로 해서
    //useCallback으로 수정해야될듯
    //바텀에도 리스트.맵을 써서 나오도록 수정
    //selected 를 처음에는 오늘로 설정하고 그 이후에는 터치된값에 selected넣어주고 그 값으로 예약일정가져오기
  }); //한달의 예약있음 없음을 체크하는 객체 -> 뒤에서 만들어서 가져오자
  const [dayData, setDayData] = React.useState([]); //선택된날의 예약데이터
  const [storeData, setStoreData] = React.useState([]); //매장정보 가져오기
  const [storeOneData, setStoreOneData] = React.useState([]); // 매장운영시간정보 ->selectDay의 요일에 맞춰서 변경
  //선택된날의 예약데이터 가져오기
  const [calendarMonth, setCalendarMonth] = React.useState(
    moment().format('YYYY-MM'),
  );
  const [workTime, setWorkTime] = React.useState([]);
  const [lockTime, setLockTime] = React.useState([]);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const get_data_date = async function (data) {
    try {
      setIsLoading(true);
      if (data == null || data == undefined) {
        data = moment().format('YYYY-MM-DD');
      }
      let search_date = moment(data).format('YYYY-MM-DD');
      let url =
        Domain +
        'reservation_date' +
        '?key=' +
        Key +
        '&user_id=' +
        route.params.user_id +
        '&date=' +
        search_date;
      let result = await axios.get(url);

      if (result.data[0].type == 0) {
        setIsLoading(false);
        alert(result.data[0].message);
      } else {
        setDayData(result.data);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };

  //매장정보 가져오기 -> 운영시간에 따라서 뿌리기
  const get_data_store = async function () {
    try {
      setIsLoading(true);
      let url =
        Domain +
        'reservation_get_store' +
        '?key=' +
        Key +
        '&_id=' +
        route.params._id;
      let result = await axios.get(url);

      if (result.data[0].type == 0) {
        setIsLoading(false);
        alert(result.data[0].message);
      } else {
        setStoreData(result.data);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };

  //한달의 예약데이터 유무 가져오기
  const get_data_month = async function (data) {
    try {
      setIsLoading(true);
      if (data == null || data == undefined) {
        data = moment().format('YYYY-MM');
      }
      let search_date = moment(data).format('YYYY-MM');
      let url =
        Domain +
        'reservation_month' +
        '?key=' +
        Key +
        '&user_id=' +
        route.params.user_id +
        '&date=' +
        search_date;
      console.log(url);
      let result = await axios.get(url);
      if (result.data[0].type == 0) {
        setIsLoading(false);
        alert(result.data[0].message);
      } else {
        console.log(result.data[0]);
        setCalendarArray(result.data[0]);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };

  //예약불가시간 가져오기
  const get_lock_time = async function (data) {
    try {
      setIsLoading(true);
      if (data == null || data == undefined) {
        data = moment().format('YYYY-MM-DD');
      }
      let search_date = moment(data).format('YYYY-MM-DD');
      let url =
        Domain +
        'lock_time_date' +
        '?key=' +
        Key +
        '&user_id=' +
        route.params.user_id +
        '&date=' +
        search_date;
      let result = await axios.get(url);

      if (result.data[0].type == 0) {
        //에러
        setIsLoading(false);
        alert(result.data[0].message);
      } else if (result.data[0]._id == 'null') {
        //빈데이터
        setIsLoading(false);
      } else {
        setLockTime(result.data[0].lock_time);
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };
  //예약불가시간 저장하기
  const save_lock_time = async function (date) {
    try {
      //뒷단에 스토어아이디값,날짜비교해서 있으면 업데이트 없으면 저장
      setIsLoading(true);
      if (date == null || date == undefined) {
        date = moment().format('YYYY-MM-DD');
      }
      let search_date = moment(date).format('YYYY-MM-DD');

      let url = Domain + 'lock_time_date/';
      let data = {
        user_id: route.params.user_id,
        date: search_date,
        lock_time: lockTime,
        key: Key,
      };
      let result = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (result.data.type == 0) {
        //안됨
        setIsLoading(false);
        alert(result.data.message);
      } else if (result.data.type == 1) {
        setIsLoading(false);
        get_data_date(data);
        get_lock_time(data);
        alert('저장완료');
      }
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    get_data_date(); //오늘의 예약일정
    get_lock_time(); //오늘의 예약불가시간
    get_data_store(); //영업시간이 언제부터 언제까지인지 알아야해서 필요 한번 호출하고 끝
    get_data_month(); //이달의 예약일정
  }, []);
  React.useEffect(() => {
    get_data_month(calendarMonth);
  }, [calendarMonth]);
  React.useEffect(() => {
    try {
      let day = moment(selectDay).format('ddd').toLowerCase();
      let storeOneData_chk;
      for (var a = 0; a < storeData.length; a++) {
        if (day == storeData[a][0]) {
          let new_data = storeData[a];
          new_data.splice(0, 1);
          storeOneData_chk = new_data;
          setStoreOneData(new_data);
        }
      }
      //StoreOneData -> 영업시간 나열 0900 0930 ---
      //dayData -> 그날의 예약데이터 없을수도있음
      if (dayData.length == 0) {
        setWorkTime([]);
      } else if (dayData[0]._id == 'null') {
        //예약데이터 없음
        setWorkTime([]);
      } else {
        //예약데이터 있음
        setWorkTime([]);
        if (storeOneData_chk == undefined) {
          storeOneData_chk = storeOneData;
        }
        for (var b = 0; b < storeOneData_chk.length; b++) {
          let new_array = dayData.find(function (element) {
            if (element.reservation_start_time == storeOneData_chk[b]) {
              return true;
            }
            if (element.works) {
              if (
                element.reservation_start_time < storeOneData_chk[b] &&
                moment(element.reservation_start_time, 'HHmm').format('HHmm') *
                  1 +
                  moment(
                    element.works[0].store_work_time
                      .replace('시간', '')
                      .replace(' ', '')
                      .replace('분', ''),
                    'HHmm',
                  ).format('HHmm') *
                    1 >
                  storeOneData_chk[b] * 1
              ) {
                return true;
              }
            }
          });
          if (new_array == undefined) {
            //작업 비어있는 시간
          } else {
            //작업 채워져있는 시간
            if (workTime.indexOf(storeOneData_chk[b]) != -1) {
              //있으면
            } else {
              workTime.push(storeOneData_chk[b]);
            }
            setWorkTime(workTime);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [dayData]);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/arrow_left.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>예약관리</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer></ToptoprightrightContainer>
        </ToptopContainer>
      </TopContainer>
      <MidContainer>
        {calendarArray ? (
          <Calendar
            key={moment().format('mmssSSS')}
            markedDates={calendarArray ? calendarArray : null}
            // 처음에 보이는 달(Month)을 설정합니다. 기본값은 Date()입니다.
            //current={'2020-05-27'}
            // 선택할 수 있는 최소한(?)의 날짜. minDate 이전의 날짜는 회색으로 바뀝니다. 기본값은 undefined입니다.
            // '2020-05-10'를 예로 들면, 2020-05-09 포함 그 이전의 날짜는 회색으로 바뀌며, 날짜를 선택해도 onDayPress 함수가 작동하지 않습니다.
            minDate={moment().format('YYYY-MM-DD')}
            // 선택할 수 있는 최대한(?)의 날짜. maxDate 이후의 날짜는 회색으로 바뀝니다. 기본값은 undefined입니다.
            // '2020-05-30'를 예로 들면, 2020-06-01 포함 그 이후의 날짜는 회색으로 바뀌며, 날짜를 선택해도 onDayPress 함수가 작동하지 않습니다.
            //maxDate={'2012-05-30'}
            // 날짜를 누르면 실행되는 함수. 기본값은 undefined입니다
            // day 파라미터에는 위에서 말한 캘린더 객체가 들어갑니다. (Usage 바로 밑의 캘린더 객체)
            onDayPress={(day) => {
              let data = calendarArray;
              if (data[selectDay]) {
                if (data[selectDay].marked) {
                  data[selectDay] = {
                    marked: true,
                  };
                } else {
                  delete data[selectDay];
                }
              }
              //넣기전에 어딘가에 있을 {selected: true, selectedColor: 'blue'} 를 빼야함
              if (data[day.dateString]) {
                data[day.dateString] = {
                  marked: true,
                  selected: true,
                  selectedColor: 'blue',
                };
              } else {
                data[day.dateString] = {selected: true, selectedColor: 'blue'};
              }

              //다음달로 옮기고 선택했을 때 CalendarArray 의 data를바꿔줘
              setCalendarArray(data);
              setSelectDay(day.dateString);
              setLockTime([]);
              get_data_date(day.dateString);
              get_lock_time(day.dateString);
              //console.log(calendarArray);
            }}
            // 날짜를 길게(2~3초) 누르면 실행되는 함수. 기본값은 undefined입니다.
            // day 파라미터에는 위에서 말한 캘린더 객체가 들어갑니다. (Usage 바로 밑의 캘린더 객체)
            onDayLongPress={(day) => {
              return;
              //setSelectDay(day.dateString);
              //console.log(selectDay);
            }}
            // 캘린더 제목에 들어갈 Month 형식.
            // 어떤 형식이 가능한지는 http://arshaw.com/xdate/#Formatting에서 확인 가능합니다.
            monthFormat={'yyyy MM'}
            // 캘린더의 달(Month)를 바꿀 때마다 실행되는 함수. 기본값은 undefined입니다.
            // month 파라미터에는 위에서 말한 캘린더 객체가 들어갑니다. (Usage 바로 밑의 캘린더 객체)
            onMonthChange={(month) => {
              if (
                moment(month.dateString).format('YYYY-MM-DD') <
                moment().startOf('month').format('YYYY-MM-DD')
              ) {
              } else {
                //setCalendarMonth(month.dateString);
              }
            }}
            // 달(Month)을 바꾸는 네비게이션 화살표를 없앱니다. 기본값은 false입니다.
            //hideArrows={true}
            // 기본 화살표를 커스텀 화살표로 대체할 수 있습니다.
            // direction 파라미터에는 'left' 혹은 'right'이 들어갑니다.
            //renderArrow={(direction) => <Arrow />}
            // 다른 달의 요일을 월 페이지에 표시하지 않습니다. 기본값은 false입니다.
            //hideExtraDays={true}
            // 만약 hideArrows=false, hideExtraDays=false이면, 달력 페이지에 회색으로 표시된 다른 달의 날짜를 선택했을 때
            // 달이 바뀌지 않도록 합니다. 기본값은 false입니다. Default = false
            //disableMonthChange={true}
            // firstDay=1 이면, 월요일부터 주(week)가 시작됩니다. LocaleConfig에서  dayNames와 dayNamesShort는 일요일부터 시작해야됩니다.
            // firstDay = 1는 dayNames[1] 혹은 dayNamesShort[1]을 의미합니다.
            firstDay={0}
            // 요일 이름을 숨깁니다. 기본값은 false입니다.
            //hideDayNames={true}
            // 캘린더 왼쪽에 올해 몇 주차인지 보여줍니다. 기본값은 false입니다.
            //showWeekNumbers={true}
            // 왼쪽 화살표를 눌렀을 때 실행되는 함수.
            onPressArrowLeft={(substractMonth) => {
              substractMonth();
            }}
            // 오른쪽 화살표를 눌렀을 때 실행되는 함수.
            onPressArrowRight={(addMonth) => {
              addMonth();
            }}
            // 아래 옵션은 공식문서 예제에는 있지만, index.d.ts에는 정의되어 있지 않습니다.
            // hideArrows 옵션만 사용가능하도록 업데이트 된 것 같습니다.

            // 왼쪽 화살표를 사용하지 않도록 합니다. 기본값은 false입니다.
            //disableArrowLeft={true}
            // 오른쪽 화살표를 사용하지 않도록 합니다. 기본값은 false입니다.
            //disableArrowRight={true}
          />
        ) : null}
      </MidContainer>
      <BottomContainer>
        <BottomTopContainer>
          <BottomTopContainer_Text>예약세부일정</BottomTopContainer_Text>
          {lockTime ? (
            <BottomTopContainer_TextRight
              onPress={() => {
                let chk_date = calendarArray;
                let chk_key;
                for (var key in chk_date) {
                  if (
                    Object.entries(chk_date[key]).toString() ===
                      Object.entries({
                        selected: true,
                        selectedColor: 'blue',
                      }).toString() ||
                    Object.entries(chk_date[key]).toString() ===
                      Object.entries({
                        marked: true,
                        selected: true,
                        selectedColor: 'blue',
                      }).toString()
                  ) {
                    //이때의 key값 가져오기
                    chk_key = key;
                  }
                }
                save_lock_time(chk_key);
              }}>
              저장
            </BottomTopContainer_TextRight>
          ) : (
            <BottomTopContainer_TextRight></BottomTopContainer_TextRight>
          )}
        </BottomTopContainer>
        <BottomBottomContainer>
          {storeOneData.map((item) =>
            workTime.indexOf(item) != -1 ? (
              <BottomBottomContainer_nest key={item}>
                <BottomBottomContainer_nest_left>
                  <BottomBottomContainer_nest_left_text style={{marginTop: 10}}>
                    {moment(item, 'HHmm').format('HH:mm A')}
                  </BottomBottomContainer_nest_left_text>
                </BottomBottomContainer_nest_left>
                {dayData.map((item2) =>
                  item2.reservation_start_time == item ? (
                    <BottomBottomContainer_nest_right
                      key={item2.reservation_start_time}>
                      <BottomBottomContainer_nest_right_image
                        source={require('../../assets/image/gray_bar.png')}></BottomBottomContainer_nest_right_image>
                      <BottomBottomContainer_nest_right_left>
                        <BottomBottomContainer_nest_right_left_text>
                          {item2.users[0].iu_name} 고객
                        </BottomBottomContainer_nest_right_left_text>
                        <BottomBottomContainer_nest_right_left_text2>
                          {item2.reservation_contents}
                        </BottomBottomContainer_nest_right_left_text2>
                      </BottomBottomContainer_nest_right_left>
                      <BottomBottomContainer_nest_right_right
                        onPress={() => {
                          navigation.navigate('Reservation_detail', item2);
                        }}>
                        <BottomBottomContainer_nest_right_right_image
                          source={require('../../assets/image/yellow_plus.png')}></BottomBottomContainer_nest_right_right_image>
                      </BottomBottomContainer_nest_right_right>
                    </BottomBottomContainer_nest_right>
                  ) : item2.reservation_start_time < item &&
                    moment(item2.reservation_start_time, 'HHmm').format(
                      'HHmm',
                    ) *
                      1 +
                      moment(
                        item2.works[0].store_work_time
                          .replace('시간', '')
                          .replace(' ', '')
                          .replace('분', ''),
                        'HHmm',
                      ).format('HHmm') *
                        1 >
                      item ? (
                    <BottomBottomContainer_nest_right
                      key={item2.reservation_start_time}>
                      <BottomBottomContainer_nest_right_image
                        source={require('../../assets/image/gray_bar.png')}></BottomBottomContainer_nest_right_image>
                    </BottomBottomContainer_nest_right>
                  ) : null,
                )}
              </BottomBottomContainer_nest>
            ) : lockTime.indexOf(item) != -1 ? (
              <BottomBottomContainer_nest_touch
                //시간잠금에 빼야됨
                onPress={() => {
                  let new_array = lockTime;
                  if (new_array.indexOf(item) != -1) {
                    new_array.splice(new_array.indexOf(item), 1);
                    setLockTime(new_array);
                    forceUpdate();
                  } else {
                  }
                  //렌더시켜줘야 보이는데...?
                }}
                key={item}
                style={{backgroundColor: 'gray'}}>
                <BottomBottomContainer_nest_left>
                  <BottomBottomContainer_nest_left_text style={{marginTop: 10}}>
                    {moment(item, 'HHmm').format('HH:mm A')}
                  </BottomBottomContainer_nest_left_text>
                </BottomBottomContainer_nest_left>
                <BottomBottomContainer_nest_right>
                  <BottomBottomContainer_nest_right_image
                    source={require('../../assets/image/gray_bar.png')}></BottomBottomContainer_nest_right_image>
                </BottomBottomContainer_nest_right>
              </BottomBottomContainer_nest_touch>
            ) : (
              <BottomBottomContainer_nest_touch
                key={item}
                onPress={() => {
                  let new_array = lockTime;
                  if (new_array.indexOf(item) != -1) {
                  } else {
                    //시간잠금에 추가
                    new_array.push(item);
                    setLockTime(new_array);
                    forceUpdate();
                  }
                }}>
                <BottomBottomContainer_nest_left>
                  <BottomBottomContainer_nest_left_text style={{marginTop: 10}}>
                    {moment(item, 'HHmm').format('HH:mm A')}
                  </BottomBottomContainer_nest_left_text>
                </BottomBottomContainer_nest_left>
                <BottomBottomContainer_nest_right>
                  <BottomBottomContainer_nest_right_image
                    source={require('../../assets/image/green_bar.png')}></BottomBottomContainer_nest_right_image>
                </BottomBottomContainer_nest_right>
              </BottomBottomContainer_nest_touch>
            ),
          )}
        </BottomBottomContainer>
      </BottomContainer>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Reservation;
