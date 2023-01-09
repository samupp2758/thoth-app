import React from 'react'
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
        <Container centerX marginTop={useTheme().Margin.top-20}>
            
            {props.backbutton?
            <BackBox>
                <ButtonedIcon name='left' size={40} color={useTheme().Colors.primary}/>
            </BackBox>:<></>}
            
            <Text bold large>{props.title}</Text>
            <IconBox>
                <Image source='logoDashboard' size={1}/>
            </IconBox>
        </Container>
    )
}

export default Header