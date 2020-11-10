import FastImage from 'react-native-fast-image';
<FastImage
  //style={styles.image}
  style={{
    borderBottomWidth: 2,
    borderColor: '#fff000',
    height: 50,
    width: 50,
  }}
  source={{
    uri:
      'https://s3.eu-central-1.amazonaws.com/megroplan-test/recipe/1528058084_BuNpnvWM44.jpeg',
    //headers: {Authorization: 'someAuthToken'},
    priority: FastImage.priority.normal,
  }}
  resizeMode={FastImage.resizeMode.contain}
/>;
