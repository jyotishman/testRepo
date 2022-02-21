import {View, Text, TextInput} from 'react-native';
import React from 'react';
import axios from 'axios';

export default function SearchProduct() {
  var url = 'https://api.dotshowroom.in/api/dotk/catalog/searchItems';
  
  const handleChange = (value) => {
    axios.post(url, {
      page: 1,
      store_id: 2490120,
      search_text: value,
    }).then((data)=> {
      console.log(data, 'dadads')
    })
  };
  return (
    <View>
      <Text>SearchProduct</Text>
      <TextInput
        style={{backgroundColor: '#ddd', padding: 20}}
        placeholder="search product name....."
        onChangeText={(value) => handleChange(value)}
      />
    </View>
  );
}
