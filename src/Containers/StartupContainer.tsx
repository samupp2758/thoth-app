import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useTheme } from '../Hooks'

const StartupContainer = () => {
  useEffect(() => {
  })

  return (
    <View style={{flex: 1,
        flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'}}>
      <Text style={{color:"#000",fontSize:50}}>Welcome!</Text>
    </View>
  )
}

export default StartupContainer
