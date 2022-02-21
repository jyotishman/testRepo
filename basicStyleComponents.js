import {View, Text, StyleSheet, Button, Image} from 'react-native';
import React from 'react';
import DogImage from './dog.jpeg';
export default function BasicStyleComponents() {
  return (
    <View style={{backgroundColor: '#eee', flex: 1}}>
      <Text>Ecommerce App - Flipkart</Text>
      {/* <Image source={DogImage}/> */}

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          flex: 1,
          padding: 20,
          justifyContent: 'center',
        }}>
        <View style={pagestyle.productItem}>
          <Image
            style={{backgroundColor: '#999', width: "100%", height: 200}}
            // blurRadius={10}
            source={{
              uri: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
            }}
            resizeMode="cover"
          />
          <Text>iPhone 12</Text>
        </View>
        <View style={pagestyle.productItem}>
          <Text>Window Laptop</Text>
        </View>
        <View style={pagestyle.productItem}>
          <Text>iMac</Text>
        </View>
      </View>
      <View style={{backgroundColor: '#999', padding: 20}}>
        <Button title="i am a sticky button"></Button>
      </View>
    </View>
  );
}

const pagestyle = StyleSheet.create({
  productItem: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'pink',
    flex: 1,
  },
});
