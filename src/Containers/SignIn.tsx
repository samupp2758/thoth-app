import React, { useEffect } from 'react'
import { Text } from '../Components/Text'
import { Container, View } from '../Components/Container'
import { Image } from '../Components/Image'
import { Button } from '../Components/Button'
import { useTheme } from '../Hooks'

const SignIn = () => {
  useEffect(() => {
  })

  return (
    <View centerX>

      <Container>
        <Text  large bold
                marginTop={useTheme().Margin.top-21}
                marginLeft={useTheme().Margin.left}>Sign In</Text>
      </Container>

      <Container rightX>
        <Image height={'400px'} maxWidth="90%" source="siginIsometric"/>
      </Container>

      <Container flex bottomY centerX>
        <Button>Sign In by the app</Button>
        <Button google>Sign In with Google</Button>
        <Button facebook>Sign In with Facebook</Button>
        <Text marginTop={useTheme().Margin.top-15} center Bodytext fontSize={useTheme().FontSize.small}>
          By entering our application, you agree to {"\n"}
          the <Button inline fontSize={useTheme().FontSize.small}>terms of use.</Button>
        </Text>
      </Container>

    </View>
  )
}

export default SignIn
