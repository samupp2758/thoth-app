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
    backgroundColor?:string,
    saved?:boolean,
    topic?:string,
    key?:string
}

export default ({
    title = "",
    backgroundColor = "#000",
    saved = false,
    topic = true
}) => {

    const save = () => {
    }

    return(<Container backgroundColor={backgroundColor}>
                <ContentContainer>
                    <Text bold 
                    fontSize={useTheme().FontSize.regularHalf}
                    color={useTheme().Colors.textLight}>{title}</Text>
                </ContentContainer>
            </Container>)
}