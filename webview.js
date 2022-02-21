import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Webview(props) {
  const [isLoading, setisLoading] = useState(true);
  return (
    <View style={{flex: 1}}>
      {isLoading ? <Text>loading.... please wait!</Text>: null}
      <WebView
        onLoadEnd={()=> setisLoading(false)}
        style={{flex: 1}}
        // onLoad={() => setisLoading(false)}
        source={{uri: 'https://www.wishtreetech.com/'}}
      />
    </View>
  );
}