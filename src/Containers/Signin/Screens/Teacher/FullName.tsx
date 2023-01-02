import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'
import { Input } from '../../../../Components/Input'


import {useTheme} from '../../../../Hooks'
import { Errors } from '../../../../Utils/Codes'
import { Image } from '../../../../Components/Image'
import { isaValidName } from '../../../../Utils/isaValidName'


const FullName = ({route,navigation}) => {
    const [name,setName] = useState('')
    const [disabled,setDisabled] = useState(true)

    const defaultBorder = useTheme().Colors.placeHolder
    const [name_border,setName_border] = useState(defaultBorder)


    useEffect(()=>{
        if(isaValidName(name)){
            //Save 
            setDisabled(false)
            setName_border(defaultBorder)
        }else{
            setName_border(useTheme().Colors.error)
            setDisabled(true)
        }
    },[name])

    const next = () => {
        if(isaValidName(name)){
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
                        <Text center>Your Full Name is:</Text>
                    </Container>
                    
                    <Container width={'90%'}>
                        <Input
                            borderColor={name_border}
                            type="name"
                            value={name}
                            onChangeText={setName}
                            placeholder="Ex: Your Full Name"
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

export default FullName