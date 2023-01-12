import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '../../Hooks'
import { ButtonedIcon } from '../Button'
import { Pressable } from '../Button/style'
import Icon from '../Icon'
import { Text } from '../Text'
import { Container,
    Box,
    ContentContainer } from "./style"

type Props = {
    title?:string,
    backgroundColor?:string,
    saved?:boolean,
    topic?:string,
    key?:string,
    onPress?: ()=>void
}

export default ({
    title = "",
    backgroundColor = "#000",
    saved = false,
    topic = true,
    onPress = () => {}
}) => {

    const save = () => {
    }

    return(<TouchableOpacity onPress={()=>{onPress()}}>
                <Container backgroundColor={backgroundColor}>
                    <ContentContainer>
                        <Text bold 
                        fontSize={useTheme().FontSize.regularHalf}
                        color={useTheme().Colors.textLight}>{title}</Text>
                    </ContentContainer>
                </Container>
            </TouchableOpacity>)
}