import React, { ReactPropTypes } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "../../Hooks";
import { ViewContainer,ScrollView, AvoidingView } from "./style"

type Props = {
    children?:React.ReactNode,
    centerX?: boolean,
    centerY?: boolean,
    backgroundColor?:string,
    scroll?:boolean
}


const View: React.FC<Props> = ({
    children,
    centerX = false,
    centerY = false,
    backgroundColor = useTheme().Colors.textLight,
    scroll = false
    
}) => {


    return (
        <AvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      contentContainerStyle={{flex:1}}
    >
            {!scroll?
            <ViewContainer 
            centerX={centerX}
            centerY={centerY}
            backgroundColor={backgroundColor}
            >
                <SafeAreaView>
                    {children}
                </SafeAreaView>
            </ViewContainer>   
            :
                <ViewContainer 
                centerX={centerX}
                centerY={centerY}
                backgroundColor={backgroundColor}
                >
                    <SafeAreaView>
                        <ScrollView
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                            {children}
                        </ScrollView>
                    </SafeAreaView>
                </ViewContainer>}
            </AvoidingView>
            )
}

export default View