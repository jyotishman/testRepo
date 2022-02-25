import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProductItem from './productItem';

export default function ApiCall(props) {
  const [apiData, setapiData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const apiURL =
    'https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0';

  useEffect(() => {
    //start loader
    setisLoading(true);
    axios
      .get(apiURL)
      //api is pending. api call is going on in the server
      .then(data => {
        //api call is success and complete
        //false loader
        setapiData(data.data);
        setisLoading(false);
      })
      .catch(() => {
        //loader is false
        //error handling
        setisLoading(false);
      });
    //empty array means it will work only first time it loads
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.pageHeading}>ApiCall</Text>
        <Pressable
          onPress={() => {
            Linking.openURL('sms: +91-8377844923');
          }}>
          <Text>Redirect me to google in browser</Text>
        </Pressable>
        {isLoading ? <Text>Please wait... Loading</Text> : null}
        <View style={{flex: 1, padding: 20}}>
          <ScrollView>
            {apiData?.store_items?.map(item => {
              return (
                <View key={item.category.name}>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('CategoryPage', {
                        data: item,
                      })
                    }>
                    <Text style={styles.catName}>
                      {item.category && item.category.name}
                    </Text>
                  </TouchableOpacity>
                  <View style={styles.productItemContainer}>
                    {item?.items?.slice(0, 2)?.map((productItem, index) => {
                      return (
                        <ProductItem
                          data={productItem}
                          key={item.category && item.category.id + index}
                        />
                      );
                    })}
                  </View>
                  {item?.items?.length > 2 ? (
                    <Text>See all products...</Text>
                  ) : null}
                </View>
              );
            })}
          </ScrollView>
        </View>

        {
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              backgroundColor: 'blue',
            }}
            onPress={() => props.navigation.navigate('CartPage')}>
            <Text style={{color: '#fff'}}>View Cart</Text>
            <Text style={{color: '#fff'}}>{10} items</Text>
          </Pressable>
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageHeading: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  productItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productItem: {
    width: '44%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dotted',
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  catName: {
    color: '#000',
    textAlign: 'center',
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    marginVertical: 10,
  },
  priceWrap: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  dprice: {
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  oprice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
