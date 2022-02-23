import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {RNCamera} from 'react-native-camera';
import Contacts from 'react-native-contacts';

const contactListData = [
  {name: 'manav', phone: '882233662565'},
  {name: 'amey', phone: '882233662565'},
  {name: 'sonal', phone: '882233662565'},
  {name: 'mrunali', phone: '882233662565'},
  {name: 'mahesh', phone: '882233662565'},
  {name: 'omkar', phone: '882233662565'},
  {name: 'jyotishman', phone: '882233662565'},
  {name: 'jayshree', phone: '882233662565'},
  {name: 'ram', phone: '882233662565'},
  {name: 'laxman', phone: '882233662565'},
  {name: 'bhim', phone: '882233662565'},
];
export default function SearchProduct() {
  React.useEffect(() => {
   
  }, []);

  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Waiting</Text>
    </View>
  );
  var url = 'https://api.dotshowroom.in/api/dotk/catalog/searchItems';
  const [productData, setproductData] = useState('');

  const [contactList, setContactData] = useState(contactListData);

  const handleChange = value => {
    var filteredData = contactList.filter(item => {
      if (item.name.indexOf(value) > -1) {
        return item;
      }
    });
    if (value) {
      setContactData(filteredData);
    } else {
      setContactData(contactListData);
    }
  };

  const resetText = () => {
    setproductData('');
    setshowErrorMessage(false);
  };

  const handleCamera = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    console.log(data.base64);
  };
  return (
    <View style={{flex: 1}}>
      <RNCamera
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => handleCamera(camera)}>
                <Text style={{fontSize: 14}}> take pics </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
}
