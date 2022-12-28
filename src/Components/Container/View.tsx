import React from "react";
import { SafeAreaView } from "react-native";
import { useTheme } from "../../Hooks";
import { ViewContainer } from "./style"

const View = ({
    children,
    centerX = false,
    centerY = false,
    backgroundColor = useTheme().Colors.textLight
    
}) => {


    return (<ViewContainer 
            centerX={centerX}
            centerY={centerY}
            backgroundColor={backgroundColor}
            >
                <SafeAreaView>
                    {children}
                </SafeAreaView>
            </ViewContainer>)
}

export default View