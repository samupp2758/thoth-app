import React, { useState } from "react";
import { View } from "react-native";
import { useTheme } from "../../Hooks";
import { ButtonedIcon } from "../Button";
import Icon from "../Icon";
import { Text } from "../Text";
import { Container, InputController } from "./style";

import { formatWithMask, Masks } from 'react-native-mask-input';

type Props = {
    placeholder?: string,
    color?: string,
    placeholderColor?: string,
    backgroundColor?: string,
    borderColor?: string,
    onPress?: () => void,
    onChangeText?: (value) => void,
    onFocus?: () => void,
    onBlur?: () => void,
    value?: string,
    fontSize?: string,
    fontFamily?: string,
    type?: string,
    mask?: string,
    searchBar?: boolean,
    disabled?: boolean,
    noborder?: boolean,
    autoFocus?:boolean,
    ref?:React.ReactNode
}

export const Input: React.FC<Props> = ({
    placeholder = "",
    color = useTheme().Colors.text,
    placeholderColor = useTheme().Colors.placeHolder,
    backgroundColor = useTheme().Colors.inputBackground,
    borderColor = useTheme().Colors.placeHolder,
    onPress = () => null,
    onChangeText = (value) => { },
    onFocus = () => { },
    onBlur = () => { },
    value = "",
    mask,
    fontSize = useTheme().FontSize.regular,
    fontFamily = useTheme().FontFamily.primary,
    type = "none",
    searchBar = false,
    disabled = false,
    noborder,
    autoFocus,
    ref

}) => {
    const [eyename, seteyename] = useState('eye')
    const keyboardtype = type == 'number' ? 'numeric' : "default"
    const [hideText, sethideText] = useState(type == 'password' ? true : false)
    const capitalize = type == 'name' ? 'words' : 'none'



    const passwordShow = () => {
        if (eyename == 'eye') {
            seteyename('eye-with-line')
            sethideText(false)
        } else {
            seteyename('eye')
            sethideText(true)
        }
    }

    const change = (value) => {
        var finalValue = ""
        if (type == 'number') {
            finalValue = value.replace(/[^\d.-]/g, '')
        } else {
            finalValue = value
        }

        finalValue = maskit(finalValue)
        onChangeText(finalValue)
    }

    const maskit = (value) => {
        var response = value
        if (mask) {

            const { masked, unmasked, obfuscated } = formatWithMask({
                text: value,
                mask: mask == "BRL_CPF" ? Masks.BRL_CPF :
                    "DATE_DDMMYYYY" ? Masks.DATE_DDMMYYYY : [],
            });

            response = masked
        }
        return response

    }
    return (
        <Container
            backgroundColor={backgroundColor}
            borderColor={noborder ? "#00000000" : searchBar ? backgroundColor : borderColor}
            centerX
            searchBar={searchBar}>
            {searchBar ?
                <Icon family="FontAwesome"
                    name="search"
                    size={useTheme().FontSize.regularHalf}
                    color={useTheme().Colors.placeHolder} /> : <></>}
            <InputController
                marginLeft={useTheme().Margin.left - 10}

                color={color}
                selectionColor={color}
                fontSize={fontSize}
                fontFamily={fontFamily}
                placeholderTextColor={placeholderColor}

                onChangeText={(value) => change(value)}
                onFocus={() => onFocus()}
                onBlur={() => onBlur()}
                editable={!disabled}

                value={value}
                placeholder={placeholder}
                keyboardType={keyboardtype}

                autoCapitalize={capitalize}
                secureTextEntry={hideText}
                textContentType={type}

                autoFocus={autoFocus}
                ref={ref}                
            />
            {type == "password" ?
                <ButtonedIcon
                    color={color} onPress={() => passwordShow()} size={20} family="Entypo" name={eyename} /> : <></>}
        </Container>
    )
}

export default Input