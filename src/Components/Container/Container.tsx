import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { useTheme } from "../../Hooks";
import { ContainerBox, ScrollView } from "./style"

type Props = {
    children?: React.ReactNode,
    centerX?: boolean,
    centerY?: boolean,
    rightX?: boolean,
    bottomY?: boolean,
    row?: boolean,
    flex?: boolean,
    backgroundColor?: string,
    width?: string,

    marginTop?: number,
    marginLeft?: number,
    marginRight?: number,
    marginBottom?: number,
    scroll?:boolean
}



const Container: React.FC<Props> = ({
    children,
    centerX= false,
    centerY= false,
    rightX= false,
    bottomY = false,
    row= false,
    flex= false,
    backgroundColor= useTheme().Colors.textLight,
    width,
    scroll,

    marginTop= 0,
    marginLeft= 0,
    marginRight= 0,
    marginBottom= 0}) => {


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
                {scroll ? <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingRight:20}} horizontal={true}>{children}</ScrollView> : children}
            </ContainerBox>)
}

export default Container