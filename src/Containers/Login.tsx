import React, { useEffect, useState } from 'react'
import { Text } from '../Components/Text'
import { Container, View } from '../Components/Container'
import { Image } from '../Components/Image'
import { Button } from '../Components/Button'
import { useTheme } from '../Hooks'
import { Input } from '../Components/Input'

const Login = ({navigation}) => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")



    useEffect(() => {
    },[username])


    return (
    <View centerX>

        <Container>
            <Text  large bold
                    marginTop={useTheme().Margin.top-21}
                    marginLeft={useTheme().Margin.left}>Log In</Text>
        </Container>

        <Container marginTop={useTheme().Margin.top-15} rightX>
            <Image height={'350px'} maxWidth="60%" source="logoLoginScreen"/>
        </Container>

        <Container marginTop={useTheme().Margin.top-15}>
            <Container centerX>
                <Container width={'90%'} marginBottom={useTheme().Margin.bottom}>
                    <Text bold marginBottom={useTheme().Margin.bottom-25}>Username</Text>
                    <Input
                        type="username"
                        value={username}
                        onChangeText={setUsername}
                        placeholder="yourname@example.com"
                    />
                </Container>

                <Container width={'90%'}>
                    <Text bold marginBottom={useTheme().Margin.bottom-25}>Password</Text>
                    <Input
                        type="password"
                        value={password}
                        onChangeText={setPassword}
                        placeholder="your1st*#!passw@rd"
                    />
                </Container>
            </Container>
        </Container>

    <Container flex centerX marginTop={useTheme().Margin.top}>
    <Button>Login</Button>
    <Button inline marginTop={useTheme().Margin.top-21} fontSize={useTheme().FontSize.regular}>Signin</Button>
    </Container>

    </View>
  )
}

export default Login
