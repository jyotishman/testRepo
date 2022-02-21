import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function RNForm(props) {
  //controlled component.
  const firstNameRef = useRef('');
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    age: '',
  });

  useEffect(() => {
    var value = getData('fname');
    value.then(data => {
      console.log(data, 'mydata');
    });
  }, []);

  const getData = async keyName => {
    try {
      const value = await AsyncStorage.getItem(keyName);
      if (value !== null) {
        // value previously stored
      }
      return value;
    } catch (e) {
      // error reading value
    }
  };

  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [todayDate, setTodaysDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  //return today date time.

  const handleChangeText = (value, fieldName) => {
    // let data = {...formData};
    // //rest operator
    // data[fieldName] = value;
    // setFormData(data);
    if (fieldName === 'fname') {
      setfirstName(value);
    } else if (fieldName === 'lname') {
      setLastName(value);
    } else {
      setAge(value);
    }
  };

  const handleSubmit = () => {
    setOpen(true);
  };
  
  const dateOnChange = () => {
    console.log('first')
  };
  const productName = props?.route?.params?.pname;

  return (
    <KeyboardAvoidingView style={{padding: 20}} behavior="height">
      <Text style={{fontSize: 20, color: '#000', textAlign: 'center'}}>
        Enquiry for {productName}
      </Text>
      <Image
        style={{backgroundColor: '#999', width: '100%', height: 200}}
        // blurRadius={10}
        source={{
          uri: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
        }}
        resizeMode="cover"
      />
      <ScrollView>
        <View>
          <Text>First Name</Text>
          <TextInput
            placeholder="Enter your Fname"
            maxLength={20}
            ref={firstNameRef}
          />
        </View>
        <View>
          <Text>Last Name</Text>
          <TextInput
            value={lastName}
            placeholder="Enter your age"
            onChangeText={value => handleChangeText(value, 'lname')}
          />
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            value={lastName}
            placeholder="Enter your age"
            onChangeText={value => handleChangeText(value, 'lname')}
          />
        </View>
        <View>
          <Text>Address</Text>
          <TextInput
            value={lastName}
            placeholder="Enter your age"
            onChangeText={value => handleChangeText(value, 'lname')}
          />
        </View>
        <View>
          <Text>Age</Text>
          <TextInput
            placeholder="Enter your age"
            keyboardType="numeric"
            maxLength={4}
            value={age}
            onChangeText={value => handleChangeText(value, 'age')}
          />
        </View>

        
        <Button onPress={handleSubmit} title="Submit form " />
      </ScrollView>
      {open && (
        <DateTimePicker
        mode='date'
          testID="dateTimePicker"
          value={todayDate}
          is24Hour={true}
          display="default"
          onChange={dateOnChange}
        />
      )}
    </KeyboardAvoidingView>
  );
}
