import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '../Hooks'
import { useFonts } from 'expo-font'

import {
  Startup, 
  SplashScreen,
  TermsOfUse,
  Login,
  
  //Storyboards
  Signin,
  Dashboard} from "../Containers";


const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {

  const [loaded] = useFonts({
    PoppinsThin: require('../Assets/Fonts/Poppins/Poppins-Thin.ttf'),
    PoppinsRegular: require('../Assets/Fonts/Poppins/Poppins-Regular.ttf'),
    PoppinsMedium: require('../Assets/Fonts/Poppins/Poppins-Medium.ttf'),
    PoppinsBold: require('../Assets/Fonts/Poppins/Poppins-Bold.ttf'),
  });
  
  if (!loaded) {
    return null
  }
  
  return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator screenOptions={{ gestureEnabled:false,headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TermsOfUse" component={TermsOfUse} />

          <Stack.Screen name="Signin" component={Signin}/>
          <Stack.Screen name="Dashboard" component={Dashboard}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default MainNavigator