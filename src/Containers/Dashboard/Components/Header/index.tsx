import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ButtonedIcon } from '../../../../Components/Button'
import { Container } from '../../../../Components/Container'
import { Image } from '../../../../Components/Image'
import { Text } from '../../../../Components/Text'
import { useTheme } from '../../../../Hooks'
import {
    BackBox,
    IconBox} from './style'

const  Header = ({navigation,props}) => {
    return (
        <Container centerX marginTop={useTheme().Margin.top-20}
        marginBottom={useTheme().Margin.bottom-25}>
            
            {props.backbutton?
            <BackBox>
                <ButtonedIcon onPress={()=>{navigation.goBack()}} name='left' size={30} color={useTheme().Colors.primary}/>
            </BackBox>:<></>}
            
            <Text bold large>{props.title}</Text>
            {!props.noUserButton?
            <IconBox>
                <TouchableOpacity onPress={()=>navigation.navigate(props.who+'.User')}>
                    <Image source='logoDashboard' size={1}/>
                </TouchableOpacity>
            </IconBox>:<></>}
        </Container>
    )
}

export default Header