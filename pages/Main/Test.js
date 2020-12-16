import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const Container_Text = styled.Text`
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  margin: auto 0;
`;
function Test({navigation, route}) {
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    navigation.goBack();
    alert('준비중입니다.');
  }, []);
  return (
    <Container>
      <Container_Text>준비중입니다.</Container_Text>
    </Container>
  );
}

export default Test;
