import BreadDetailScreen from '../Screens/BreadDetailScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryBreadScreen from '../Screens/CategoryBreadScreen';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ROUTES = {
  HOME: 'Home',
}
 
const BreadNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name={ROUTES.HOME}
        options={{ title: 'Categorías' }}
        component={CategoriesScreen}
      ></Stack.Screen>
      
      <Stack.Screen
        name='Productos'
        component={CategoryBreadScreen}
      ></Stack.Screen>
      
      <Stack.Screen 
        name='Detalles de panes'
        component={BreadDetailScreen}
      ></Stack.Screen>
      
    </Stack.Navigator>
  </NavigationContainer>
); 

export default BreadNavigator;
