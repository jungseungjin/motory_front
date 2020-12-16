import React from 'react';
import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInputMask} from 'react-native-masked-text';
import Plus from '../../components/Main/Plus';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';
import Postcode from 'react-native-daum-postcode';
import Container_act from '../../components/Main/Container_act';
import Bucket from '../../net/Bucket';
import AccessKey from '../../net/AccessKey';
import SecretAccessKey from '../../net/SecretAccessKey';
import S3 from 'aws-sdk/clients/s3';
import fs from 'react-native-fs';
import base64_arraybuffer from 'base64-arraybuffer';
import Dimensions from '../../components/Login/Dimenstions';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import LaborCost from '../../components/Main/LaborCost';
import OperationTime from '../../components/Main/OperationTime';
import ClosedDay from '../../components/Main/ClosedDay';
import ClosedDayTemporary from '../../components/Main/ClosedDayTemporary';
import moment from 'moment';
const Container = styled.SafeAreaView`
  flex: 1;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 2;
`;
const ToptopContainer = styled.View`
  flex: 2;
  flex-direction: row;
`;

const ToptopleftContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const ToptopleftImage = styled.Image`
  width: 25px;
  height: 20px;
`;
const ToptoprightContainer = styled.View`
  flex: 9;
  align-items: center;
  justify-content: center;
  margin-right: 5%;
`;
const ToptoprightText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const TopbottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
// container , test 두개 선택된곳에 따라 글씨 색,border-bottom 색상 변경
const TopbottomleftContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-bottom-color: #000000;
  border-bottom-width: 2px;
`;
const TopbottomleftText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const TopbottomrightContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-bottom-color: #aaaaaa;
  border-bottom-width: 2px;
`;
const TopbottomrightText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
const MidContainer = styled.ScrollView`
  flex: 7;
`;
const MidmidContainer = styled.View`
  height: 90px;
  margin: 15px 20px 0 20px;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_scroll = styled.View`
  margin: 15px 20px 0 20px;
  border: 1px solid #ff00ff;
`;
const MidmidtopContainer = styled.View`
  height: 30px;
`;
const MidmidbottomContainer = styled.View`
  height: 42px;
  width: 100%;
  border: 1px solid #000000;
  margin-top: 5px;
`;
const MidmidbottomContainer_split = styled.View`
  height: 42px;
  margin-top: 5px;
  flex-direction: row;
`;
const MidmidbottomContainer_left = styled.View`
  width: 84%;
  border: 1px solid #000000;
`;
const MidmidbottomContainer_right = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 15%;
`;
const MidmidbottomContainer_rightImage = styled.Image`
  width: 30px;
  height: 30px;
`;
const MidmidText = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
`;
const MidmidTextsub = styled.Text`
  font-size: 12px;
  color: #ffffff;
`;
const MidmidInput = styled.TextInput`
  height: 40px;
  font-size: 20px;
  margin-left: 10px;
  background: #ffffff;
  color: black;
  padding-top: 0;
  padding-bottom: 0;
`;
const MidmidButtonContainer = styled.View`
  height: 60px;
  flex-direction: row;
  margin-top: 20px;
`;

const MidmidButton = styled.TouchableOpacity`
  width: 22.5%;
  height: 40px;
  background: #c6c6c6;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 10px 10px;
  border-radius: 5px;
  margin-right: 10px;
`;
const MidmidButtonText = styled.Text`
  font-size: 13px;
  color: #5e5e5e;
`;
const BottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const BottomleftContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #5f5f5f;
`;
const BottomleftText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;
const BottomrightContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2d61e9;
`;
const BottomrightText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

const MidmidContainer2 = styled.KeyboardAvoidingView`
  height: 400px;
  border: 1px solid #ff00ff;
  margin: 20px 20px 0 20px;
`;
const MidmidtopContainer2 = styled.View`
  height: 50px;
`;
const MidmidtopContainer2_touch = styled.TouchableOpacity`
  height: 50px;
`;
const MidmidbottomContainer2 = styled.View`
  height: 300px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 30px;
`;
const MidmidbottomContainer2_touch = styled.TouchableOpacity`
  height: 300px;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 30px;
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
  background: #ffffff;
  padding-left: 5px;
  color: black;
  border: 1px solid #000000;
