import React from 'react';
import styled from 'styled-components/native';
import {TextInputMask} from 'react-native-masked-text';
import moment from 'moment';
const MidmidtopContainer2 = styled.View`
  height: 50px;
`;

const MidmidbottomContainer2 = styled.View`
  height: 300px;
  width: 100%;
  border: 1px solid #000000;
  margin-top: 5px;
  margin-bottom: 30px;
`;
const MidmidText2 = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: bold;
`;
const MidmidTextsub2 = styled.Text`
  font-size: 12px;
  margin-bottom: 5px;
  color: #000000;
`;
const MidmidInput2 = styled.TextInput`
  height: 290px;
  font-size: 20px;
  margin-left: 10px;
  background: #ffffff;
  color: black;
`;
const OperTimeSet_leftcontainer = styled.View`
  flex: 19;
  border: 1px solid #ff00ff;
`;
const OperTimeSet_left_topcontainer = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const OperTimeSet_left_top_split_container = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid #ff00ff;
  justify-content: center;
  align-items: center;
`;
const OperTimeSet_left_top_split_nest_container = styled.View`
  width: 60%;
  height: 60%;
  background: #e5e5e5;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;
const OperTimeSet_left_top_split_nest_Text = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;
const OperTimeSet_left_bottomcontainer = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const OperTimeSet_rightcontainer = styled.TouchableOpacity`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
const OperTimeSet_rightImage = styled.Image`
  width: 30px;
  height: 30px;
`;
const TimeView = styled.View`
  flex: 3;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const Time_splitView = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;

const PickerText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;
function ClosedDayTemporary({chkIndex, data, count, setCount, page, setPage}) {
  return (
    <MidmidbottomContainer2
      style={{
        height: 50,
        flexDirection: 'row',
        zIndex: 9999,
      }}>
      <OperTimeSet_leftcontainer>
        <OperTimeSet_left_bottomcontainer>
          <TimeView>
            <TextInputMask
              value={count.startDay}
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              onChangeText={(text) => {
                count.startDay = text;
                data.ClosedDayTemporary[chkIndex] = text;
                setCount(data);
                if (page === 1) {
                  setPage('1');
                } else {
                  setPage(1);
                }
              }}
              type={'datetime'}
              options={{
                format: 'YYYY.MM.DD',
              }}></TextInputMask>
          </TimeView>
          <Time_splitView>
            <PickerText>~</PickerText>
          </Time_splitView>
          <TimeView>
            <TextInputMask
              value={count.endDay}
              style={{
                textAlign: 'center',
                fontSize: 18,
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              onChangeText={(text) => {
                count.endDay = text;
                data.ClosedDayTemporary[chkIndex] = text;
                setCount(data);
                if (page === 1) {
                  setPage('1');
                } else {
                  setPage(1);
                }
              }}
              type={'datetime'}
              options={{
                format: 'YYYY.MM.DD',
              }}></TextInputMask>
          </TimeView>
        </OperTimeSet_left_bottomcontainer>
      </OperTimeSet_leftcontainer>
      <OperTimeSet_rightcontainer
        onPress={() => {
          data.ClosedDayTemporary.splice(count, 1);
          setCount(data);
          if (page === 1) {
            setPage('1');
          } else {
            setPage(1);
          }
        }}>
        <OperTimeSet_rightImage
          source={require('../../assets/image/delete_btn.png')}></OperTimeSet_rightImage>
      </OperTimeSet_rightcontainer>
    </MidmidbottomContainer2>
  );
}
export default ClosedDayTemporary;
