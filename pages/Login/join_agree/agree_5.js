import React from 'react';
import styled from 'styled-components/native';
import Container from '../../../components/Login/Container';
import TopContainer from '../../../components/Login/TopContainer';
import MidContainer from '../../../components/Login/MidContainer';
import FooterContainer from '../../../components/Login/FooterContainer';
import Title from '../../../components/Login/Title';
import GoBackImage from '../../../components/Login/GoBackImage';
import GoBack from '../../../components/Login/GoBack';
function agree_5({navigation}) {
  return (
    <Container>
      <TopContainer>
        <GoBack
          onPress={() => {
            navigation.goBack();
          }}>
          <GoBackImage></GoBackImage>
        </GoBack>
        <Title>튜닝의순정 이용약관</Title>
      </TopContainer>
      <MidContainer></MidContainer>
      <FooterContainer></FooterContainer>
    </Container>
  );
}

export default agree_5;
