
import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '../../Hooks'
import { useFonts } from 'expo-font'
import { Container } from '../../Components/Container'

import studentScreens from './Screens/Student'

import teacherScreens from './Screens/Teacher'


const Stack = createStackNavigator()


const Signin = () => {
  return (
        <Stack.Navigator screenOptions={{ gestureEnabled:false,headerShown: false }}>

            {studentScreens(Stack)}

            {teacherScreens(Stack)}
        </Stack.Navigator>
  )
}


export default Signin