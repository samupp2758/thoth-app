import React from "react";
import { View } from "react-native";
import { useTheme } from "../../Hooks";
import Icon from "../Icon";
import { Text } from "../Text";
import ButtonedIcon from "./ButtonedIcon";
import { Container,icon,Pressable,PressableInline } from "./style";

type Props = {
    children?: string,
    google?: boolean,
    facebook?: boolean,
    color?: string,
    backgroundColor?: string,
    inline?: boolean,
    onPress?: ()=>void,
    fontSize?: number,
    fontFamily?: string,
    underlined?: boolean,
    disabled?: boolean,

    marginTop?: number,
    marginLeft?: number,
    marginRight?: number,
    marginBottom?: number,
    width:string,

    // ButtonedIcon
    name?: string,
    buttonedicon?: boolean
}

export const Button: React.FC<Props> = ({
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
    disabled = false,
    width = "90%",

    marginTop = 0,
    marginLeft = 0,
    marginRight = 0,
    marginBottom = 0,

    // ButtonedIcon
    name = "",
    buttonedicon=false,
}) =>{
        if(google){
            color = '#ffffff'
            backgroundColor = '#DB4437'
        }
        if(facebook){
            color = '#ffffff'
            backgroundColor = '#3B5998'
        }

        if(disabled){
            color = useTheme().Colors.primary
            backgroundColor = useTheme().Colors.primaryHighLighted
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
                <Pressable width={width} onPress={()=>onPress()}>
                    <Container 
                        google={google}
                        backgroundColor={backgroundColor}>
                                {google ?  <Icon style={icon} family='AntDesign' name='google' color={color}/> : <></>}
                                {facebook ?  <Icon style={icon} family='Entypo' name='facebook' color={color}/> : <></>}
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