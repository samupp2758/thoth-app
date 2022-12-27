import React from "react";
import { SafeAreaView } from "react-native";
import { ContainerBox } from "./style"

const Container = ({
    children,
    centerX = false,
    centerY = false,
    rightX = false,
    row = false 
    
}) => {


    return (<ContainerBox 
            centerX={centerX}
            centerY={centerY}
            rightX={rightX}
            row={row}
            >
                {children}
            </ContainerBox>)
}

export default Container