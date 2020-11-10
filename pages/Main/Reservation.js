import React from 'react';
import styled from 'styled-components/native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

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
const MidContainer = styled.ScrollView`
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
const BottomBottomContainer = styled.ScrollView`
  flex: 5;
  background: #212055;
`;
const BottomBottomContainer_nest = styled.View`
  height: 100px;
  border: 1px solid #ff00ff;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const BottomBottomContainer_nest_left = styled.View`
  flex: 1;
  flex-direction: row;
`;
const BottomBottomContainer_nest_left_text = styled.Text`
  color: #ffffff;
  text-align: right;
  font-size: 20px;
`;
const BottomBottomContainer_nest_left_image = styled.Image`
  margin-top: 5px;
  margin-bottom: 5px;
`;
const BottomBottomContainer_nest_right = styled.View`
  flex: 4;
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
import {LocaleConfig} from 'react-native-calendars';

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
function Reservation({navigation}) {
  const [page, setPage] = React.useState(0);
  const [calendarArray, setCalendarArray] = React.useState({
    //useCallback으로 수정해야될듯
    //바텀에도 리스트.맵을 써서 나오도록 수정
    //selected 를 처음에는 오늘로 설정하고 그 이후에는 터치된값에 selected넣어주고 그 값으로 예약일정가져오기
    '2020-09-26': {selected: true, marked: true, selectedColor: 'blue'},
    '2020-09-27': {marked: true},
    '2020-09-28': {marked: true},
    '2020-09-29': {marked: true},
  });

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
        <Calendar
          markedDates={calendarArray}
          // 처음에 보이는 달(Month)을 설정합니다. 기본값은 Date()입니다.
          //current={'2020-05-27'}
          // 선택할 수 있는 최소한(?)의 날짜. minDate 이전의 날짜는 회색으로 바뀝니다. 기본값은 undefined입니다.
          // '2020-05-10'를 예로 들면, 2020-05-09 포함 그 이전의 날짜는 회색으로 바뀌며, 날짜를 선택해도 onDayPress 함수가 작동하지 않습니다.
          //minDate={'2020-05-10'}
          // 선택할 수 있는 최대한(?)의 날짜. maxDate 이후의 날짜는 회색으로 바뀝니다. 기본값은 undefined입니다.
          // '2020-05-30'를 예로 들면, 2020-06-01 포함 그 이후의 날짜는 회색으로 바뀌며, 날짜를 선택해도 onDayPress 함수가 작동하지 않습니다.
          //maxDate={'2012-05-30'}
          // 날짜를 누르면 실행되는 함수. 기본값은 undefined입니다
          // day 파라미터에는 위에서 말한 캘린더 객체가 들어갑니다. (Usage 바로 밑의 캘린더 객체)
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
          // 날짜를 길게(2~3초) 누르면 실행되는 함수. 기본값은 undefined입니다.
          // day 파라미터에는 위에서 말한 캘린더 객체가 들어갑니다. (Usage 바로 밑의 캘린더 객체)
          onDayLongPress={(day) => {
            console.log('selected day', day);
          }}
          // 캘린더 제목에 들어갈 Month 형식.
          // 어떤 형식이 가능한지는 http://arshaw.com/xdate/#Formatting에서 확인 가능합니다.
          monthFormat={'yyyy MM'}
          // 캘린더의 달(Month)를 바꿀 때마다 실행되는 함수. 기본값은 undefined입니다.
          // month 파라미터에는 위에서 말한 캘린더 객체가 들어갑니다. (Usage 바로 밑의 캘린더 객체)
          onMonthChange={(month) => {
            console.log('month changed', month);
          }}
          // 달(Month)을 바꾸는 네비게이션 화살표를 없앱니다. 기본값은 false입니다.
          //hideArrows={true}
          // 기본 화살표를 커스텀 화살표로 대체할 수 있습니다.
          // direction 파라미터에는 'left' 혹은 'right'이 들어갑니다.
          //renderArrow={(direction) => <Arrow />}
          // 다른 달의 요일을 월 페이지에 표시하지 않습니다. 기본값은 false입니다.
          hideExtraDays={true}
          // 만약 hideArrows=false, hideExtraDays=false이면, 달력 페이지에 회색으로 표시된 다른 달의 날짜를 선택했을 때
          // 달이 바뀌지 않도록 합니다. 기본값은 false입니다. Default = false
          disableMonthChange={true}
          // firstDay=1 이면, 월요일부터 주(week)가 시작됩니다. LocaleConfig에서  dayNames와 dayNamesShort는 일요일부터 시작해야됩니다.
          // firstDay = 1는 dayNames[1] 혹은 dayNamesShort[1]을 의미합니다.
          firstDay={0}
          // 요일 이름을 숨깁니다. 기본값은 false입니다.
          //hideDayNames={true}
          // 캘린더 왼쪽에 올해 몇 주차인지 보여줍니다. 기본값은 false입니다.
          //showWeekNumbers={true}
          // 왼쪽 화살표를 눌렀을 때 실행되는 함수.
          onPressArrowLeft={(substractMonth) => substractMonth()}
          // 오른쪽 화살표를 눌렀을 때 실행되는 함수.
          onPressArrowRight={(addMonth) => addMonth()}
          // 아래 옵션은 공식문서 예제에는 있지만, index.d.ts에는 정의되어 있지 않습니다.
          // hideArrows 옵션만 사용가능하도록 업데이트 된 것 같습니다.

          // 왼쪽 화살표를 사용하지 않도록 합니다. 기본값은 false입니다.
          //disableArrowLeft={true}
          // 오른쪽 화살표를 사용하지 않도록 합니다. 기본값은 false입니다.
          //disableArrowRight={true}
        />
      </MidContainer>
      <BottomContainer>
        <BottomTopContainer>
          <BottomTopContainer_Text>예약세부일정</BottomTopContainer_Text>
          <BottomTopContainer_touch
            onPress={() => {
              alert('gd');
            }}>
            <BottomTopContainer_image
              source={require('../../assets/image/edit.png')}></BottomTopContainer_image>
          </BottomTopContainer_touch>
        </BottomTopContainer>
        <BottomBottomContainer>
          <BottomBottomContainer_nest>
            <BottomBottomContainer_nest_left>
              <BottomBottomContainer_nest_left_text style={{marginTop: 10}}>
                09:00 {'\n'} AM
              </BottomBottomContainer_nest_left_text>
              <BottomBottomContainer_nest_left_image
                source={require('../../assets/image/right_bar.png')}></BottomBottomContainer_nest_left_image>
            </BottomBottomContainer_nest_left>
            <BottomBottomContainer_nest_right>
              <BottomBottomContainer_nest_right_left>
                <BottomBottomContainer_nest_right_left_text>
                  백준열 고객
                </BottomBottomContainer_nest_right_left_text>
                <BottomBottomContainer_nest_right_left_text2>
                  안녕하세요 작업내용이 들어갈 곳 입니다.
                  우비ㅏ룿아ㅣㅁ루침아누치ㅏㅁ어뉘처무니춤너ㅣ춘머ㅣ춘머ㅣㅜㅍㅊㅁ니ㅓㅜ처ㅣㅁ뉘ㅓ
                </BottomBottomContainer_nest_right_left_text2>
              </BottomBottomContainer_nest_right_left>
              <BottomBottomContainer_nest_right_right
                onPress={() => {
                  //navigation으로 넘어갈때 리스트의 아이디값을 가지고 넘어간다.
                  navigation.navigate('Reservation_detail');
                }}>
                <BottomBottomContainer_nest_right_right_image
                  source={require('../../assets/image/yellow_plus.png')}></BottomBottomContainer_nest_right_right_image>
              </BottomBottomContainer_nest_right_right>
            </BottomBottomContainer_nest_right>
          </BottomBottomContainer_nest>
          <BottomBottomContainer_nest></BottomBottomContainer_nest>
          <BottomBottomContainer_nest></BottomBottomContainer_nest>
          <BottomBottomContainer_nest></BottomBottomContainer_nest>
        </BottomBottomContainer>
      </BottomContainer>
    </Container>
  );
}

export default Reservation;
