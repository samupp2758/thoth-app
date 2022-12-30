import React from "react";
import { View } from "react-native";
import { useTheme } from "../../Hooks";
import { Text } from "../Text";
import { Container,InputController, AntDesign_,Entypo_ } from "./style";


export const Input = ({
    placeholder = "",
    color = useTheme().Colors.text,
    placeholderColor = useTheme().Colors.placeHolder,
    backgroundColor = useTheme().Colors.inputBackground,
    borderColor = useTheme().Colors.placeHolder,
    onPress = () => null,
    onChangeText,
    value = "",
    fontSize = useTheme().FontSize.regular,
    fontFamily = useTheme().FontFamily.primary,
    type = "none"

}) =>{
    const keyboardtype = "default"
            return(
                    <Container 
                        backgroundColor={backgroundColor}
                        borderColor={borderColor}>
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

                                    secureTextEntry={type=="password"?true:false}
                                    textContentType={type}
                                    />
                    </Container>
                )
}

export default Input