import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-picker';
import Bucket from '../../net/Bucket';
import AccessKey from '../../net/AccessKey';
import SecretAccessKey from '../../net/SecretAccessKey';
import S3 from 'aws-sdk/clients/s3';
import fs from 'react-native-fs';
import base64_arraybuffer from 'base64-arraybuffer';
import Domain from '../../net/Domain';
import Key from '../../net/Key';
import axios from 'axios';
import Container_act from '../../components/Main/Container_act';
import TagInput from 'react-native-tags-input';
const Container = styled.SafeAreaView`
  flex: 1;
  border: 1px solid #ff00ff;
  background: #ffffff;
`;
const TopContainer = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
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
  flex: 7;
  margin-left: 10%;
  align-items: center;
  justify-content: center;
`;
const ToptoprightrightContainer = styled.TouchableOpacity`
  flex: 2;
  align-items: center;
  justify-content: center;
  margin-right: 3%;
`;
const ToptoprightrightText = styled.Text`
  font-size: 14px;
  color: #946aef;
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
const MidContainer = styled.ScrollView`
  flex: 8;
`;
const MidmidContainer = styled.View`
  height: 150px;
  margin: 20px 20px 0 20px;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_Top = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidmidContainer_Top_Text = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
`;
const MidmidContainer_Top_Text2 = styled.Text`
  font-size: 14px;
  margin-top: auto;
  margin-bottom: 2px;
`;
const MidmidContainer_Bottom = styled.ScrollView`
  flex: 4;
  flex-direction: row;
`;
const MidmidContainer_Bottom_N = styled.View`
  width: 100px;
  height: 100px;
`;
const MidmidContainer_Bottom_Nested = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border: 2px solid #cccccc;
  background: #ffffff;
  border-radius: 2px;
  margin: 20px 20px 0 20px;
  align-items: center;
  justify-content: center;
`;
const MidmidContainer_Bottom_Nested_Image = styled.Image`
  width: 60px;
  height: 60px;
`;
const MidmidContainer_TextInput_View = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  border-bottom-color: #dbdbdb;
  border-bottom-width: 1px;
  align-items: center;
  height: 50px;
`;
const MidmidContainer_TextInput_View2 = styled.View`
  flex: 1;
  flex-direction: row;
  border-bottom-color: #dbdbdb;
  border-bottom-width: 1px;
  align-items: center;
  height: 50px;
  justify-content: flex-end;
`;
const MidmidContainer_TextInput_Image = styled.Image`
  width: 9px;
  height: 17px;
  margin-right: 20px;
`;
const MidmidContainer_Text = styled.Text`
  font-size: 20px;
  padding-left: 20px;
  color: #d0d0d0;
  margin-top: auto;
  margin-bottom: auto;
`;
const MidmidContainer_TextInput = styled.TextInput`
  height: 50px;
  font-size: 20px;
  padding-left: 20px;
`;
const MidmidContainer_workView = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  justify-content: center;
`;
const MidmidContainer_workView_Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: right;
`;
const MidmidContainer_workView2 = styled.View`
  flex: 2;
  border: 1px solid #ff00ff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MidmidContainer_workView2_touch = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 2px;
  border: 1px solid #946aef;
`;
const MidmidContainer_workView2_touch_Text = styled.Text`
  color: #946aef;
  font-size: 18px;
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;
const MidmidContainer_workView_touch = styled.TouchableOpacity`
  width: 13%;
  height: 30px;
  margin-right: 3%;
  border-radius: 2px;
  border: 1px solid #bdbdbd;
  background: #bdbdbd;
`;
const MidmidContainer_workView_touch_Text = styled.Text`
  color: #ffffff;
  font-size: 11px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
`;
const BottomContainer = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2d61e9;
`;
const BottomText = styled.Text`
  color: #ffffff;
  font-size: 20px;
`;
const MidmidContainer_priceView = styled.View`
  flex: 2;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidmidContainer_priceView_Text = styled.Text`
  font-size: 14px;
`;
const MidmidContainer_priceView2 = styled.KeyboardAvoidingView`
  flex: 1;
  border: 1px solid #ff00ff;
`;
const MidmidContainer_priceView2_nested = styled.View`
  flex: 1;
  border: 1px solid #ff00ff;
  flex-direction: row;
