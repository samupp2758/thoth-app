import React, { useEffect } from 'react'
import { Text } from '../Components/Text'
import { Container, View } from '../Components/Container'
import { Image } from '../Components/Image'
import { Button } from '../Components/Button'
import { useTheme } from '../Hooks'

const SignIn = ({navigation}) => {
  useEffect(() => {
  })

  return (
    <View centerX>

      <Container>
        <Text  large bold
                marginTop={useTheme().Margin.top-21}
                marginLeft={useTheme().Margin.left}>Log In</Text>
      </Container>

      <Container rightX>
        <Image height={'400px'} maxWidth="90%" source="siginIsometric"/>
      </Container>

      <Container flex bottomY centerX>
        <Button onPress={()=>navigation.navigate('Login')}>Login by the app</Button>
        <Button google>Login with Google</Button>
        <Button facebook>Login with Facebook</Button>
        <Text marginTop={useTheme().Margin.top-15} center Bodytext fontSize={useTheme().FontSize.small}>
          By entering our application, you agree to {"\n"}
          the <Button inline underlined fontSize={useTheme().FontSize.small} onPress={()=>{navigation.navigate('TermsOfUse')}}>terms of use.</Button>
        </Text>
      </Container>

    </View>
  )
}

export default SignIn
