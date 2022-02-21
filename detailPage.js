import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DetailPage(props) {
  const productData = props?.route?.params?.data;
  return (
    <SafeAreaView>
    <View style={{padding: 20}}>
      <Pressable onPress={props.navigation.goBack}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Back</Text>
      </Pressable>
      <Image
        source={{uri: productData.image_url}}
        style={{height: 300, width: 300}}
      />
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
        {productData.name}
      </Text>
      <Text style={{fontSize: 20}}>{productData.price}</Text>
      <Pressable
        onPress={() =>
          props.navigation.navigate('RNForm', {pname: productData.name})
        }>
        <Text>Need Help? Contact us</Text>
      </Pressable>
    </View>
    </SafeAreaView>
  );
}
