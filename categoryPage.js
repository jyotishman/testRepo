import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ProductItem from './productItem';

export default function CategoryPage(props) {
  console.log(props);
  const catData = props?.route?.params?.data;
  const cartData = props?.route?.params?.cartData;
  return (
    <ScrollView>
      <Text>{catData?.category?.name}</Text>
      <View style={{flexDirection: 'row', flexWrap: "wrap"}}>
        {catData?.items?.map(item => {
          return <ProductItem data={item} cartData={cartData} />;
        })}
      </View>
    </ScrollView>
  );
}
