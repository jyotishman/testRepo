import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  Pressable,
  Linking,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';

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
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.pageHeading}>ApiCall</Text>
        <Pressable
          onPress={() => {
            Linking.openURL('sms: +91-8377844923');
          }}>
          <Text>Redirect me to google in browser</Text>
        </Pressable>
        {isLoading ? <Text>Please wait... Loading</Text> : null}
        <ScrollView>
          {apiData?.store_items?.map(item => {
            return (
              <View key={item.category.name}>
                <Text style={styles.catName}>
                  {item.category && item.category.name}
                </Text>
                <View style={styles.productItemContainer}>
                  {item?.items?.map(productItem => {
                    return (
                      <View style={styles.productItem} key={productItem?.id}>
                        <Image
                          style={{height: 150, width: '100%'}}
                          source={{uri: productItem?.image_url}}
                        />
                        <Text
                          style={{
                            fontSize: 15,
                            marginBottom: 10,
                            color: '#000',
                          }}
                          numberOfLines={1}>
                          {productItem?.name}
                        </Text>
                        <View style={styles.priceWrap}>
                          <Text style={styles.dprice}>
                            {productItem?.price} INR
                          </Text>
                          <Text style={styles.oprice}>
                            {productItem?.discounted_price} INR
                          </Text>
                        </View>
                        <Button
                          onPress={() =>
                            props.navigation.navigate('DetailPage', {
                              data: productItem,
                            })
                          }
                          title="Add to cart"
                        />
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  pageHeading: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
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
