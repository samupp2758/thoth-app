import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../Components/Container'
import { Text } from '../../../Components/Text'
import Header from './../Components/Header'

import {useTheme} from '../../../Hooks'
import { Input } from '../../../Components/Input'
import { Button } from '../../../Components/Button'
import { isValidpassword } from '../../../Utils/isValidpassword'
import { Errors } from '../../../Utils/Codes'

const Password = ({route,navigation}) => {
    const [password,setPassword] = useState('')
    const [disabled,setDisabled] = useState(true)
    const [password_repeat,setPassword_repeat] = useState('')

    const defaultBorder = useTheme().Colors.placeHolder
    const [password_repeat_border,setPassword_repeat_border] = useState(defaultBorder)
    const [password_border,setPassword_border] = useState(defaultBorder)


    useEffect(()=>{

        if(password != password_repeat){
            setPassword_repeat_border(useTheme().Colors.error)
        }else{
            setPassword_repeat_border(defaultBorder)
        }

        if(isValidpassword(password)){
            
            setPassword_border(defaultBorder)
        }else{
            setPassword_border(useTheme().Colors.error)
            setPassword_repeat_border(useTheme().Colors.error)
        }

        if(isValidpassword(password) &&
        password == password_repeat){
            setDisabled(false)
        }

    },[password,password_repeat])

    const next = () => {
        if(isValidpassword(password)){
            //Save 
            if(password == password_repeat){
                
                //Save 
                navigation.navigate('Name')
            }else{
                console.log(Errors[2])
            }
        }else{
            console.log(Errors[1])
        }
    }

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:2}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text>What is your Password?</Text>
                    </Container>
                    
                    <Container width={'90%'}>
                        <Text
                        bold 
                        marginTop={useTheme().Margin.top-10}
                        marginBottom={useTheme().Margin.bottom-25}>Password</Text>
                        <Input
                            borderColor={password_border}
                            type="password"
                            value={password}
                            onChangeText={setPassword}
                            placeholder="your1st*#!passw@rd"
                        />
                    </Container>

                    <Container width={'90%'}>
                        <Text 
                        bold 
                        marginTop={useTheme().Margin.top-10}
                        marginBottom={useTheme().Margin.bottom-25}>Confirm the Password</Text>
                        <Input
                            borderColor={password_repeat_border}
                            type="password"
                            value={password_repeat}
                            onChangeText={setPassword_repeat}
                            placeholder="Repeat your1st*#!passw@rd"
                        />
                    </Container>

                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Button disabled={disabled} onPress={()=>{next()}}>Next</Button>
                    </Container>

                </Container>
            </View>
            
            <Container centerX marginTop={useTheme().Margin.bottom-20}>
                <Text center Bodytext fontSize={useTheme().FontSize.regular}>
                    Contains Uppercase, Lowercase,{'\n'}
                    Special Characters, more than 10 and{'\n'}
                    less than 16 characters, and numbers.</Text>
            </Container>
        </View>
    )
}

export default Password