`;
const MidmidContainer_priceView2_nested_touch = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
`;
const MidmidContainer_priceView2_nested_touch_nested = styled.View`
  width: 20px;
  height: 20px;
  border: 1px solid #989898;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
`;
const MidmidContainer_priceView_TextInput = styled.TextInput`
  width: 20%;
  border: 1px solid #000000;
  height: 20px;
  border-radius: 2px;
  font-size: 18px;
  padding-top: 0;
  padding-bottom: 0;
`;
function Work_revise({navigation, route}) {
  console.log(route.params.item.works);
  const [isLoading, setIsLoading] = React.useState(false);
  const [rerender, setRerender] = React.useState(true);
  const [thumbnail, setThumbnail] = React.useState([]);
  const [work_name, setWork_name] = React.useState('');
  const [work_list_select, setWork_list_select] = React.useState([]);
  const [work_list_korean_select, setWork_list_korean_select] = React.useState(
    [],
  );
  const [car_list_select, setCar_list_select] = React.useState([]);
  const [car_list_korean_select, setCar_list_korean_select] = React.useState(
    [],
  );
  const [labor_time, setLabor_time] = React.useState('00시간 00분');
  const [need_day, setNeed_day] = React.useState('');
  const [total_cost, setTotal_cost] = React.useState('');
  const [labor_cost, setLabor_cost] = React.useState('');
  const [costOpen, setCostOpen] = React.useState(true);
  const [work_info, setWork_info] = React.useState('');
  const [tag, setTag] = React.useState({
    tag: '',
    tagsArray: [],
  });
  const [total_cost_text, setTotal_cost_text] = React.useState('');
  const [labor_cost_text, setLabor_cost_text] = React.useState('');
  React.useEffect(() => {
    if (route.params.item) {
      setIsLoading(true);
      setThumbnail(route.params.item.store_thumbnail);
      setWork_name(route.params.item.store_work_name);
      setWork_list_select(route.params.item.store_info_work);
      let car_korean = [];
      for (var a = 0; a < route.params.item.cars.length; a++) {
        if (car_korean.indexOf(route.params.item.cars[a].model) != -1) {
        } else {
          car_korean.push(route.params.item.cars[a].model);
        }
      }
      setWork_list_korean_select(car_korean);
      setCar_list_select(route.params.item.store_info_car);
      let work_korean = [];
      for (var a = 0; a < route.params.item.works.length; a++) {
        if (work_korean.indexOf(route.params.item.works[a].work_name) != -1) {
        } else {
          work_korean.push(route.params.item.works[a].work_name);
        }
      }
      setCar_list_korean_select(work_korean);
      setLabor_time(route.params.item.store_work_time);
      setNeed_day(route.params.item.store_work_need_day);
      setTotal_cost(route.params.item.store_work_total_cost.toString());
      setTotal_cost_text(route.params.item.store_work_total_cost);
      setLabor_cost(route.params.item.store_work_labor_cost.toString());
      setLabor_cost_text(route.params.item.store_work_labor_cost);
      setCostOpen(route.params.item.store_work_cost_open);
      setWork_info(route.params.item.store_work_info);
      setTag({
        tag: '',
        tagsArray: route.params.item.store_work_tag,
      });
      setIsLoading(false);
    }
  }, []);

  const imagePick = function (width, height) {
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
              setIsLoading(true);
              await uploadImageOnS3(image, 'Work_thumbnail');
              setIsLoading(false);
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
              setIsLoading(true);
              await uploadImageOnS3(image, 'Work_thumbnail');
              setIsLoading(false);
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
          let image_arr = thumbnail;
          image_arr.push(data.Location);
          setThumbnail(image_arr);
          setRerender(!rerender);
        }
      });
    });
  };
  const send_data = async function () {
    try {
      setIsLoading(true);
      let url = Domain + 'work_list/revise';
      //post 방식으로
      if (
        thumbnail &&
        work_name &&
        work_list_select &&
        car_list_select &&
        labor_time &&
        need_day &&
        total_cost &&
        labor_cost &&
        work_info &&
        tag.tagsArray
      ) {
        let data = {
          route,
          key: Key,
          thumbnail,
          work_name,
          work_list_select,
          car_list_select,
          labor_time,
          need_day,
          total_cost,
          labor_cost,
          costOpen,
          route: route.params,
          work_info,
          tag: tag.tagsArray,
        };
        let result = await axios.patch(url, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (result.data.type == 1) {
          console.log('ok');
          setIsLoading(false);
          route.params.onRefresh();
          navigation.goBack();
        } else {
          setIsLoading(false);
          alert(result.data.message);
        }
      } else {
        setIsLoading(false);
        alert('빈칸을 모두 입력해주세요.');
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err);
      alert(err);
    }
  };
  const handleKeyDown = function (e) {
    if (e.nativeEvent.key == 'Enter') {
    }
  };
  return (
    <Container>
      <TopContainer>
        <ToptopContainer>
          <ToptopleftContainer onPress={() => navigation.goBack()}>
            <ToptopleftImage
              source={require('../../assets/image/x.png')}></ToptopleftImage>
          </ToptopleftContainer>
          <ToptoprightContainer>
            <ToptoprightText>작업관리</ToptoprightText>
          </ToptoprightContainer>
          <ToptoprightrightContainer></ToptoprightrightContainer>
        </ToptopContainer>
        <TopbottomContainer></TopbottomContainer>
      </TopContainer>
      <MidContainer>
        <MidmidContainer>
          <MidmidContainer_Top>
            <MidmidContainer_Top_Text>썸네일등록 </MidmidContainer_Top_Text>
            <MidmidContainer_Top_Text2>
              (최소 1장이상 등록)
            </MidmidContainer_Top_Text2>
          </MidmidContainer_Top>
          <MidmidContainer_Bottom horizontal={true}>
            {thumbnail
              ? thumbnail.length > 0
                ? thumbnail.map((item) => (
                    <MidmidContainer_Bottom_Nested
                      onPress={() => {}}
                      key={item}>
                      <FastImage
                        style={{height: 80, width: 80}}
                        source={{
                          uri: item,
                          //headers: {Authorization: 'someAuthToken'},
                          priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}></FastImage>
                    </MidmidContainer_Bottom_Nested>
                  ))
                : null
              : null}
            <MidmidContainer_Bottom_Nested
              onPress={() => {
                //사진 추가하기
                imagePick(1000, 1000);
              }}>
              <MidmidContainer_Bottom_Nested_Image
                source={require('../../assets/image/work_plus.png')}></MidmidContainer_Bottom_Nested_Image>
            </MidmidContainer_Bottom_Nested>
          </MidmidContainer_Bottom>
        </MidmidContainer>
        <MidmidContainer style={{marginLeft: 0, marginRight: 0}}>
          <MidmidContainer_TextInput
            style={{
              borderTopColor: '#DBDBDB',
              borderTopWidth: 1,
              borderBottomColor: '#DBDBDB',
              borderBottomWidth: 1,
            }}
            placeholder={'작업명'}
            placeholderTextColor={'#D0D0D0'}
            value={work_name}
            onChangeText={(value) =>
              setWork_name(value)
            }></MidmidContainer_TextInput>
          <MidmidContainer_TextInput_View
            onPress={() => {
              navigation.navigate('Work_choice', {
                setWork_list_select,
                setWork_list_korean_select,
                /*onGoBack : (data)=>{
                  setWork_list_select(data)
                }*/
                work_list_select,
                work_list_korean_select,
              });
            }}>
            <MidmidContainer_Text
              style={
                work_list_korean_select.length > 0 ? {color: '#000000'} : null
              }>
              {work_list_korean_select.length > 0
                ? work_list_korean_select.map((item) => item + ' ')
                : '작업종류'}
            </MidmidContainer_Text>
            <MidmidContainer_TextInput_View2>
              <MidmidContainer_TextInput_Image
                source={require('../../assets/image/>.png')}></MidmidContainer_TextInput_Image>
            </MidmidContainer_TextInput_View2>
          </MidmidContainer_TextInput_View>
          <MidmidContainer_TextInput_View
            onPress={() => {
              navigation.navigate('Car_choice', {
                setCar_list_select,
                setCar_list_korean_select,
                /*carOnGoBack: (data) => {
                  setCar_list_select(data);
                },
                carOnGoBack2: (data) => {
                  setCar_list_korean_select(data);
                },*/
                car_list_select,
                car_list_korean_select,
              });
            }}>
            <MidmidContainer_Text
              style={
                car_list_korean_select.length > 0 ? {color: '#000000'} : null
              }>
              {car_list_korean_select.length > 0
                ? car_list_korean_select.map((item) => item + ' ')
                : '차종(다중선택가능)'}
            </MidmidContainer_Text>
            <MidmidContainer_TextInput_View2>
              <MidmidContainer_TextInput_Image
                source={require('../../assets/image/>.png')}></MidmidContainer_TextInput_Image>
            </MidmidContainer_TextInput_View2>
          </MidmidContainer_TextInput_View>
        </MidmidContainer>
        <MidmidContainer style={{height: 90, flexDirection: 'row'}}>
          <MidmidContainer_workView>
            <MidmidContainer_workView_Text>
              작업소요시간
            </MidmidContainer_workView_Text>
            <MidmidContainer_workView_Text>
              {labor_time}
            </MidmidContainer_workView_Text>
          </MidmidContainer_workView>
          <MidmidContainer_workView2>
            <MidmidContainer_workView2_touch
              onPress={() => {
                let time = moment(labor_time, 'HH시간 mm분')
                  .add(1, 'H')
                  .format('HH시간 mm분');
                setLabor_time(time);
              }}>
              <MidmidContainer_workView2_touch_Text>
                +1시간
              </MidmidContainer_workView2_touch_Text>
            </MidmidContainer_workView2_touch>
            <MidmidContainer_workView2_touch
              onPress={() => {
                let time = moment(labor_time, 'HH시간 mm분')
                  .add(30, 'm')
                  .format('HH시간 mm분');
                setLabor_time(time);
              }}>
              <MidmidContainer_workView2_touch_Text>
                +30분
              </MidmidContainer_workView2_touch_Text>
            </MidmidContainer_workView2_touch>
            <MidmidContainer_workView2_touch
              onPress={() => {
                setLabor_time('00시간 00분');
              }}>
              <MidmidContainer_workView2_touch_Text>
                초기화
              </MidmidContainer_workView2_touch_Text>
            </MidmidContainer_workView2_touch>
          </MidmidContainer_workView2>
        </MidmidContainer>
        <MidmidContainer
          style={{height: 120, marginLeft: 0, marginRight: 0, marginLeft: 20}}>
          <MidmidContainer_workView2
            style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <MidmidContainer_workView_Text>
              당일기준 최소예약가능일
            </MidmidContainer_workView_Text>
            <MidmidContainer_workView_Text
              style={{fontWeight: 'normal', color: '#818181'}}>
              도색, 부품수급 등 고려하여 정해주세요.
            </MidmidContainer_workView_Text>
          </MidmidContainer_workView2>
          <MidmidContainer_workView
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <MidmidContainer_workView_touch
              style={need_day == 0 ? {backgroundColor: '#000000'} : null}
              onPress={() => {
                setNeed_day(0);
              }}>
              <MidmidContainer_workView_touch_Text>
                당일가능
              </MidmidContainer_workView_touch_Text>
            </MidmidContainer_workView_touch>
            <MidmidContainer_workView_touch
              style={need_day == 1 ? {backgroundColor: '#000000'} : null}
              onPress={() => {
                setNeed_day(1);
              }}>
              <MidmidContainer_workView_touch_Text>
                +1일
              </MidmidContainer_workView_touch_Text>
            </MidmidContainer_workView_touch>
            <MidmidContainer_workView_touch
              style={need_day == 2 ? {backgroundColor: '#000000'} : null}
              onPress={() => {
                setNeed_day(2);
              }}>
              <MidmidContainer_workView_touch_Text>
                +2일
              </MidmidContainer_workView_touch_Text>
            </MidmidContainer_workView_touch>
            <MidmidContainer_workView_touch
              style={need_day == 3 ? {backgroundColor: '#000000'} : null}
              onPress={() => {
                setNeed_day(3);
              }}>
              <MidmidContainer_workView_touch_Text>
                +3일
              </MidmidContainer_workView_touch_Text>
            </MidmidContainer_workView_touch>
            <MidmidContainer_workView_touch
              style={need_day == 4 ? {backgroundColor: '#000000'} : null}
              onPress={() => {
                setNeed_day(4);
              }}>
              <MidmidContainer_workView_touch_Text>
                +4일
              </MidmidContainer_workView_touch_Text>
            </MidmidContainer_workView_touch>
            <MidmidContainer_workView_touch
              style={need_day == 5 ? {backgroundColor: '#000000'} : null}
              onPress={() => {
                setNeed_day(5);
              }}>
              <MidmidContainer_workView_touch_Text>
                +5일
              </MidmidContainer_workView_touch_Text>
            </MidmidContainer_workView_touch>
          </MidmidContainer_workView>
        </MidmidContainer>
        <MidmidContainer
          style={{
            height: 200,
            marginLeft: 20,
            marginRight: 20,
            borderBottomWidth: 1,
            borderBottomColor: 'red',
            borderTopColor: 'red',
            borderTopWidth: 1,
            borderLeftColor: 'red',
            borderLeftWidth: 1,
          }}>
          <MidmidContainer_priceView
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <MidmidContainer_priceView_Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              작업가격
            </MidmidContainer_priceView_Text>
            <MidmidContainer_priceView_Text
              style={{fontWeight: 'bold', color: '#818181'}}>
              고객앱
              <MidmidContainer_priceView_Text
                style={{fontWeight: 'normal', color: '#818181'}}>
                에서는{'\b'}
              </MidmidContainer_priceView_Text>
              총가격
              <MidmidContainer_priceView_Text
                style={{fontWeight: 'normal', color: '#818181'}}>
                이{'\b'}
              </MidmidContainer_priceView_Text>
              작업가격
              <MidmidContainer_priceView_Text
                style={{fontWeight: 'normal', color: '#818181'}}>
                으로 광고가 되며,{'\b'}
              </MidmidContainer_priceView_Text>
              <MidmidContainer_priceView_Text
                style={{
                  textDecorationLine: 'underline',
                  fontWeight: 'bold',
                  color: '#818181',
                }}>
                고객은 직접 사장님 가게에 예약을 완료해야만{'\b'}
              </MidmidContainer_priceView_Text>
              공임가격을 별도록 확인할 수 있습니다.
            </MidmidContainer_priceView_Text>
            <MidmidContainer_priceView_Text
              style={{fontWeight: 'normal', color: '#818181'}}>
              총가격 공개만을 원하는 사장님게서는 '총가격만 표시하기'를
              체크해주세요.
            </MidmidContainer_priceView_Text>
          </MidmidContainer_priceView>
          <MidmidContainer_priceView2>
            <MidmidContainer_priceView2_nested
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MidmidContainer_priceView_Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                작업 총 가격{'\b'}
              </MidmidContainer_priceView_Text>
              <MidmidContainer_priceView_TextInput
                keyboardType={'numeric'}
                value={total_cost}
                onChangeText={(value) => {
                  setTotal_cost(value);
                }}></MidmidContainer_priceView_TextInput>
              <MidmidContainer_priceView_Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                중에 공임가격은{'\b'}
              </MidmidContainer_priceView_Text>
              <MidmidContainer_priceView_TextInput
                keyboardType={'numeric'}
                value={labor_cost}
                onChangeText={(value) => {
                  setLabor_cost(value);
                }}></MidmidContainer_priceView_TextInput>
            </MidmidContainer_priceView2_nested>
            <MidmidContainer_priceView2_nested_touch
              onPress={() => {
                if (costOpen) {
                  setCostOpen(false);
                } else {
                  setCostOpen(true);
                }
              }}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MidmidContainer_priceView_Text
                style={{
                  fontWeight: 'bold',
                }}>
                총가격만 표시하기
              </MidmidContainer_priceView_Text>
              <MidmidContainer_priceView2_nested_touch_nested>
                {costOpen ? null : (
                  <MidmidContainer_priceView_Text>
                    ✓
                  </MidmidContainer_priceView_Text>
                )}
              </MidmidContainer_priceView2_nested_touch_nested>
            </MidmidContainer_priceView2_nested_touch>
          </MidmidContainer_priceView2>
        </MidmidContainer>
        <MidmidContainer>
          <MidmidContainer_TextInput
            multiline={true}
            style={{textAlignVertical: 'top'}}
            value={work_info}
            autoCapitalize={'none'}
            placeholder={'작업에 대한 소개를 해주세요.'}
            onChangeText={(value) =>
              setWork_info(value)
            }></MidmidContainer_TextInput>
        </MidmidContainer>
        <MidmidContainer>
          <TagInput
            placeholder="#태그입력 (최대 3개)"
            updateState={(tag) => {
              if (tag.tagsArray.length > 3) {
                return;
              }
              setTag({
                tag: tag.tag,
                tagsArray: tag.tagsArray,
              });
            }}
            tags={tag}></TagInput>
        </MidmidContainer>
        <MidmidContainer></MidmidContainer>
      </MidContainer>
      <BottomContainer
        onPress={() => {
          send_data();
        }}>
        <BottomText>작업수정</BottomText>
      </BottomContainer>
      {isLoading ? <Container_act></Container_act> : null}
    </Container>
  );
}

export default Work_revise;
