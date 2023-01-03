import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'

import {useTheme} from '../../../../Hooks'
import { Errors } from '../../../../Utils/Codes'
import { Image } from '../../../../Components/Image'

const ExplanationRevenue = ({route,navigation}) => {
    const [text,setText] = useState('')
    const [part,setPart] = useState(0)
    const explanation = [
        "Now let's explain how does the remuneration by the app...\n",
        "The revenue we generate comes through ads visualized inside\nfrom the platform.",
        "Part of it is destined to the maintenance of system.",
        "The other part is delivered\ncompletely to partner teachers.",
        "The teacher receives the value referring to ads displayed in\nyour content.",
        "After the accumulation of\nminimum, 100 reais, the teacher\ncan request the transfer."
    ]

    useEffect(()=>{
        setText(explanation[part])
    },[part])

    const next = () => {
        if(part+1 < explanation.length){
            setPart(part+1)
        }else{
            setPart(0)
            navigation.navigate('FullName')
        }

    }

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:5}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Text center fontSize={useTheme().FontSize.regularHalf}>
                            {text}</Text>
                    </Container>

                </Container>
            </View>
            <Container centerX marginTop={useTheme().Margin.bottom-20}>
                <Button onPress={()=>{next()}}>Next</Button>
            </Container>
            
        </View>
    )
}

export default ExplanationRevenue