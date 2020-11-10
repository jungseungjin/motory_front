import React from 'react';
import styled from 'styled-components/native';

const MidmidbottomContainer2 = styled.View`
  height: 80px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const LaborCosts = styled.View`
  height: 45px;
  flex-direction: row;
`;
const LaborCostsLeft = styled.View`
  width: 40%;
  justify-content: center;
  align-items: center;
`;
const LaborCostsLeftInPut = styled.TextInput`
  height: 30px;
  width: 90%;
  padding-top: 0;
  padding-bottom: 0;
  border: 1px solid #000000;
  border-radius: 5px;
  padding-left: 5px;
`;
const LaborCostsCenter = styled.View`
  width: 10%;
  justify-content: center;
  align-items: center;
`;
const LaborCostsRightButton = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: #f05568;
  justify-content: center;
  align-items: center;
`;
const LaborCostsRightButtonText = styled.Text`
  color: #ffffff;
  font-size: 10px;
`;
const LaborCostsRight = styled.View`
  width: 50%;
  align-items: center;
  flex-direction: row;
`;
const LaborCostsRightInput = styled.TextInput`
  border: 1px solid #000000;
  height: 30px;
  border-radius: 5px;
  width: 45%;
  padding-top: 0;
  padding-bottom: 0;
  font-size: 10px;
  padding-left: 5px;
`;
const LaborCostsRightInputText = styled.Text`
  font-size: 10px;
  color: #000000;
`;

function LaborCost({key, chkIndex, data, count, setCount, page, setPage}) {
  return (
    <>
      <LaborCosts style={{marginBottom: -5}}>
        <LaborCostsLeft>
          <LaborCostsLeftInPut
            placeholder={'공임유형명'}
            autoCapitalize={'none'}
            editable={count.type == 1 ? true : false}
            selectTextOnFocus={count.type == 1 ? true : false}
            value={count.type == 1 ? count.laborName : ''}
            onChangeText={(value) => {
              if (count.type == 1) {
                count.laborName = value;
                data.LaborCost[chkIndex] = count;
                setCount(data);
              }
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}></LaborCostsLeftInPut>
        </LaborCostsLeft>
        <LaborCostsCenter>
          <LaborCostsRightButton
            style={count.type == 1 ? {} : {backgroundColor: '#BDBDBD'}}
            onPress={() => {
              if (count.type == 1) {
                count.type = 2;
              } else if (count.type == 2) {
                count.type = 1;
              }
              data.LaborCost[chkIndex] = count;
              setCount(data);
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}>
            <LaborCostsRightButtonText>범위</LaborCostsRightButtonText>
          </LaborCostsRightButton>
        </LaborCostsCenter>
        <LaborCostsRight>
          <LaborCostsRightInput
            editable={count.type == 1 ? true : false}
            selectTextOnFocus={count.type == 1 ? true : false}
            keyboardType={'numeric'}
            value={count.type == 1 ? count.laborCostMin : ''}
            onChangeText={(value) => {
              if (count.type == 1) {
                count.laborCostMin = value;
                data.LaborCost[chkIndex] = count;
                setCount(data);
              }
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}
            placeholder={'최소 공임가격'}></LaborCostsRightInput>
          <LaborCostsRightInputText> ~ </LaborCostsRightInputText>
          <LaborCostsRightInput
            editable={count.type == 1 ? true : false}
            selectTextOnFocus={count.type == 1 ? true : false}
            value={count.type == 1 ? count.laborCostMax : ''}
            onChangeText={(value) => {
              if (count.type == 1) {
                count.laborCostMax = value;
                data.LaborCost[chkIndex] = count;
                setCount(data);
              }
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}
            keyboardType={'numeric'}
            placeholder={'최대 공임가격'}></LaborCostsRightInput>
        </LaborCostsRight>
      </LaborCosts>
      <LaborCosts>
        <LaborCostsLeft>
          <LaborCostsLeftInPut
            editable={count.type == 2 ? true : false}
            selectTextOnFocus={count.type == 2 ? true : false}
            value={count.type == 2 ? count.laborName : ''}
            onChangeText={(value) => {
              if (count.type == 2) {
                count.laborName = value;
                data.LaborCost[chkIndex] = count;
                setCount(data);
              }
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}
            placeholder={'공임유형명'}
            autoCapitalize={'none'}></LaborCostsLeftInPut>
        </LaborCostsLeft>
        <LaborCostsCenter>
          <LaborCostsRightButton
            style={count.type == 1 ? {backgroundColor: '#BDBDBD'} : {}}
            onPress={() => {
              if (count.type == 1) {
                count.type = 2;
              } else if (count.type == 2) {
                count.type = 1;
              }
              data.LaborCost[chkIndex] = count;
              setCount(data);
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}>
            <LaborCostsRightButtonText>범위</LaborCostsRightButtonText>
          </LaborCostsRightButton>
        </LaborCostsCenter>
        <LaborCostsRight>
          <LaborCostsRightInput
            editable={count.type == 2 ? true : false}
            selectTextOnFocus={count.type == 2 ? true : false}
            keyboardType={'numeric'}
            value={count.type == 2 ? count.laborCost : ''}
            onChangeText={(value) => {
              if (count.type == 2) {
                count.laborCost = value;
                data.LaborCost[chkIndex] = count;
                setCount(data);
              }
              if (page === 1) {
                setPage('1');
              } else {
                setPage(1);
              }
            }}
            placeholder={'공임가격'}></LaborCostsRightInput>
        </LaborCostsRight>
      </LaborCosts>
    </>
  );
}
export default LaborCost;
