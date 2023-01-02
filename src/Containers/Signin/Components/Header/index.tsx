import React from 'react'
import { ButtonedIcon } from '../../../../Components/Button'
import { Text } from '../../../../Components/Text'
import { useTheme } from '../../../../Hooks'
import {
    Container,
    IconBox} from './style'


const  Header = ({navigation,props}) => {
    return (
        <Container>
            <IconBox>
                <ButtonedIcon
                    onPress={()=>navigation.goBack()}
                    backgroundColor='#000'
                    family='AntDesign'
                    name='left'
                    color={useTheme().Colors.primary}/>
            </IconBox>
            <Text bold large>{props.step}</Text>
        </Container>
    )
}

export default Header