import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Apicall from './apicall';
import BasicStyleComponents from './basicStyleComponents';
import DetailPage from './detailPage';
import RNForm from './rnForm';
import ListData from './listData';
import Phonepehome from './phonepehome';
import Webview from './webview';
import Login from './login';
import SearchProduct from './searchProduct';
import QuizHomepage from './quiz';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="QuizHomepage"
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
        <Stack.Screen name="ListData" component={ListData}></Stack.Screen>
        <Stack.Screen name="Phonepehome" component={Phonepehome}></Stack.Screen>
        <Stack.Screen name="Webview" component={Webview}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="QuizHomepage" component={QuizHomepage}></Stack.Screen>
        <Stack.Screen
          name="SearchProduct"
          component={SearchProduct}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
