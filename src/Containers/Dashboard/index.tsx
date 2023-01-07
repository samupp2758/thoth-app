
import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '../../Hooks'
import { useFonts } from 'expo-font'
import { Container } from '../../Components/Container'

import studentScreens from './Screens/Student'

import teacherScreens from './Screens/Teacher'
import BottomTab from './Components/BottomTab'

import Notifications from './Screens/Notifications'
import Settings from './Screens/Settings'


const Stack = createStackNavigator()


const Dashboard = () => {
  return (
      <View style={{flex:1}}>
        <Stack.Navigator screenOptions={{ gestureEnabled:false,headerShown: false }}>
          <Stack.Screen name={'Notifications'} component={Notifications}/>
          <Stack.Screen name={'Settings'} component={Settings}/>

            {studentScreens(Stack)}

            {teacherScreens(Stack)}
        </Stack.Navigator>
        <BottomTab/>
      </View>
  )
}


export default Dashboard