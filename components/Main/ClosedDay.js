import React from 'react';
import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInputMask} from 'react-native-masked-text';

const MidmidbottomContainer2 = styled.View`
  height: 300px;
  width: 100%;
  border: 1px solid #000000;
  margin-top: 5px;
  margin-bottom: 30px;
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
const PickerView = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;
const PickerTextView = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
`;
const PickerText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;
const PlusContainer = styled.TouchableOpacity`
  height: 50px;
  flex-direction: row;
  z-index: 9999;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
`;
function ClosedDay({chkIndex, data, count, setCount, page, setPage}) {
  return (
    <MidmidbottomContainer2
      style={{
        height: 50,
        flexDirection: 'row',
        zIndex: chkIndex,
        position: 'relative',
        elevation: chkIndex,
      }}>
      <OperTimeSet_leftcontainer>
        <OperTimeSet_left_bottomcontainer>
          <TimeView>
            <MidmidText2>매달</MidmidText2>
            <PickerView>
              <DropDownPicker
                items={[
                  {label: '둘째주', value: '2'},
                  {label: '셋째주', value: '3'},
                  {label: '넷째주', value: '4'},
                  {label: '다섯째주', value: '5'},
                  {label: '첫째주', value: '1'},
                ]}
                defaultValue={count.week}
                containerStyle={{
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                zIndex={9999 - chkIndex}
                elevation={9999 - chkIndex}
                style={{
                  backgroundColor: '#ffffff',
                  zIndex: 9999 - chkIndex,
                  elevation: 9999 - chkIndex,
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                  zIndex: 9999 - chkIndex,
                  elevation: 9999 - chkIndex,
                }}
                labelStyle={{
                  fontSize: 12,
                  textAlign: 'left',
                  color: '#000',
                  zIndex: 9999 - chkIndex,
                  elevation: 9999 - chkIndex,
                }}
                dropDownStyle={{
                  backgroundColor: '#ffffff',
                  zIndex: 9999 - chkIndex,
                  elevation: 9999 - chkIndex,
                }}
                onChangeItem={(item) => {
                  count.week = item.value;
                  data.ClosedDay[chkIndex] = count;
                  setCount(data);
                  if (page === 1) {
                    setPage('1');
                  } else {
                    setPage(1);
                  }
                }}
              />
            </PickerView>
          </TimeView>
          <TimeView>
            <PickerView>
              <DropDownPicker
                items={[
                  {label: '월요일', value: 'mon'},
                  {label: '화요일', value: 'tue'},
                  {label: '수요일', value: 'wen'},
                  {label: '목요일', value: 'thu'},
                  {label: '금요일', value: 'fri'},
                  {label: '토요일', value: 'sat'},
                  {label: '일요일', value: 'sun'},
                ]}
                defaultValue={count.day}
                containerStyle={{
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                zIndex={9999 - chkIndex}
                elevation={9999 - chkIndex}
                style={{
                  backgroundColor: '#ffffff',
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                  zIndex: 9999 - chkIndex,
                  elevation: 9999 - chkIndex,
                }}
                labelStyle={{
                  fontSize: 12,
                  textAlign: 'left',
                  color: '#000',
                  zIndex: 9999 - chkIndex,
                  elevation: 9999 - chkIndex,
                }}
                dropDownStyle={{
                  backgroundColor: '#ffffff',
                  zIndex: 9999 - chkIndex,
                  elevation: 9999 - chkIndex,
                }}
                onChangeItem={(item) => {
                  count.day = item.value;
                  data.ClosedDay[chkIndex] = count;
                  setCount(data);
                  if (page === 1) {
                    setPage('1');
                  } else {
                    setPage(1);
                  }
                }}
              />
            </PickerView>
          </TimeView>
        </OperTimeSet_left_bottomcontainer>
      </OperTimeSet_leftcontainer>
      <OperTimeSet_rightcontainer
        onPress={() => {
          data.ClosedDay.splice(count, 1);
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
export default ClosedDay;
