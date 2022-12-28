import React from "react";
import { SafeAreaView } from "react-native";
import { useTheme } from "../../Hooks";
import { ContainerBox } from "./style"

const Container = ({
    children,
    centerX = false,
    centerY = false,
    rightX = false,
    bottomY = false,
    row = false,
    flex = false,
    backgroundColor = useTheme().Colors.textLight
    
}) => {


    return (<ContainerBox 
            centerX={centerX}
            centerY={centerY}
            rightX={rightX}
            row={row}
            flex = {flex}
            bottomY={bottomY}
            backgroundColor={backgroundColor}
            >
                {children}
            </ContainerBox>)
}

export default Container