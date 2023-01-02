import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../Components/Container'
import { Text } from '../../../Components/Text'
import Header from '../Components/Header'

import { Button } from '../../../Components/Button'

import {useTheme} from '../../../Hooks'

const SelectProfile = ({route,navigation}) => {
   

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:4}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text center>Okay! You are a.....</Text>
                    </Container>
                    
                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Button onPress={()=>{navigation.navigate('Course')}}>Student</Button>
                    </Container>
                    <Container centerX>
                        <Button onPress={()=>{navigation.navigate('ExplanationRevenue')}}>Teacher</Button>
                    </Container>

                </Container>
            </View>
            
        </View>
    )
}

export default SelectProfile