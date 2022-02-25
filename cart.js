import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductItem from "./productItem";
export default function CartPage(props) {
  const cartData = useSelector(state => state.cartReducer.data);

  return (
    <ScrollView style={{padding: 20}}>
      <Text>CartPages</Text>
      {cartData &&
        Object.keys(cartData)?.length &&
        Object.keys(cartData).map(key => {
          return (
            <View>
              <ProductItem data={cartData[key]}/>
            </View>
          );
        })}
    </ScrollView>
  );
}
