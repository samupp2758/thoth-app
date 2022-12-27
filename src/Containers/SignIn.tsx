import React, { useEffect } from 'react'
import { Title } from '../Components/Text'
import { Container, View } from '../Components/Container'
import { Image } from '../Components/Image'
import { useTheme } from '../Hooks'

const SignIn = () => {
  useEffect(() => {
  })

  return (
    <View centerX>
      <Container>
        <Title  large bold
                marginTop={useTheme().Margin.top-21}
                marginLeft={useTheme().Margin.left}>Sign In</Title>
      </Container>
      <Container rightX>
        <Image height={'400px'} maxWidth="90%" source="siginIsometric"/>
      </Container>

    </View>
  )
}

export default SignIn
