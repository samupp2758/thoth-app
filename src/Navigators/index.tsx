import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '../Hooks'

import {StartupContainer} from "../Containers";


const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {

  return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={StartupContainer} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default ApplicationNavigator