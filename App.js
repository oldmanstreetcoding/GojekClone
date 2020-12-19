// import Router from './src/config/router';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailNews from './src/containers/pages/DetailNews';
import Home from './src/containers/pages/Home';
import ScanQRCodes from './src/containers/pages/ScanQRCodes';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailNews" component={DetailNews} />
        <Stack.Screen name="ScanQRCodes" component={ScanQRCodes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
