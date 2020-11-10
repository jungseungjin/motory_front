import React from 'react';
import styled from 'styled-components/native';
const GoBackImage = styled.Image`
  width: 30px;
  height: 30px;
  margin: auto auto;
`;

export default function GoBack() {
  return (
    <>
      <GoBackImage source={require('../../assets/image/x.png')}></GoBackImage>
    </>
  );
}
