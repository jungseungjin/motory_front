import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicator} from 'react-native';

const Container_act = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(52, 52, 52, 0.8);
  justify-content: center;
  align-items: center;
`;
function act() {
  return (
    <Container_act>
      <ActivityIndicator color="#999999" size="large"></ActivityIndicator>
    </Container_act>
  );
}

export default act;
