import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'
import { Input } from '../../../../Components/Input'
import { Image } from '../../../../Components/Image'

import {useTheme} from '../../../../Hooks'
import { Errors } from '../../../../Utils/Codes'
import { isaValidDate } from '../../../../Utils/isaValidDate'


const NationalID = ({route,navigation}) => {
    const [date,setDate] = useState('')
    const [disabled,setDisabled] = useState(true)

    const defaultBorder = useTheme().Colors.placeHolder
    const [date_border,setDate_border] = useState(defaultBorder)


    useEffect(()=>{
        if(isaValidDate(date.replace(/\D/g,""))){
            //Save 
            setDisabled(false)
            setDate_border(defaultBorder)
        }else{
            setDate_border(useTheme().Colors.error)
            setDisabled(true)
        }
    },[date])

    const next = () => {
        if(isaValidCPF(date.replace(/\D/g,""))){
            //Save 
            //navigation.navigate('')
        }else{
            console.log(Errors[3])
        }
    }

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:3}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text center>Your Birth Date is:</Text>
                    </Container>
                    
                    <Container width={'90%'}>
                        <Input
                            borderColor={date_border}
                            type="number"
                            value={date}
                            mask={"DATE_DDMMYYYY"}
                            onChangeText={setDate}
                            placeholder="Ex: 11/11/2011"
                        />
                    </Container>

                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Button disabled={disabled} onPress={()=>{next()}}>Next</Button>
                    </Container>

                </Container>
            </View>
            <Container>
                <Text center
                    Bodytext
                    fontSize={useTheme().FontSize.small}>For Demo purposes, CPF will be the ID required.</Text>
                    
            </Container>
            
        </View>
    )
}

export default NationalID