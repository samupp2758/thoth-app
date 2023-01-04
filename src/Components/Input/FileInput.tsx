import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { useTheme } from "../../Hooks";
import Icon from "../Icon";
import { Text } from "../Text";
import { Container,icon,Pressable,PressableInline } from "../Button/style";

import DocumentPicker, { types } from 'react-native-document-picker';


type Props = {
    children?: string,
    color?: string,
    backgroundColor?: string,
    borderColor?: string,
    onPress?: ()=>void,
    onSelect?: (value)=>void,
    fontSize?: number,
    fontFamily?: string,
    width?:string,
    fileName?:string,
    placeholder?:string,
    multipleFiles?:boolean
}

export const FileInput: React.FC<Props> = ({
    placeholder = "",
    color = useTheme().Colors.primary,
    backgroundColor = useTheme().Colors.primaryHighLighted,
    borderColor = useTheme().Colors.primary,
    onPress = () => {},
    onSelect = (value) => {},
    fontSize = useTheme().FontSize.regular,
    fontFamily = useTheme().FontFamily.primary,
    width = "90%",
    multipleFiles = false,
}) =>{
    const [result,setresult] = useState([])

    const textShow = () => {
        var result_string = placeholder
        if(result.length != 0){
            if(!multipleFiles){
                result_string = result[0].name
            }
        }
        return result_string
    }


    const handleDocumentSelection = useCallback(async () => {
        try {
          var response = await DocumentPicker.pick({
            presentationStyle: 'fullScreen',
            allowMultiSelection:multipleFiles,
            type:[types.pdf,types.images]
          })

          setresult(response)
          onSelect(response)
        } catch (err) {
        }
      }, []);


    return(
                <Pressable width={width} onPress={()=>handleDocumentSelection()}>
                    <Container 
                        backgroundColor={backgroundColor}
                        borderColor={borderColor}
                        borderStylee={"dashed"}>
                                <Text 
                                color={color}
                                fontSize={fontSize}
                                fontFamily={fontFamily}>
                                    {textShow()}
                                </Text>
                    </Container>
                </Pressable>
                )
}

export default FileInput