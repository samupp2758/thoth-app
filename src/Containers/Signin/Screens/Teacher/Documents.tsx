import React, { useCallback, useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'
import { FileInput, Input } from '../../../../Components/Input'
import { Image } from '../../../../Components/Image'

import {useTheme} from '../../../../Hooks'
import { Errors } from '../../../../Utils/Codes'
import { isaValidDate } from '../../../../Utils/isaValidDate'


const Documents = ({route,navigation}) => {
    const [disabled,setDisabled] = useState(true)
    const [selected,setselected] = useState()




    useEffect(()=>{
        if(selected){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[selected])

    const next = () => {
        if(selected){
            navigation.navigate('EmailConfirm',{who:'teacher',step:11})
        }
    }

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:10}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text center>Upload your diploma:</Text>
                    </Container>
                    
                    <Container centerX>
                        <FileInput
                            multipleFiles={false}
                            onSelect={(value)=>setselected(value)}
                            placeholder={'Select your Diploma'}/>
                    </Container>

                    {disabled? <></>:
                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Button onPress={()=>{next()}}>Next</Button>
                    </Container>}

                </Container>
            </View>
            <Container>
                <Text center
                    Bodytext
                    fontSize={useTheme().FontSize.small}>
                        We need a validation of{'\n'}
                    its area of ​​expertise, certifying that{'\n'}
                    is able to produce the Tots.</Text>
                    
            </Container>
            
        </View>
    )
}

export default Documents