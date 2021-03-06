import AppLoading from 'expo-app-loading';
import BreadNavigator from './Navigation/BreadNavigator';
import React from 'react';
import { StyleSheet, } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
      'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
  
    if (!loaded) 
    return  <AppLoading></AppLoading>     
       
  return (
    <BreadNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})