import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import React from 'react';

export default function Login(props) {
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 25, color: '#000'}}>Login</Text>
      <View style={{marginBottom: 20,}}>
        <Text>Enter phone/email</Text>
        <TextInput
          style={{backgroundColor: '#ddd'}}
          placeholder="Enter phone/email"
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text>Enter password</Text>
        <TextInput
          style={{backgroundColor: '#ddd'}}
          placeholder="Enter password"
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <Text
          style={{
            backgroundColor: 'blue',
            color: '#fff',
            padding: 15,
            textAlign: 'center',
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
