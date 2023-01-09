import React from 'react'
import { Container, View } from '../../../Components/Container'
import { Text } from '../../../Components/Text'
import Header from '../Components/Header'

export default ({route,navigation}) => {
    return(
        <View centerX centerY scroll>
            <Header
            navigation={navigation}
            props={{title:'Settings',backbutton:true}}/>

            <Container centerX centerY>
            <Text>{route.params.who}.Settings</Text>
            </Container>
        </View>
    )
}