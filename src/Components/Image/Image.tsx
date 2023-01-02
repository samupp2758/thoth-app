import React from "react";
import { useTheme } from "../../Hooks";
import { ImageView } from "./style";

type Props = {
    size?: number,
    source?: string,    
    maxWidth?: string,
    height?: string
}

export const Image: React.FC<Props> = ({
    size = 1,
    source = "",    
    maxWidth,
    height
}) =>{
        if(typeof source == "string"){
            source = useTheme().Images[source][size-1]
        }

                return(<ImageView 
                        height={height}
                        maxWidth={maxWidth}
                        source={source}/>)
}

export default Image