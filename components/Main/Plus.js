import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

const Container = styled.TouchableOpacity`
  flex: 1;
  background: #7e88e4;
  width: 20%;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const Text = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`;
function Plus({index, count, setCount, page, setPage}) {
  return (
    <Container
      onPress={() => {
        if (index == 'LaborCost') {
          count.LaborCost.push({
            _id: moment().valueOf(),
            index: 9999 - count.LaborCost.length,
            type: 1,
            laborName: '',
            laborCostMin: '',
            laborCostMax: '',
            laborCost: '',
          });
        } else if (index == 'OperationTime') {
          count.OperationTime.push({
            _id: moment().valueOf(),
            index: 9999 - count.OperationTime.length,
            mon: false,
            tue: false,
            wen: false,
            thu: false,
            fri: false,
            sat: false,
            sun: false,
            ampm1: 'am',
            startTime: '09:00',
            ampm2: 'pm',
            endTime: '09:00',
          });
        } else if (index == 'ClosedDay') {
          count.ClosedDay.push({
            _id: moment().valueOf(),
            index: 9999 - count.OperationTime.length,
            week: '1',
            day: 'mon',
          });
        } else if (index == 'ClosedDayTemporary') {
          count.ClosedDayTemporary.push({
            _id: moment().valueOf(),
            index: 9999 - count.OperationTime.length,
            startDay: moment().format('YYYY.MM.DD'),
            endDay: moment().format('YYYY.MM.DD'),
          });
        }
        setCount(count);
        if (page === 1) {
          setPage('1');
        } else {
          setPage(1);
        }
      }}>
      <Text>추가</Text>
    </Container>
  );
}

export default Plus;
