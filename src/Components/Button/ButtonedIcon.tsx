import React from "react";
import { View } from "react-native";
import { useTheme } from "../../Hooks";
import Icon from "../Icon";
import { Text } from "../Text";
import { Container, Pressable,PressableInline } from "./style";


type Props = {
    backgroundColor?: string,
    onPress?: () => void,
    size?: number,
    color?: string,
    family?: string,
    name?: string
}

export const ButtonedIcon: React.FC<Props> = ({
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