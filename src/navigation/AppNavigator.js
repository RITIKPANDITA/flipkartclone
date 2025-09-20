import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Login from '../screens/Login';
import OtpScreen from '../screens/OtpScreen';
import Home from '../screens/Home';
import ProductDetails from '../screens/PrdouctDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [cart, setCart] = useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          options={{ headerShown: false }}
        >
          {props => <Splash {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
        >
          {props => <Login {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="OtpScreen"
          options={{ headerShown: false }}
        >
          {props => <OtpScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
        >
          {props => <Home {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
         <Stack.Screen
          name="ProductDetails"
          options={{ headerShown: false }}
        >
          {props => <ProductDetails {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator