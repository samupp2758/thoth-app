import React, { ReactPropTypes } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, RefreshControl, SafeAreaView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { useTheme } from "../../Hooks";
import { ViewContainer,ScrollView, AvoidingView } from "./style"

type Props = {
    children?:React.ReactNode,
    centerX?: boolean,
    centerY?: boolean,
    backgroundColor?:string,
    scroll?:boolean,
    refreshing?:boolean,
    onRefresh?: () => void
}


const View: React.FC<Props> = ({
    children,
    centerX = false,
    centerY = false,
    backgroundColor = useTheme().Colors.textLight,
    scroll = false,
    refreshing = false,
    onRefresh = () => {}
    
}) => {


    return (
        <TouchableWithoutFeedback style={{flex:1}} onPress={()=>Keyboard.dismiss()}>

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
                        refreshControl={onRefresh == (()=>{}) ? <></> :
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                            {children}
                        </ScrollView>
                    </SafeAreaView>
                </ViewContainer>}
            </AvoidingView>
            </TouchableWithoutFeedback>
            )
}

export default View