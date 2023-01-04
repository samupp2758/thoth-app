
import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '../../Hooks'
import { useFonts } from 'expo-font'
import { Container } from '../../Components/Container'
import Header from './Components/Header'

import Email from './Screens/Email'
import Password from './Screens/Password'
import SelectProfile from './Screens/SelectProfile'
import Name from './Screens/Name'
import EmailConfirm from './Screens/EmailConfirm'

import studentScreens from './Screens/Student'

import teacherScreens from './Screens/Teacher'


const Stack = createStackNavigator()


const Signin = () => {
  return (
        <Stack.Navigator screenOptions={{ gestureEnabled:false,headerShown: false }}>
            <Stack.Screen name='Email' component={Email}/>
            <Stack.Screen name='Password' component={Password}/>
            <Stack.Screen name='Name' component={Name}/>
            <Stack.Screen name='SelectProfile' component={SelectProfile}/>
            <Stack.Screen name='EmailConfirm' component={EmailConfirm}/>

            {studentScreens(Stack)}

            {teacherScreens(Stack)}
        </Stack.Navigator>
  )
}


export default Signin