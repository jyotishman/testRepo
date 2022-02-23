import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import user from './user.png';
import information from './information.png';
import bell from './bell.png';
import barcode from './barcode.png';

export default function Phonepehome(props) {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#4b2b80'} />
      <View style={styles.header}>
        <Image source={user} style={styles.userIcon} />
        <View>
          <Text style={styles.headerText}>Your Location</Text>
          <Text style={styles.headerText}>Delhi</Text>
        </View>

        <View style={styles.rightWrap}>
          <Image style={styles.rightIcon} source={barcode}></Image>
          <Image style={styles.rightIcon} source={bell}></Image>
          <Image style={styles.rightIcon} source={information}></Image>
        </View>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.popularWrap}>
          <Text>Make the most of your PhonePe account</Text>
          <View style={styles.popularItemWrap}>
            <View style={styles.popularitem}>
              <Image style={styles.popularItemIcon} source={bell} />
              <Text style={styles.popularItemTxt}>Bank Account Added</Text>
            </View>
            <View style={styles.popularitem}>
              <Image style={styles.popularItemIcon} source={information} />
              <Text style={[styles.popularItemTxt, {maxWidth: 70}]}>
                Wallet Activated
              </Text>
            </View>
            <View style={styles.popularitem}>
              <Image style={styles.popularItemIcon} source={user} />
              <Text style={styles.popularItemTxt}>Add New Card</Text>
            </View>
            <View style={styles.popularitem}>
              <Image style={styles.popularItemIcon} source={barcode} />
              <Text style={styles.popularItemTxt}>Add Photo</Text>
            </View>
          </View>
        </View>
        <View style={{padding: 20}}>
          <Text>Money Transfers </Text>
          <ScrollView style={{}} horizontal={true}>
            <View style={styles.moneyTransferItem}>
              <Image style={styles.moneyIcon} source={barcode} />
              <Text style={styles.moneyTxt}>My Money</Text>
            </View>
            <View style={styles.moneyTransferItem}>
              <Image style={styles.moneyIcon} source={barcode} />
              <Text style={styles.moneyTxt}>To Account</Text>
            </View>
            <View style={styles.moneyTransferItem}>
              <Image style={styles.moneyIcon} source={barcode} />
              <Text style={styles.moneyTxt}>To Self</Text>
            </View>
            <View style={styles.moneyTransferItem}>
              <Image style={styles.moneyIcon} source={barcode} />
              <Text style={styles.moneyTxt}>Bank Balance</Text>
            </View>
            <View style={styles.moneyTransferItem}>
              <Image style={styles.moneyIcon} source={barcode} />
              <Text style={styles.moneyTxt}>Bank Balance</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity style={styles.moneyTransferItem} onPress={()=> props.navigation.navigate("Webview")}>
          <Image style={styles.botomNavIcon} source={barcode} />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        <View style={styles.moneyTransferItem}>
          <Image style={styles.botomNavIcon} source={barcode} />
          <Text style={styles.bottomNavText}>Stores</Text>
        </View>
        <View style={styles.moneyTransferItem}>
          <Image style={styles.botomNavIcon} source={barcode} />
          <Text style={styles.bottomNavText}>Switch</Text>
          <Text
            style={{
              position: 'absolute',
              backgroundColor: 'red',
              color: '#fff',
              fontSize: 12,
              padding: 2,
              borderRadius: 4,
              top: 4,
              left:20
            }}>
            New
          </Text>
        </View>
        <View style={styles.moneyTransferItem}>
          <Image style={styles.botomNavIcon} source={barcode} />
          <Text style={styles.bottomNavText}>My Money</Text>
        </View>
        <View style={styles.moneyTransferItem}>
          <Image style={styles.botomNavIcon} source={barcode} />
          <Text style={styles.bottomNavText}>History</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  moneyTransferItem: {
    justifyContent: 'center',
    width: 100,
  },
  moneyIcon: {
    height: 40,
    width: 40,
  },
  userIcon: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  header: {
    backgroundColor: '#5c2499',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  rightWrap: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  leftWrap: {
    flexDirection: 'row',
  },
  rightIcon: {
    height: 30,
    width: 30,
    marginHorizontal: 6,
  },
  headerText: {
    color: '#fff',
  },
  popularWrap: {
    backgroundColor: '#f7f0da',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  popularItemWrap: {
    flexDirection: 'row',
    marginTop: 10,
  },
  popularitem: {
    flex: 1,
    alignItems: 'center',
  },
  popularItemIcon: {
    height: 20,
    width: 20,
    justifyContent: 'center',
  },
  popularItemTxt: {
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
  },
  botomNavIcon: {
    height: 20,
    width: 20,
  },
  bottomNavItem: {
    alignItems: 'center',
  },
});
