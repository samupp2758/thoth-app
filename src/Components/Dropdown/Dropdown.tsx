import React, { useState } from "react";
import { useTheme } from "../../Hooks";
import { Text } from "../Text";
import { Pressable } from "../Button/style";
import { List,DropdownButton,ListContainer,ItemContainer } from "./style";
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
    onChangeText?: (value)=>void,
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
    onChangeText = (value) => {},
    fontSize = useTheme().FontSize.regular,
    fontFamily = useTheme().FontFamily.primary,
    items

}) =>{
    const [text,settext] = useState('')
    const [opened,setopened] = useState(false)
    const [dropdownicon,setdropdownicon] = useState('caretdown')
    const [filtered_list,setfiltered_list] = useState(items)

    const renderItem = ({item}) => {
        const handleonPress = () => {
            handleList();
            settext(item.name);
            onChange(item);
            onChangeText(item.name)
        }
       return(
        <Container id={item.id}>
        <ItemContainer
            borderColor={borderColor}
            backgroundColor={backgroundColor}>
            <Pressable onPress={()=>{handleonPress()}}>
                <Text
                color={color}
                fontSize={fontSize}
                fontFamily={fontFamily}
                >{item.name}</Text>
            </Pressable>
        </ItemContainer>
        </Container>)
    }

    const handleList = () => {
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
    
    const changeText = (value) => {
        onChangeText(value)
        settext(value)
        //Search part
        var neww = items.filter((single)=>{
                return single['name'].includes(value)
        }) 
        setfiltered_list(neww)
    }




            return(
                    <Container 
                    width="100%"
                        backgroundColor={backgroundColor}
                        centerX>
                         <Input
                         type="none"
                         value={text}
                         onChangeText={(value)=>{changeText(value)}}
                         placeholder={placeholder}
                         onFocus={()=>{setdropdownicon('caretup');setopened(true)}}
                         onBlur={()=>{setdropdownicon('caretdown');setopened(false)}}
                     />
                     <DropdownButton>
                     <ButtonedIcon
                                    color={color}
                                    onPress={()=>{handleList()}}
                                    size={20}
                                    family="AntDesign"
                                    name={dropdownicon}/>
                    </DropdownButton>


                    {opened ? 
                    <ListContainer backgroundColor={backgroundColor}>
                         {filtered_list.length == 0 ? 
                         <Container>
                         <ItemContainer
                             borderColor={borderColor}
                             backgroundColor={backgroundColor}>
                             <Pressable onPress={()=>{}}>
                                 <Text
                                 color={color}
                                 fontSize={fontSize}
                                 fontFamily={fontFamily}
                                 >No Result</Text>
                             </Pressable>
                         </ItemContainer>
                         </Container>

                         : filtered_list.map((single)=>{
                            return(
                                renderItem({item:single})
                            )
                         })}
                    </ListContainer> : <></>}
                    </Container>
                )
}

export default Dropdown