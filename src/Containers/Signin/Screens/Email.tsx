import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../Components/Container'
import { Text } from '../../../Components/Text'
import Header from '../Components/Header'

import { Input } from '../../../Components/Input'
import { Button } from '../../../Components/Button'

import {useTheme} from '../../../Hooks'
import { isaValidEmail } from '../../../Utils/isValidEmail'
import { Errors } from '../../../Utils/Codes'

const Email = ({route,navigation}) => {
    const [email,setEmail] = useState('')
    const [disabled,setDisabled] = useState(true)

    const defaultBorder = useTheme().Colors.placeHolder
    const [email_border,setEmail_border] = useState(defaultBorder)


    useEffect(()=>{
        if(isaValidEmail(email)){
            //Save 
            setDisabled(false)
            setEmail_border(defaultBorder)
        }else{
            setEmail_border(useTheme().Colors.error)
            setDisabled(true)
        }
    },[email])

    const next = () => {
        if(isaValidEmail(email)){
            //Save 
            navigation.navigate('Password')
        }else{
            console.log(Errors[0])
        }
    }

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:1}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text>Your E-mail is:</Text>
                    </Container>
                    
                    <Container width={'90%'}>
                        <Input
                            borderColor={email_border}
                            type="email"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Ex: yourname@thoth.com"
                        />
                    </Container>

                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Button disabled={disabled} onPress={()=>{next()}}>Next</Button>
                    </Container>

                </Container>
            </View>
            
        </View>
    )
}

export default Email