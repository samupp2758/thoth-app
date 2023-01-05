import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'

import {useTheme} from '../../../../Hooks'
import Icon from '../../../../Components/Icon'

const SuccessPage = ({route,navigation}) => {

    useEffect(()=>{

    },[])

    const next = () => {
        navigation.navigate('Login')
    }

    return (
        <View centerX centerY>
            <View centerX>
                <Container centerX>

                    <Container centerX>
                        <Icon
                            color={useTheme().Colors.primary}
                            size={120}
                            name='checkcircle'
                        />
                    </Container>
                    <Container 
                    centerX 
                    marginTop={useTheme().Margin.top}
                    >
                        <Text center>Now everything is{'\n'}
                            ready to start!</Text>
                    </Container>
                </Container>
            </View>
            <Container centerX marginTop={useTheme().Margin.bottom-20}>
                <Button onPress={()=>{next()}}>Ok</Button>
            </Container>
        </View>
    )
}

export default SuccessPage