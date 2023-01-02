import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'

import {useTheme} from '../../../../Hooks'
import { Errors } from '../../../../Utils/Codes'

const Course = ({route,navigation}) => {
    const [disabled,setDisabled] = useState(true)


    const next = () => {
       
    }

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:5}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text center>What is your graduation level?</Text>
                    </Container>
                    
                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Button disabled={disabled} onPress={()=>{next()}}>Next</Button>
                    </Container>

                </Container>
            </View>
            
        </View>
    )
}

export default Course