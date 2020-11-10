import React, {Component} from 'react';
import Postcode from 'react-native-daum-postcode';
function YourView() {
  return (
    <Postcode
      style={{width: '100%', height: '100%'}}
      jsOptions={{animated: true}}
      onSelected={(data) => {
        //console.log(JSON.stringify(data));
      }}
    />
  );
}
export default YourView;
