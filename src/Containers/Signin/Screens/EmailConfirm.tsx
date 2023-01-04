import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../Components/Container'
import { Text } from '../../../Components/Text'
import Header from '../Components/Header'

import { Input } from '../../../Components/Input'
import { Button } from '../../../Components/Button'

import {useTheme} from '../../../Hooks'
import { isaValidEmail } from '../../../Utils/isValidEmail'
import { sendEmailCode } from '../../../Storage/sendEmailCode'
import { Errors } from '../../../Utils/Codes'

const EmailConfirm = ({route,navigation}) => {
    const [code,setCode] = useState()
    const [correctCode,setCorrectCode] = useState('')

    const [email,setEmail] = useState('')
    const [disabled,setDisabled] = useState(true)
    const [sendCode_disabled,setSendCode_disabled] = useState(true)

    const defaultBorder = useTheme().Colors.placeHolder
    const [code_border,setCode_border] = useState(defaultBorder)

    const reSendCode = () => {
        setSendCode_disabled(true)
        if(disabled){
            sendEmailCode(email,generateCode(),(status) => {
                //Ready to type to code
                setTimeout(()=>{
                    setSendCode_disabled(false)
                },1000 * 60)
            })
        }
    }

    //Generate Code 
    const generateCode = () => {
        var code_ = '000000'
        setCorrectCode(code_)
        
        return (code_)
    }

    //Send code
    useEffect(()=>{
        setDisabled(compareCodes())
        sendEmailCode(email,generateCode(),(status) => {
            //Ready to type to code
            setTimeout(()=>{
                setSendCode_disabled(false)
            },1000 * 60)
        })
    },[])

    const compareCodes = () => {
        var result = true
        if(correctCode == code){
            result = false            
        }
        return result
    }

    useEffect(()=>{
        setDisabled(compareCodes())
    },[code])

    const next = () => {
        if(!disabled){
            navigation.navigate('OverviewData')
        }
    }

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:route.params.step}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text center>We sent you a{'\n'}
                            verification code in{'\n'}
                            the registered email.:</Text>
                    </Container>
                    
                    <Container width={'90%'}>
                        <Input
                            borderColor={code_border}
                            type="code"
                            value={code}
                            onChangeText={setCode}
                            placeholder="Ex: y4687jui"
                        />
                    </Container>

                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Button disabled={disabled} onPress={()=>{next()}}>Next</Button>
                    </Container>

                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Button inline disabled={sendCode_disabled} onPress={()=>{reSendCode()}}>Re-send code</Button>
                    </Container>

                </Container>
            </View>
            
        </View>
    )
}

export default EmailConfirm