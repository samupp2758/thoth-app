import React, { useState } from "react";
import { useTheme } from "../../Hooks";
import { Text } from "../Text";
import { Pressable } from "../Button/style";
import { List,DropdownButton,ListContainer } from "./style";
import { Container } from "../Container";
import { Input } from "../Input";
import { ButtonedIcon } from "../Button";

type Props = {
    placeholder?:string,
    color?:string,
    placeholderColor?: string,
    backgroundColor?: string,
    borderColor?: string,
    onPress?: () => void,
    onChange?: (value)=>void,
    value?: string,
    fontSize?:number,
    fontFamily?:string,
    type?:string,
    mask?:string,
    items?:Array<object>
}

export const Dropdown: React.FC<Props> = ({
    placeholder = "",
    color = useTheme().Colors.text,
    placeholderColor = useTheme().Colors.placeHolder,
    backgroundColor = useTheme().Colors.inputBackground,
    borderColor = useTheme().Colors.placeHolder,
    onPress = () => null,
    onChange = (value) => {},
    fontSize = useTheme().FontSize.regular,
    fontFamily = useTheme().FontFamily.primary,
    items

}) =>{
    const [text,settext] = useState('')
    const [opened,setopened] = useState(false)
    const [dropdownicon,setdropdownicon] = useState('caretdown')

    const renderItem = ({item}) => {
       return(
        <Pressable>
            <Text
            color={color}
            fontSize={fontSize}
            fontFamily={fontFamily}
            >{item.name}</Text>
        </Pressable>)
    }

    const openList = () => {
        var result = 'caretup'
        var result_ = false
        if(dropdownicon == result){
            result = 'caretdown'
            result_ = false
        }else{
            result_ = true
        }
        setdropdownicon(result)
        setopened(result_)
    }
            return(
                    <Container 
                    width="100%"
                        backgroundColor={backgroundColor}
                        centerX>
                         <Input
                         type="number"
                         value={text}
                         onChangeText={settext}
                         placeholder={placeholder}
                     />
                     <DropdownButton>
                     <ButtonedIcon
                                    color={color} onPress={()=>{openList()}} size={20} family="AntDesign" name={dropdownicon}/>
                    </DropdownButton>


                    {opened ? 
                    <ListContainer>
                         <List
                             data={items}
                             renderItem={renderItem}
                             keyExtractor={item => item.id}
                         /> 
                    </ListContainer> : <></>}
                    </Container>
                )
}

export default Dropdown