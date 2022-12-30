import React from "react";
import { View } from "react-native";
import { useTheme } from "../../Hooks";
import { Text } from "../Text";
import { Container, AntDesign_,Entypo_,Pressable,PressableInline } from "./style";


export const Button = ({
    children,
    google = false,
    facebook = false,
    color = '#ffffff',
    backgroundColor = useTheme().Colors.primary,
    inline = false,
    onPress = () => {},
    fontSize = useTheme().FontSize.regular,
    fontFamily = useTheme().FontFamily.primary,
    underlined=false,

    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
}) =>{
        if(google){
            color = '#ffffff'
            backgroundColor = '#DB4437'
        }
        if(facebook){
            color = '#ffffff'
            backgroundColor = '#3B5998'
        }

        if(inline){
            color = useTheme().Colors.primary
        }else{
            underlined = false
        }
            return(
            
                inline ? 
                <PressableInline onPress={()=>onPress()}>
                    <View style={{margin:-1.5,padding:0}}>
                        <Text 
                        color={color} 
                        underlined={underlined}
                        fontSize={fontSize}
                        fontFamily={fontFamily}
                        
                        marginTop={marginTop}
                        marginLeft={marginLeft}
                        marginRight={marginRight}
                        marginBottom={marginBottom}>
                            {children}
                        </Text> 
                    </View>
                </PressableInline>:
                <Pressable onPress={()=>onPress()}>
                    <Container 
                        google={google}
                        backgroundColor={backgroundColor}>
                                {google ?  <AntDesign_ name='google' color={color}/> : <></>}
                                {facebook ?  <Entypo_ name='facebook' color={color}/> : <></>}
                                <Text 
                                color={color}
                                fontSize={fontSize}
                                fontFamily={fontFamily}>
                                    {children}
                                </Text>
                    </Container>
                </Pressable>
                )
}

export default Button