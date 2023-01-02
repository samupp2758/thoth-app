import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'
import { Input } from '../../../../Components/Input'
import { Image } from '../../../../Components/Image'

import {useTheme} from '../../../../Hooks'
import { Errors } from '../../../../Utils/Codes'
import { isaValidCPF } from '../../../../Utils/isaValidCPF'


const NationalID = ({route,navigation}) => {
    const [cpf,setCpf] = useState('')
    const [disabled,setDisabled] = useState(true)

    const defaultBorder = useTheme().Colors.placeHolder
    const [cpf_border,setCpf_border] = useState(defaultBorder)


    useEffect(()=>{
        if(isaValidCPF(cpf)){
            //Save 
            setDisabled(false)
            setCpf_border(defaultBorder)
        }else{
            setCpf_border(useTheme().Colors.error)
            setDisabled(true)
        }
    },[cpf])

    const next = () => {
        if(isaValidCPF(cpf)){
            //Save 
            navigation.navigate('CPF')
        }else{
            console.log(Errors[2])
        }
    }

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:3}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text center>Your CPF is:</Text>
                        <Text center
                        Bodytext
                        fontSize={useTheme().FontSize.small}>Your CPF is:</Text>
                    </Container>
                    
                    <Container width={'90%'}>
                        <Input
                            borderColor={cpf_border}
                            type="name"
                            value={cpf}
                            onChangeText={setCpf_border}
                            placeholder="Ex: CPF"
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

export default NationalID