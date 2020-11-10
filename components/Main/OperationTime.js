import React from 'react';
import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInputMask} from 'react-native-masked-text';
import moment from 'moment';

const MidmidbottomContainer2 = styled.View`
  height: 100px;
  width: 100%;
  border: 1px solid #000000;
  margin-top: 5px;
  margin-bottom: 5px;
  flex-direction: row;
`;
const TimeView = styled.View`
  flex: 3;
  flex-direction: row;
`;
const Time_splitView = styled.View`
  flex: 1;
  height: 50px;
  justify-content: center;
  align-items: center;
`;
const PickerView = styled.View`
  flex: 1;
`;
const PickerTextView = styled.View`
  flex: 1;
  height: 50px;
`;
const PickerText = styled.Text`
  font-size: 20px;
  text-align: center;
  padding-bottom: 0;
  padding-top: 0;
`;
const OperTimeSet_leftcontainer = styled.View`
  flex: 19;
`;
const OperTimeSet_left_topcontainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const OperTimeSet_left_top_split_container = styled.TouchableOpacity`
  flex: 1;
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
function OperationTime({key, chkIndex, data, count, setCount, page, setPage}) {
  return (
    <>
      <OperTimeSet_leftcontainer>
        <OperTimeSet_left_topcontainer>
          <OperTimeSet_left_top_split_container
            onPress={() => {
              if (count.mon) {
                count.mon = false;
              } else if (!count.mon) {
                count.mon = true;
              }
              data.OperationTime[chkIndex] = count;
              setCount(data);
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}>
            <OperTimeSet_left_top_split_nest_container
              style={
                count.mon
                  ? {backgroundColor: '#000000'}
                  : {backgroundColor: '#BDBDBD'}
              }>
              <OperTimeSet_left_top_split_nest_Text>
                월
              </OperTimeSet_left_top_split_nest_Text>
            </OperTimeSet_left_top_split_nest_container>
          </OperTimeSet_left_top_split_container>
          <OperTimeSet_left_top_split_container
            onPress={() => {
              if (count.tue) {
                count.tue = false;
              } else if (!count.tue) {
                count.tue = true;
              }
              data.OperationTime[chkIndex] = count;
              setCount(data);
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}>
            <OperTimeSet_left_top_split_nest_container
              style={
                count.tue
                  ? {backgroundColor: '#000000'}
                  : {backgroundColor: '#BDBDBD'}
              }>
              <OperTimeSet_left_top_split_nest_Text>
                화
              </OperTimeSet_left_top_split_nest_Text>
            </OperTimeSet_left_top_split_nest_container>
          </OperTimeSet_left_top_split_container>
          <OperTimeSet_left_top_split_container
            onPress={() => {
              if (count.wen) {
                count.wen = false;
              } else if (!count.wen) {
                count.wen = true;
              }
              data.OperationTime[chkIndex] = count;
              setCount(data);
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}>
            <OperTimeSet_left_top_split_nest_container
              style={
                count.wen
                  ? {backgroundColor: '#000000'}
                  : {backgroundColor: '#BDBDBD'}
              }>
              <OperTimeSet_left_top_split_nest_Text>
                수
              </OperTimeSet_left_top_split_nest_Text>
            </OperTimeSet_left_top_split_nest_container>
          </OperTimeSet_left_top_split_container>
          <OperTimeSet_left_top_split_container
            onPress={() => {
              if (count.thu) {
                count.thu = false;
              } else if (!count.thu) {
                count.thu = true;
              }
              data.OperationTime[chkIndex] = count;
              setCount(data);
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}>
            <OperTimeSet_left_top_split_nest_container
              style={
                count.thu
                  ? {backgroundColor: '#000000'}
                  : {backgroundColor: '#BDBDBD'}
              }>
              <OperTimeSet_left_top_split_nest_Text>
                목
              </OperTimeSet_left_top_split_nest_Text>
            </OperTimeSet_left_top_split_nest_container>
          </OperTimeSet_left_top_split_container>
          <OperTimeSet_left_top_split_container
            onPress={() => {
              if (count.fri) {
                count.fri = false;
              } else if (!count.fri) {
                count.fri = true;
              }
              data.OperationTime[chkIndex] = count;
              setCount(data);
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}>
            <OperTimeSet_left_top_split_nest_container
              style={
                count.fri
                  ? {backgroundColor: '#000000'}
                  : {backgroundColor: '#BDBDBD'}
              }>
              <OperTimeSet_left_top_split_nest_Text>
                금
              </OperTimeSet_left_top_split_nest_Text>
            </OperTimeSet_left_top_split_nest_container>
          </OperTimeSet_left_top_split_container>
          <OperTimeSet_left_top_split_container
            onPress={() => {
              if (count.sat) {
                count.sat = false;
              } else if (!count.sat) {
                count.sat = true;
              }
              data.OperationTime[chkIndex] = count;
              setCount(data);
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}>
            <OperTimeSet_left_top_split_nest_container
              style={
                count.sat
                  ? {backgroundColor: '#000000'}
                  : {backgroundColor: '#BDBDBD'}
              }>
              <OperTimeSet_left_top_split_nest_Text>
                토
              </OperTimeSet_left_top_split_nest_Text>
            </OperTimeSet_left_top_split_nest_container>
          </OperTimeSet_left_top_split_container>
          <OperTimeSet_left_top_split_container
            onPress={() => {
              if (count.sun) {
                count.sun = false;
              } else if (!count.sun) {
                count.sun = true;
              }
              data.OperationTime[chkIndex] = count;
              setCount(data);
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}>
            <OperTimeSet_left_top_split_nest_container
              style={
                count.sun
                  ? {backgroundColor: '#000000'}
                  : {backgroundColor: '#BDBDBD'}
              }>
              <OperTimeSet_left_top_split_nest_Text>
                일
              </OperTimeSet_left_top_split_nest_Text>
            </OperTimeSet_left_top_split_nest_container>
          </OperTimeSet_left_top_split_container>
        </OperTimeSet_left_topcontainer>
        <OperTimeSet_left_bottomcontainer>
          <TimeView>
            <PickerView>
              <DropDownPicker
                items={[
                  {label: '오전', value: 'am'},
                  {label: '오후', value: 'pm'},
                ]}
                defaultValue={count.ampm1}
                containerStyle={{
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                zIndex={count.index}
                style={{
                  backgroundColor: '#ffffff',
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                labelStyle={{
                  fontSize: 12,
                  textAlign: 'left',
                  color: '#000',
                }}
                dropDownStyle={{backgroundColor: '#ffffff'}}
                onChangeItem={(item) => {
                  count.ampm1 = item.value;
                  data.OperationTime[chkIndex] = count;
                  setCount(data);
                  if (page === 1) {
                    setPage('1');
                  } else {
                    setPage(1);
                  }
                }}
              />
            </PickerView>
            <PickerTextView>
              <TextInputMask
                value={count.startTime}
                style={{
                  height: 50,
                  textAlign: 'center',
                  fontSize: 20,
                  paddingBottom: 0,
                  paddingTop: 0,
                }}
                onChangeText={(text) => {
                  count.startTime = text;
                  data.OperationTime[chkIndex] = count;
                  setCount(data);
                  if (page === 1) {
                    setPage('1');
                  } else {
                    setPage(1);
                  }
                }}
                type={'datetime'}
                options={{
                  format: 'HH:mm',
                }}></TextInputMask>
            </PickerTextView>
          </TimeView>
          <Time_splitView>
            <PickerText>~</PickerText>
          </Time_splitView>

          <TimeView>
            <PickerView>
              <DropDownPicker
                items={[
                  {label: '오전', value: 'am'},
                  {label: '오후', value: 'pm'},
                ]}
                defaultValue={count.ampm2}
                containerStyle={{
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                zIndex={count.index}
                style={{
                  backgroundColor: '#ffffff',
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                labelStyle={{
                  fontSize: 12,
                  textAlign: 'left',
                  color: '#000',
                }}
                dropDownStyle={{backgroundColor: '#ffffff'}}
                onChangeItem={(item) => {
                  count.ampm2 = item.value;
                  data.OperationTime[chkIndex] = count;
                  setCount(data);
                  if (page === 1) {
                    setPage('1');
                  } else {
                    setPage(1);
                  }
                }}
              />
            </PickerView>
            <PickerTextView>
              <TextInputMask
                value={count.endTime}
                style={{
                  height: 50,
                  textAlign: 'center',
                  fontSize: 20,
                  paddingBottom: 0,
                  paddingTop: 0,
                }}
                onChangeText={(text) => {
                  count.endTime = text;
                  data.OperationTime[chkIndex] = count;
                  setCount(data);
                  if (page === 1) {
                    setPage('1');
                  } else {
                    setPage(1);
                  }
                }}
                type={'datetime'}
                options={{
                  format: 'HH:mm',
                }}></TextInputMask>
            </PickerTextView>
          </TimeView>
        </OperTimeSet_left_bottomcontainer>
      </OperTimeSet_leftcontainer>
      <OperTimeSet_rightcontainer
        onPress={() => {
          data.OperationTime.splice(count, 1);
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
    </>
  );
}
export default OperationTime;
