import React, { useEffect } from 'react'
import { Image } from '../Components/Image'
import { Text } from '../Components/Text'
import { Container, View } from '../Components/Container'
import { useTheme } from '../Hooks'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('Startup')
    },1000)
  })

  return (
    <View centerX centerY>
      <Container centerX>
        <Image source="logo" size={2}/>
      </Container>
      <Text marginTop={20} center>Thoth App</Text>
    </View>
  )
}

export default SplashScreen
