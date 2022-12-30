import React from "react";
import { SafeAreaView } from "react-native";
import { useTheme } from "../../Hooks";
import { ViewContainer,ScrollView } from "./style"

const View = ({
    children,
    centerX = false,
    centerY = false,
    backgroundColor = useTheme().Colors.textLight,
    scroll = false
    
}) => {


    return (
            !scroll?
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
                                <ScrollView>
                                    {children}
                                </ScrollView>
                            </SafeAreaView>
                        </ViewContainer>
            
            
            
            )
}

export default View