`;

const PlusContainer = styled.TouchableOpacity`
  height: 40px;
  flex-direction: row;
  z-index: 9999;
  width: 25%;
  margin-left: auto;
  margin-right: auto;
`;
const OperTimeSet_rightImage = styled.Image`
  width: 30px;
  height: 30px;
`;

function Store({navigation, route}) {
  const [page, setPage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [_id, set_id] = React.useState('');
  const [storeName, setStoreName] = React.useState('');
  const [storeCeo, setStoreCeo] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [address, setAddress] = React.useState({});
  const [jibunAddress, setJibunAddress] = React.useState('');
  const [roadAddress, setRoadAddress] = React.useState('');
  const [addressDetail, setAddressDetail] = React.useState('');

  const [storeNumber, setStoreNumber] = React.useState('');

  const [storeRegister, setStoreRegister] = React.useState('');
  const [category, setCategory] = React.useState('');

  const [logoUri, setLogoUri] = React.useState('');
  const [storeUri, setStoreUri] = React.useState('');
  const [registerUri, setRegisterUri] = React.useState('');

  const [storeInfo, setStoreInfo] = React.useState('');
  const [laborInfo, setLaborInfo] = React.useState('');
  const [laborCostOpen, setLaborCostOpen] = React.useState(true);
  const [holiday, setHoliday] = React.useState(true);
  const [count, setCount] = React.useState({
    LaborCost: [
      {
        _id: moment().valueOf(),
        index: 9999,
        type: 1,
        laborName: '',
        laborCostMin: '',
        laborCostMax: '',
        laborCost: '',
      },
    ],
    OperationTime: [
      {
        _id: moment().valueOf() + 1,
        index: 9999,
        mon: false,
        tue: false,
        wen: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
        ampm1: 'am',
        startTime: '09:00',
        ampm2: 'pm',
        endTime: '09:00',
      },
    ],
    ClosedDay: [
      {
        _id: moment().valueOf() + 2,
        index: 9999,
        week: '1',
        day: 'mon',
      },
    ],
    ClosedDayTemporary: [
      {
        _id: moment().valueOf() + 3,
        index: 9999,
        startDay: moment().format('YYYY.MM.DD'),
        endDay: moment().format('YYYY.MM.DD'),
      },
    ],
  });
  const sendData = async function () {
    let data = {
      _id,
      route: route.params,
      storeName,
      storeCeo,
      birthday,
      address,
      addressDetail,
      storeNumber,
      logoUri,
      storeUri,
      registerUri,
      storeRegister,
      category,
      key: Key,
      count,
      storeInfo,
      laborInfo,
      laborCostOpen,
      holiday,
    };
    console.log(data);
    let url = Domain + 'store_register';
    let result = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (result.data.type == 1) {
      console.log('ok');
      setIsLoading(false);
      navigation.goBack();
    } else {
      setIsLoading(false);
      alert(result.data.message);
    }
    setIsLoading(false);
  };
  const imagePick = function (set, width, height) {
    //set == logo , store , register
    ImagePicker.showImagePicker(
      {
        title: '사진선택',
        mediaType: 'photo',
        storageOptions: {
          cameraRoll: false,
          privateDirectory: true,
        },
        takePhotoButtonTitle: null, // Remove this button
        chooseFromLibraryButtonTitle: null, // Remove this button
        customButtons: [
          {name: 'camera', title: '카메라로 사진찍기'},
          {name: 'gallery', title: '갤러리에서 가져오기'},
        ],
      },
      async (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker.');
        } else if (response.error) {
          console.log('ImagePicker error: ', response.error);
        } else if (response.customButton === 'camera') {
          const image = await ImageCropPicker.openCamera({
            width: width,
            height: height,
            cropping: true,
          })
            .then(async (image) => {
              if (set == 'logo') {
                //로고이미지
                await uploadImageOnS3(image, 'store_logo');
              } else if (set == 'store') {
                //가게전체이미지
                await uploadImageOnS3(image, 'store_bg');
              } else if (set == 'register') {
                //사업자등록이미지
                await uploadImageOnS3(image, 'store_register');
              }
            })
            .catch((err) => {
              console.log(err);
              alert(err);
            });
        } else if (response.customButton === 'gallery') {
          const image = await ImageCropPicker.openPicker({
            compressImageMaxWidth: 1000,
            compressImageMaxHeight: 1000,
            //multiple: true,
            mediaType: 'photo',
            cropping: true,
          })
            .then(async (images) => {
              //images -> crop수정 전 파일
              let image = await ImageCropPicker.openCropper({
                path: images.path,
                width: width,
                height: height,
              });
              if (set == 'logo') {
                //로고이미지
                await uploadImageOnS3(image, 'store_logo');
              } else if (set == 'store') {
                //가게전체이미지
                await uploadImageOnS3(image, 'store_bg');
              } else if (set == 'register') {
                //사업자등록이미지
                await uploadImageOnS3(image, 'store_register');
              }
            })
            .catch((err) => {
              console.log(err);
              alert(err);
            });
        }
      },
    );
  };
  const uploadImageOnS3 = async (imageData, bucketFolder) => {
    const s3bucket = new S3({
      accessKeyId: AccessKey,
      secretAccessKey: SecretAccessKey,
      Bucket: Bucket,
      signatureVersion: 'v4',
    });
    let file = {
      name: imageData.path,
      uri: imageData.path,
      type: imageData.mime,
    };
    let name;
    if (file.name.indexOf('/') != -1) {
      name = file.name.split('/');
      name = name[name.length - 1];
      if (name.indexOf('.') != -1) {
        name = name.replace('.', '');
      }
      file.name = name + route.params._id;
    }
    let contentDeposition = 'inline;filename="' + file.name + '"';
    const base64 = await fs.readFile(file.uri, 'base64');
    const arrayBuffer = base64_arraybuffer.decode(base64);
    await s3bucket.createBucket(async () => {
      const params = {
        Bucket: Bucket,
        Key: bucketFolder + '/' + file.name,
        Body: arrayBuffer,
        ContentDisposition: contentDeposition,
        ContentType: file.type,
      };
      await s3bucket.upload(params, (err, data) => {
        if (err) {
        }
        if (data) {
          if (bucketFolder == 'store_logo') {
            setLogoUri(data.Location);
          } else if (bucketFolder == 'store_bg') {
            setStoreUri(data.Location);
          } else if (bucketFolder == 'store_register') {
            setRegisterUri(data.Location);
          }
        }
      });
    });
  };
  React.useEffect(() => {
    try {
      let get_data = async function () {
        try {
          if (_id == '') {
            setIsLoading(true);
            //정보 가져오기
            let url =
              Domain + 'get_store' + '?_id=' + route.params._id + '&key=' + Key;
            let result = await axios.get(url);
            console.log(url);
            console.log(result.data[0]);
            if (result.data[0].type == 0) {
              setIsLoading(false);
              alert(result.data[0].message);
            } else if (result.data[0].type == 2) {
              //정보가 없으면 type2로 보내기 사용자가 데이터 입력해야함
              set_id('new');
              setIsLoading(false);
            } else {
              //받은 데이터 넣어줘야함
              set_id(result.data[0]._id);
              setAddress(result.data[0].store_address);
              setAddressDetail(result.data[0].store_address_detail);
              setStoreName(result.data[0].store_name);
              setStoreUri(result.data[0].store_image);
              setStoreNumber(result.data[0].store_number);
              setLogoUri(result.data[0].store_logo_image);
              setStoreCeo(result.data[0].store_ceo);
              setCategory(result.data[0].store_category);
              setStoreRegister(result.data[0].store_register);
              setRegisterUri(result.data[0].store_register_image);
              setHoliday(result.data[0].store_holiday);
              setBirthday(result.data[0].store_ceo_birthday);
              setJibunAddress(result.data[0].store_address.jibunAddress);
              setRoadAddress(result.data[0].store_address.roadAddress);
              setStoreInfo(result.data[0].store_info);
              setLaborInfo(result.data[0].store_labor_cost_info);
              setLaborCostOpen(result.data[0].store_labor_cost_open);
              setCount({
                LaborCost: result.data[0].store_labor_cost,
                OperationTime: result.data[0].store_operation_time,
                ClosedDay: result.data[0].store_closed_day,
                ClosedDayTemporary: result.data[0].store_closed_day_temp,
              });
              setIsLoading(false);
            }
          } else {
            setIsLoading(false);
            //_id에 값이 있으면 데이터로딩 한거 -> 함수 끝내야함.
          }
        } catch (err) {
          setIsLoading(false);
          console.log(err);
          alert(err);
        }
      };
      get_data();
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  }, []);
  React.useEffect(() => {
    console.log('image upload');
  }, [logoUri, storeUri, registerUri]);
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer
            onPress={() => {
              if (page == 2) {
                setPage(0);
              } else {
                navigation.goBack();
              }
            }}>
            <ToptopleftImage
              source={require('../../assets/image/arrow_left.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>매장운영</ToptoprightText>
          </ToptoprightContainer>
        </ToptopContainer>
        <TopbottomContainer>
          {page == 0 ? (
            <>
              <TopbottomleftContainer>
                <TopbottomleftText>매장정보</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomrightContainer
                onPress={() => {
                  setPage(1);
                }}>
                <TopbottomrightText>매장운영</TopbottomrightText>
              </TopbottomrightContainer>
            </>
          ) : page == 1 ? (
            <>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(0);
                }}
                style={{borderBottomColor: '#aaaaaa'}}>
                <TopbottomleftText>매장정보</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomrightContainer style={{borderBottomColor: '#000000'}}>
                <TopbottomrightText>매장운영</TopbottomrightText>
              </TopbottomrightContainer>
            </>
          ) : (
            <>
              <TopbottomleftContainer
                onPress={() => {
                  setPage(0);
                }}>
                <TopbottomleftText>매장정보</TopbottomleftText>
              </TopbottomleftContainer>
              <TopbottomrightContainer
                onPress={() => {
                  setPage(1);
                }}>
                <TopbottomrightText>매장운영</TopbottomrightText>
              </TopbottomrightContainer>
            </>
          )}
        </TopbottomContainer>
      </TopContainer>
      <MidContainer>
        {page == 0 ? (
          <>
            <MidmidContainer>
              <MidmidtopContainer>
                <MidmidText>가게상호명</MidmidText>
              </MidmidtopContainer>
              <MidmidbottomContainer>
                <MidmidInput
                  value={storeName}
                  autoCapitalize={'none'}
                  onChangeText={(value) => setStoreName(value)}></MidmidInput>
              </MidmidbottomContainer>
            </MidmidContainer>
            <MidmidContainer>
              <MidmidtopContainer>
                <MidmidText>가게로고 이미지 첨부</MidmidText>
                <MidmidTextsub>
                  + 로고가 없으신 사장님들께서는 넘어가셔도 됩니다.
                </MidmidTextsub>
              </MidmidtopContainer>
              <MidmidbottomContainer_split>
                <MidmidbottomContainer_left>
                  <MidmidInput
                    editable={false}
                    selectTextOnFocus={false}
                    value={logoUri}></MidmidInput>
                </MidmidbottomContainer_left>
                <MidmidbottomContainer_right
                  onPress={() => {
                    imagePick('logo', 200, 200);
                  }}>
                  <MidmidbottomContainer_rightImage
                    source={require('../../assets/image/plus.png')}></MidmidbottomContainer_rightImage>
                </MidmidbottomContainer_right>
              </MidmidbottomContainer_split>
            </MidmidContainer>
            <MidmidContainer>
              <MidmidtopContainer>
                <MidmidText>가게 전체모습 이미지 첨부</MidmidText>
              </MidmidtopContainer>
              <MidmidbottomContainer_split>
                <MidmidbottomContainer_left>
                  <MidmidInput
                    editable={false}
                    selectTextOnFocus={false}
                    value={storeUri}></MidmidInput>
                </MidmidbottomContainer_left>
                <MidmidbottomContainer_right
                  onPress={() => {
                    imagePick('store', 1920, 1680);
                  }}>
                  <MidmidbottomContainer_rightImage
                    source={require('../../assets/image/plus.png')}></MidmidbottomContainer_rightImage>
                </MidmidbottomContainer_right>
              </MidmidbottomContainer_split>
            </MidmidContainer>
            <MidmidContainer>
              <MidmidtopContainer>
                <MidmidText>대표자명</MidmidText>
              </MidmidtopContainer>
              <MidmidbottomContainer>
                <MidmidInput
                  value={storeCeo}
                  autoCapitalize={'none'}
                  onChangeText={(value) => setStoreCeo(value)}></MidmidInput>
              </MidmidbottomContainer>
            </MidmidContainer>
            <MidmidContainer>
              <MidmidtopContainer>
                <MidmidText>생년월일</MidmidText>
              </MidmidtopContainer>
              <MidmidbottomContainer>
                <MidmidInput
                  placeholder={'숫자만 입력해주세요.'}
                  keyboardType={'number-pad'}
                  value={birthday}
                  autoCapitalize={'none'}
                  onChangeText={(value) => setBirthday(value)}
                  type={'datetime'}
                  options={{
                    format: 'YYYY.MM.DD',
                  }}></MidmidInput>
              </MidmidbottomContainer>
            </MidmidContainer>
            <MidmidContainer style={{height: 150}}>
              <MidmidtopContainer>
                <MidmidText>사업장주소</MidmidText>
              </MidmidtopContainer>
              <MidmidbottomContainer_split>
                <MidmidbottomContainer_left>
                  {roadAddress ? (
                    <MidmidInput
                      editable={false}
                      selectTextOnFocus={false}
                      value={roadAddress}></MidmidInput>
                  ) : jibunAddress ? (
                    <MidmidInput
                      editable={false}
                      selectTextOnFocus={false}
                      value={jibunAddress}></MidmidInput>
                  ) : (
                    <MidmidInput
                      editable={false}
                      selectTextOnFocus={false}></MidmidInput>
                  )}
                </MidmidbottomContainer_left>
                <MidmidbottomContainer_right
                  onPress={() => {
                    setPage(2);
                  }}>
                  <MidmidbottomContainer_rightImage
                    source={require('../../assets/image/find_address.png')}></MidmidbottomContainer_rightImage>
                </MidmidbottomContainer_right>
              </MidmidbottomContainer_split>
              <MidmidbottomContainer_split style={{width: '80%'}}>
                <MidmidbottomContainer_left>
                  <MidmidInput
                    placeholder={'상세주소'}
                    value={addressDetail}
                    autoCapitalize={'none'}
                    onChangeText={(value) =>
                      setAddressDetail(value)
                    }></MidmidInput>
                </MidmidbottomContainer_left>
              </MidmidbottomContainer_split>
            </MidmidContainer>
            <MidmidContainer>
              <MidmidtopContainer>
                <MidmidText>매장 전화번호</MidmidText>
              </MidmidtopContainer>
              <MidmidbottomContainer>
                <MidmidInput
                  keyboardType={'number-pad'}
                  placeholder={'숫자만 입력해주세요.'}
                  value={storeNumber}
                  autoCapitalize={'none'}
                  onChangeText={(value) => setStoreNumber(value)}></MidmidInput>
              </MidmidbottomContainer>
            </MidmidContainer>
            <MidmidContainer>
              <MidmidtopContainer>
                <MidmidText>사업자등록번호</MidmidText>
              </MidmidtopContainer>
              <MidmidbottomContainer>
                <MidmidInput
                  keyboardType={'number-pad'}
                  placeholder={'숫자만 입력해주세요.'}
                  value={storeRegister}
                  autoCapitalize={'none'}
                  onChangeText={(value) =>
                    setStoreRegister(value)
                  }></MidmidInput>
              </MidmidbottomContainer>
            </MidmidContainer>
            <MidmidContainer>
              <MidmidtopContainer>
                <MidmidText>사업자등록증 이미지 첨부</MidmidText>
              </MidmidtopContainer>
              <MidmidbottomContainer_split>
                <MidmidbottomContainer_left>
                  <MidmidInput
                    editable={false}
                    selectTextOnFocus={false}
                    value={registerUri}></MidmidInput>
                </MidmidbottomContainer_left>
                <MidmidbottomContainer_right
                  onPress={() => {
                    imagePick('register', 1920, 1680);
                  }}>
                  <MidmidbottomContainer_rightImage
                    source={require('../../assets/image/plus.png')}></MidmidbottomContainer_rightImage>
                </MidmidbottomContainer_right>
              </MidmidbottomContainer_split>
            </MidmidContainer>
            <MidmidContainer>
              <MidmidtopContainer>
                <MidmidText>튜닝 카테고리(다중선택 가능)</MidmidText>
              </MidmidtopContainer>
              <MidmidButtonContainer>
                {category.indexOf('1') != -1 ? (
                  <MidmidButton
                    style={{backgroundColor: '#000000'}}
                    onPress={() => {
                      if (category.indexOf('1') != -1) {
                        let new_category = category.replace('1', '');
                        setCategory(new_category);
                      } else {
                        let new_category = category + '1';
                        setCategory(new_category);
                      }
                    }}>
                    <MidmidButtonText style={{color: '#ffffff'}}>
                      퍼포먼스
                    </MidmidButtonText>
                  </MidmidButton>
                ) : (
                  <MidmidButton
                    style={{backgroundColor: '#C6C6C6'}}
                    onPress={() => {
                      if (category.indexOf('1') != -1) {
                        let new_category = category.replace('1', '');
                        setCategory(new_category);
                      } else {
                        let new_category = category + '1';
                        setCategory(new_category);
                      }
                    }}>
                    <MidmidButtonText style={{color: '#5E5E5E'}}>
                      퍼포먼스
                    </MidmidButtonText>
                  </MidmidButton>
                )}
                {category.indexOf('2') != -1 ? (
                  <MidmidButton
                    style={{backgroundColor: '#000000'}}
                    onPress={() => {
                      if (category.indexOf('2') != -1) {
                        let new_category = category.replace('2', '');
                        setCategory(new_category);
                      } else {
                        let new_category = category + '2';
                        setCategory(new_category);
                      }
                    }}>
                    <MidmidButtonText style={{color: '#ffffff'}}>
                      드레스업
                    </MidmidButtonText>
                  </MidmidButton>
                ) : (
                  <MidmidButton
                    style={{backgroundColor: '#C6C6C6'}}
                    onPress={() => {
                      if (category.indexOf('2') != -1) {
                        let new_category = category.replace('2', '');
                        setCategory(new_category);
                      } else {
                        let new_category = category + '2';
                        setCategory(new_category);
                      }
                    }}>
                    <MidmidButtonText style={{color: '#5E5E5E'}}>
                      드레스업
                    </MidmidButtonText>
                  </MidmidButton>
                )}
                {category.indexOf('3') != -1 ? (
                  <MidmidButton
                    style={{backgroundColor: '#000000'}}
                    onPress={() => {
                      if (category.indexOf('3') != -1) {
                        let new_category = category.replace('3', '');
                        setCategory(new_category);
                      } else {
                        let new_category = category + '3';
                        setCategory(new_category);
                      }
                    }}>
                    <MidmidButtonText style={{color: '#ffffff'}}>
                      편의장치
                    </MidmidButtonText>
                  </MidmidButton>
                ) : (
                  <MidmidButton
                    style={{backgroundColor: '#C6C6C6'}}
                    onPress={() => {
                      if (category.indexOf('3') != -1) {
                        let new_category = category.replace('3', '');
                        setCategory(new_category);
                      } else {
                        let new_category = category + '3';
                        setCategory(new_category);
                      }
                    }}>
                    <MidmidButtonText style={{color: '#5E5E5E'}}>
                      편의장치
                    </MidmidButtonText>
                  </MidmidButton>
                )}
                {category.indexOf('4') != -1 ? (
                  <MidmidButton
                    style={{backgroundColor: '#000000'}}
                    onPress={() => {
                      if (category.indexOf('4') != -1) {
                        let new_category = category.replace('4', '');
                        setCategory(new_category);
                      } else {
                        let new_category = category + '4';
                        setCategory(new_category);
                      }
                    }}>
                    <MidmidButtonText style={{color: '#ffffff'}}>
                      캠핑카
                    </MidmidButtonText>
                  </MidmidButton>
                ) : (
                  <MidmidButton
                    style={{backgroundColor: '#C6C6C6'}}
                    onPress={() => {
                      if (category.indexOf('4') != -1) {
                        let new_category = category.replace('4', '');
                        setCategory(new_category);
                      } else {
                        let new_category = category + '4';
                        setCategory(new_category);
                      }
                    }}>
                    <MidmidButtonText style={{color: '#5E5E5E'}}>
                      캠핑카
                    </MidmidButtonText>
                  </MidmidButton>
                )}
              </MidmidButtonContainer>
            </MidmidContainer>
            <MidmidContainer></MidmidContainer>
            <MidmidContainer></MidmidContainer>
          </>
        ) : page == 1 ? (
          <>
            <MidmidContainer2>
              <MidmidtopContainer2>
                <MidmidText2>가게소개</MidmidText2>
                <MidmidTextsub2>
                  + 고객에게 사장님의 가게를 소개해주세요!
                </MidmidTextsub2>
              </MidmidtopContainer2>
              <MidmidbottomContainer2>
                <MidmidInput2
                  multiline={true}
                  style={{textAlignVertical: 'top'}}
                  value={storeInfo}
                  autoCapitalize={'none'}
                  onChangeText={(value) => setStoreInfo(value)}></MidmidInput2>
              </MidmidbottomContainer2>
            </MidmidContainer2>
            {count ? (
              <MidmidContainer2
                style={{
                  height: count.LaborCost.length * 100 + 100,
                }} /*나중에 배열로 내부 갯수 정할때 배열길이에 따라 높이 조절 */
              >
                <MidmidtopContainer2>
                  <MidmidText2>우리가게 공임표</MidmidText2>
                </MidmidtopContainer2>
                <>
                  {count.LaborCost.map((item) => (
                    <MidmidbottomContainer2
                      key={item._id}
                      style={{
                        height: 90,
                        zIndex: count.index,
                        marginBottom: 0,
                      }}>
                      <LaborCost
                        chkIndex={9999 - item.index}
                        data={count}
                        count={item}
                        setCount={setCount}
                        page={page}
                        setPage={setPage}></LaborCost>
                    </MidmidbottomContainer2>
                  ))}
                </>
                <PlusContainer>
                  <Plus
                    index={'LaborCost'}
                    count={count}
                    setCount={setCount}
                    page={page}
                    setPage={setPage}></Plus>
                </PlusContainer>
              </MidmidContainer2>
            ) : null}
            <MidmidContainer2 style={{height: 500}}>
              <MidmidtopContainer2 style={{height: 200}}>
                <MidmidTextsub2 style={{fontSize: 13}}>
                  공임가격을 공개하지 않으셔도 됩니다. 하지만 사장님들의 기술,
                  경력, 노하우에 따라 책정된 공임가격을 함께 공개하신다면 기존
                  튜닝고객은 공임비에 의문을 갖던 궁금증을 해결하고 튜닝
                  진입장벽이 높아 튜닝을 고민하던 잠재고객에게는 튜닝을 쉽게
                  접근할 수 있습니다.{'\n'}
                  {'\n'}
                  이를 통해 사장님들이 가지신 튜닝에 대한 기술과 노하우가
                  인정받고 더욱 투명하고 열린 튜닝문화를 만들어나가는데 도움이
                  될 것이고, 저희도 튜닝시장이 활성화 될 수 있도록
                  노력하겠습니다.
                </MidmidTextsub2>
              </MidmidtopContainer2>
              <MidmidbottomContainer2 style={{height: 200, marginBottom: 15}}>
                <MidmidInput2
                  multiline={true}
                  style={{textAlignVertical: 'top', height: 180}}
                  value={laborInfo}
                  autoCapitalize={'none'}
                  onChangeText={(value) => setLaborInfo(value)}
                  placeholder={
                    '공임에 대해서 고객이 참고할 내용이 있다면 적어주세요'
                  }></MidmidInput2>
              </MidmidbottomContainer2>
              <MidmidbottomContainer2_touch
                style={{
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom: 0,
                }}
                onPress={() => {
                  if (laborCostOpen == true) {
                    setLaborCostOpen(false);
                  } else {
                    setLaborCostOpen(true);
                  }
                }}>
                <MidmidText2>그래도 우리가게 공임표 비공개하기</MidmidText2>
                <MidmidbottomContainer_rightImage
                  source={
                    laborCostOpen
                      ? require('../../assets/image/Rectangle2.png')
                      : require('../../assets/image/checkbox_check2.png')
                  }></MidmidbottomContainer_rightImage>
              </MidmidbottomContainer2_touch>
            </MidmidContainer2>
            {count ? (
              <MidmidContainer2
                style={{height: count.OperationTime.length * 190 + 150}}>
                <MidmidtopContainer2 style={{marginBottom: 30}}>
                  <MidmidText2>영업시간 설정</MidmidText2>
                  <MidmidTextsub2>
                    + 같은 영업시간대 요일을 선택하여 설정하고, 요일 중
                    영업시간이 다른날이 있다면 플러스 버튼을 눌러 추가설정
                    해주세요.
                  </MidmidTextsub2>
                </MidmidtopContainer2>
                {count.OperationTime.map((item) => (
                  <MidmidbottomContainer2
                    key={item._id}
                    style={{
                      height: 140,
                      flexDirection: 'row',
                      zIndex: count.index,
                    }}>
                    <OperationTime
                      chkIndex={9999 - item.index}
                      data={count}
                      count={item}
                      setCount={setCount}
                      page={page}
                      setPage={setPage}></OperationTime>
                  </MidmidbottomContainer2>
                ))}
                <PlusContainer style={{marginTop: 30}}>
                  <Plus
                    index={'OperationTime'}
                    count={count}
                    setCount={setCount}
                    page={page}
                    setPage={setPage}></Plus>
                </PlusContainer>
              </MidmidContainer2>
            ) : null}
            {count ? (
              <MidmidContainer2
                style={{height: count.ClosedDay.length * 90 + 100}}>
                <MidmidText2>휴무일 설정</MidmidText2>
                {count.ClosedDay.map((item) => (
                  <ClosedDay
                    style={{
                      zIndex: item.index,
                      elvation: item.index,
                    }}
                    key={item._id}
                    chkIndex={9999 - item.index}
                    data={count}
                    count={item}
                    setCount={setCount}
                    page={page}
                    setPage={setPage}></ClosedDay>
                ))}
                <PlusContainer style={{marginTop: 20, zIndex: 1, elvation: 1}}>
                  <Plus
                    index={'ClosedDay'}
                    count={count}
                    setCount={setCount}
                    page={page}
                    setPage={setPage}></Plus>
                </PlusContainer>
              </MidmidContainer2>
            ) : null}
            {count ? (
              <MidmidContainer2
                style={{height: count.ClosedDayTemporary.length * 90 + 100}}>
                <MidmidtopContainer2>
                  <MidmidText2>임시휴무일 설정</MidmidText2>
                  {count.ClosedDayTemporary.map((item) => (
                    <ClosedDayTemporary
                      key={item._id}
                      chkIndex={9999 - item.index}
                      data={count}
                      count={item}
                      setCount={setCount}
                      page={page}
                      setPage={setPage}></ClosedDayTemporary>
                  ))}
                  <PlusContainer>
                    <Plus
                      index={'ClosedDayTemporary'}
                      count={count}
                      setCount={setCount}
                      page={page}
                      setPage={setPage}></Plus>
                  </PlusContainer>
                </MidmidtopContainer2>
              </MidmidContainer2>
            ) : null}
            <MidmidContainer2 style={{height: 150, flexDirection: 'row'}}>
              <MidmidtopContainer2 style={{flex: 9}}>
                <MidmidText2>공휴일휴무 설정</MidmidText2>
              </MidmidtopContainer2>
              <MidmidtopContainer2_touch
                onPress={() => {
                  if (holiday) {
                    setHoliday(false);
                  } else {
                    setHoliday(true);
                  }
                }}
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <OperTimeSet_rightImage
                  source={
                    holiday
                      ? require('../../assets/image/Rectangle2.png')
                      : require('../../assets/image/checkbox_check2.png')
                  }></OperTimeSet_rightImage>
              </MidmidtopContainer2_touch>
            </MidmidContainer2>
          </>
        ) : (
          <>
            <MidmidContainer_scroll
              style={{
                position: 'relative',
                height: (Dimensions.Height * 6) / 10,
                width: '90%',
              }}>
              <Postcode
                style={{width: '100%', height: '100%'}}
                jsOptions={{animated: true}}
                onSelected={(data) => {
                  setJibunAddress(data.jibunAddress);
                  setRoadAddress(data.roadAddress);
                  setAddress(data);
                  setPage(0);
                }}
              />
            </MidmidContainer_scroll>
          </>
        )}
      </MidContainer>
      {page == 0 || page == 1 ? (
        <BottomContainer>
          <BottomleftContainer>
            <BottomleftText>초기화</BottomleftText>
          </BottomleftContainer>
          <BottomrightContainer
            onPress={() => {
              sendData();
            }}>
            <BottomrightText>저장</BottomrightText>
          </BottomrightContainer>
        </BottomContainer>
      ) : (
        <BottomContainer></BottomContainer>
      )}
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Store;
