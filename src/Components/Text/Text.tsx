
import React from 'react';
import { useTheme } from '../../Hooks';
import {
    Text_
} from './style';

const theme = useTheme()

type Props = {
    children?: string | React.ReactNode,
    width?: string,
    fontSize?: number,
    fontFamily?: string,
    bold?: boolean,
    large?: boolean,
    italic?: boolean,

    //colors
    Bodytext?: boolean,
    primary?: boolean,
    secoundary?: boolean,
    disabled?: boolean,
    
    center?: boolean,
    marginTop?: number,
    marginLeft?: number,
    marginRight?: number,
    marginBottom?: number,
    color?: string,
    underlined?: boolean,
    justify?: boolean
}

export const Text: React.FC<Props> = ({
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
    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,
    color = undefined,
    underlined = false,
    justify = false
}) => {
    if(bold){
        fontFamily = "PoppinsBold"
    }

    if(large){
        fontSize = theme.FontSize.large
    }

    if(Bodytext){
        justify = true
    }

    return (<>
    <Text_ color={color ? color : Bodytext ? theme.Colors.text : 
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
                center={center}
                justify={justify}>{children}</Text_></>)
}
