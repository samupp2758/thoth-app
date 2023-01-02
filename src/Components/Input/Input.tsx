import React, { useState } from "react";
import { View } from "react-native";
import { useTheme } from "../../Hooks";
import { ButtonedIcon } from "../Button";
import Icon from "../Icon";
import { Text } from "../Text";
import { Container,InputController, AntDesign_,Entypo_ } from "./style";

type Props = {
    placeholder?:string,
    color?:string,
    placeholderColor?: string,
    backgroundColor?: string,
    borderColor?: string,
    onPress?: () => void,
    onChangeText?: (value)=>void,
    value?: string,
    fontSize?:string,
    fontFamily?:string,
    type?:string
}

export const Input: React.FC<Props> = ({
    placeholder = "",
    color = useTheme().Colors.text,
    placeholderColor = useTheme().Colors.placeHolder,
    backgroundColor = useTheme().Colors.inputBackground,
    borderColor = useTheme().Colors.placeHolder,
    onPress = () => null,
    onChangeText = (value) => {},
    value = "",
    fontSize = useTheme().FontSize.regular,
    fontFamily = useTheme().FontFamily.primary,
    type = "none"

}) =>{
    const [eyename,seteyename] = useState('eye')
    const keyboardtype = "default"
    const [hideText,sethideText] = useState(type == 'password' ? true : false)
    const capitalize = type == 'name' ? 'words' : 'none'


    const passwordShow = () => {
        if(eyename == 'eye'){
            seteyename('eye-with-line')
            sethideText(false)
        }else{
            seteyename('eye')
            sethideText(true)
        }
    }
            return(
                    <Container 
                        backgroundColor={backgroundColor}
                        borderColor={borderColor}
                        centerX>
                                <InputController
                                    marginLeft={useTheme().Margin.left-10}
                                    
                                    color={color}
                                    selectionColor={color}
                                    fontSize={fontSize}
                                    fontFamily={fontFamily}

                                    placeholderTextColor={placeholderColor}

                                    onChangeText={onChangeText}
                                    value={value}
                                    placeholder={placeholder}
                                    keyboardType={keyboardtype}

                                    autoCapitalize = {capitalize}
                                    secureTextEntry={hideText}
                                    textContentType={type}
                                    />
                                    {type == "password" ? 
                                    <ButtonedIcon
                                    color={color} onPress={()=>passwordShow()}size={20} family="Entypo" name={eyename}/>:<></>}
                    </Container>
                )
}

export default Input