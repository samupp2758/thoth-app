import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonProps } from '../../../../Components/Button/Button'
import { TextProps } from '../../../../Components/Text/Text'
import { Text } from '../../../../Components/Text'
import { useTheme } from '../../../../Hooks'
import Icon from '../../../../Components/Icon'
import { Switch } from 'react-native'
import { Pressable } from '../../../../Components/Button/style'
import { Container } from '../../../../Components/Container'

const Box = styled.View`
    backgroundColor:${useTheme().Colors.inputBackground};

    padding:12px;
    borderRadius: 10px;
    alignItems:center;

    marginTop:20px;
    flexDirection: row;
`

const Span = styled.View` 
    paddingLeft:${useTheme().Margin.left - 10}px;
    paddingTop:${useTheme().Margin.left - 20}px;
`

const Toggle = styled.View`
    position:absolute;
    top:10px;
    right:10px;
`

export const SubText: React.FC<TextProps> = ({ ...props }) => {
    return (
        <Span>
            <Text
                fontSize={useTheme().FontSize.small}
                Bodytext>{props.children}</Text></Span>)
}


export const SettingsButton: React.FC<ButtonProps> = ({ ...props }) => {
    const [isEnabled, setisEnabled] = useState(true)

    const logic = () => {
        return(<Box>
            <Text
                fontSize={useTheme().FontSize.regular}
                Bodytext>{props.children}</Text>
            {!props['noSwitch'] ?
                <Toggle>
                    <Switch
                        trackColor={{
                            false: useTheme().Colors.text,
                            true: useTheme().Colors.primary
                        }}
                        thumbColor={useTheme().Colors.inputBackground}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={setisEnabled}
                        value={isEnabled}
                    />
                </Toggle> : <></>}
        </Box>)
    }

    return (
        <Container centerX width='100%'>
            <Container width='90%'>
                {!props.onPress ? 
                <>{logic()}</>:
                <Pressable onPress={()=>props.onPress()}>{logic()}</Pressable>}
            </Container>
        </Container>)
}