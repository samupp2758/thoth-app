
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
    
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
}){
    if(bold){
        fontFamily = "PoppinsBold"
    }

    if(large){
        fontSize = theme.FontSize.large
    }
    return (<>
    <Text color={Bodytext ? theme.Colors.text : 
                        primary ? theme.Colors.primary :
                        secoundary ? theme.Colors.placeHolder :
                        disabled ? theme.Colors.borderNotFound : theme.Colors.text}
                bold={bold}
                italic={italic}
                fontFamily={fontFamily}
                fontSize={fontSize} 

                marginTop={marginTop}
                marginLeft={marginLeft}
                marginRight={marginRight}
                marginBottom={marginBottom}> {children}</Text></>)
}