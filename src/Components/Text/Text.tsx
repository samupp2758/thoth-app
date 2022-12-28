
import React from 'react';
import { useTheme } from '../../Hooks';
import {
    Text
} from './style';

const theme = useTheme()

export default function ({
    children,
    width = '100%',
    fontSize = theme.FontSize.regularHalf,
    fontFamily = theme.FontFamily.primary,
    bold = false,
    large = false,
    italic = false,

    //colors
    Bodytext = false,
    primary = true,
    secoundary = false,
    disabled = false,
    
    center = false,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    color,
    underlined = false
}){
    if(bold){
        fontFamily = "PoppinsBold"
    }

    if(large){
        fontSize = theme.FontSize.large
    }

    if(Bodytext){
        fontSize = theme.FontSize.small
    }
    return (<>
    <Text color={color ? color : Bodytext ? theme.Colors.text : 
                        primary ? theme.Colors.primary :
                        secoundary ? theme.Colors.placeHolder :
                        disabled ? theme.Colors.borderNotFound : theme.Colors.text}
                bold={bold}
                italic={italic}
                fontFamily={fontFamily}
                fontSize={fontSize} 
                underlined={underlined}
                marginTop={marginTop}
                marginLeft={marginLeft}
                marginRight={marginRight}
                marginBottom={marginBottom}
                center={center}> {children}</Text></>)
}
