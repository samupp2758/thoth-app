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
    backgroundColor = useTheme().Colors.textLight,
    width,

    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    
}) => {


    return (<ContainerBox 
            centerX={centerX}
            centerY={centerY}
            rightX={rightX}
            row={row}
            flex = {flex}
            bottomY={bottomY}
            backgroundColor={backgroundColor}
            width={width}

            
            marginTop={marginTop}
            marginLeft={marginLeft}
            marginRight={marginRight}
            marginBottom={marginBottom}>
                {children}
            </ContainerBox>)
}

export default Container