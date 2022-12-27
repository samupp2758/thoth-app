import React from "react";
import { SafeAreaView } from "react-native";
import { ViewContainer } from "./style"

const View = ({
    children,
    centerX = false,
    centerY = false,
    
}) => {


    return (<ViewContainer 
            centerX={centerX}
            centerY={centerY}
            >
                <SafeAreaView>
                    {children}
                </SafeAreaView>
            </ViewContainer>)
}

export default View