import {Platform} from 'react-native';
const Domain_ios = 'http://localhost:3000/';
const Domain_adroid = 'http://10.0.2.2:3000/';
//localhost:3000
//10.0.2.2
let Domain;
if (Platform.OS == 'ios') {
  Domain = Domain_ios;
} else {
  Domain = Domain_adroid;
}

export default Domain;
