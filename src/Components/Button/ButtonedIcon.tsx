import React from "react";
import { View } from "react-native";
import { useTheme } from "../../Hooks";
import Icon from "../Icon";
import { Text } from "../Text";
import { Container, Pressable,PressableInline } from "./style";


export const ButtonedIcon = ({
    backgroundColor = useTheme().Colors.primary,
    onPress = () => {},
    size = 30,
    color = '#000000',
    family = "AntDesign",
    name = "infocirlce"
}) =>{
            return(
                <PressableInline onPress={()=>onPress()}>
                    <View>
                        <Icon 
                        family={family}
                        name={name}
                        size={size}
                        color={color}/>
                    </View>
                </PressableInline>
                )
}

export default ButtonedIcon