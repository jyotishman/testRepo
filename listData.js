import {
  View,
  Text,
  FlatList,
  Switch,
  Modal,
  Pressable,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

export default function ListData() {
  const [isSwitchOn, setisSwitchOn] = useState(false);
  const [isModalOpen, setModal] = useState(false);
  const config = {
    enableHighAccuracy: true,
    timeout: 2000,
    maximumAge: 3600000,
  };
  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        alert(JSON.stringify(info));
      },
      error => {
        console.log(error);
      },
      config,
    );
  }, []);

  const handleSwitchChange = () => {
    setisSwitchOn(!isSwitchOn);
  };
  const onRefresh = () => {
    alert('hello');
  };

  return (
    <View>
      <Text>ListData</Text>
      <Button title="Open Modal" onPress={() => setModal(true)}></Button>
      <TouchableOpacity>
        <Text>Hello</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        onRequestClose={() => {
          setModal(false);
        }}
        visible={isModalOpen}
        transparent={true}>
        <View
          style={{
            backgroundColor: '#000',
            height: 200,
            bottom: 0,
            position: 'absolute',
            width: '100%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            padding: 20,
          }}>
          <Pressable onPress={() => setModal(false)}>
            <Text style={{color: '#fff'}}>Close</Text>
          </Pressable>
          <Text style={{color: '#fff'}}>Heloo I am a modal</Text>
        </View>
      </Modal>
      <Switch
        trackColor={{false: 'red', true: 'green'}}
        thumbColor={isSwitchOn ? 'green' : 'red'}
        value={isSwitchOn}
        onChange={handleSwitchChange}></Switch>
      {isSwitchOn ? (
        <FlatList
          data={[
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
            {name: 'Manav'},
            {name: 'Amey'},
            {name: 'Sonal'},
            {name: 'Mrunali'},
            {name: 'Mahesh'},
            {name: 'Omkar'},
          ]}
          renderItem={({item}) => (
            <Text style={{padding: 10, fontSize: 20}}>{item.name}</Text>
          )}
          initialNumToRender={20}></FlatList>
      ) : null}
    </View>
  );
}