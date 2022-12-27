import React, { useEffect } from 'react'
import { Image } from '../Components/Image'
import { Title } from '../Components/Text'
import { View } from '../Components/Container'
import { useTheme } from '../Hooks'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('SignIn')
    },1000)
  })

  return (
    <View centerX centerY>
      <Image source="logo" size={3}/>
      <Title marginTop={30}>Thoth App</Title>
    </View>
  )
}

export default SplashScreen
