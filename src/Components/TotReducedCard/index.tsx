import React, { useState } from 'react'
import { useTheme } from '../../Hooks'
import { ButtonedIcon } from '../Button'
import Icon from '../Icon'
import { Text } from '../Text'
import { Container,
    Box,
    ContentContainer } from "./style"

type Props = {
    title?:string,
    background?:string,
    topic?:string,
    key?:string
}

export default ({
    title = "",
    background = "",
    saved = false,
    topic = true
}) => {


    return(<Container>
                <ContentContainer>
                    <Text bold 
                    fontSize={useTheme().FontSize.regularHalf}
                    color={useTheme().Colors.textLight}>{title}</Text>
                    <Text
                    fontSize={useTheme().FontSize.regular}
                    color={useTheme().Colors.textLight}>{topic}</Text>
                </ContentContainer>
            </Container>)
}