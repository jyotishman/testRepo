import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Apicall from './apicall';
import BasicStyleComponents from './basicStyleComponents';
import DetailPage from './detailPage';
import RNForm from './rnForm';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Apicall"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Apicall" component={Apicall} />
        <Stack.Screen name="DetailPage" component={DetailPage} />
        <Stack.Screen name="RNForm" component={RNForm} />
        <Stack.Screen
          name="BasicStyleComponents"
          component={BasicStyleComponents}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
