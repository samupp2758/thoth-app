import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'

import {useTheme} from '../../../../Hooks'
import { Errors } from '../../../../Utils/Codes'
import { Dropdown } from '../../../../Components/Dropdown'
import { Subjects } from '../../../../Utils/Subjects'

const SubjectInterest = ({route,navigation}) => {
    const [disabled,setDisabled] = useState(true)
    const [selected,setSelected] = useState(0)
    const [search,setSearch] = useState('')
    const [items,setItems] = useState(Subjects)

    useEffect(()=>{
        selectItem({id:0,selected:true,name:'Default'})
    },[])

    useEffect(()=>{
        if(selected>=2){
            //Save 
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[selected])

    const next = () => {
        if(selected>=2){
            //Save 
            navigation.navigate('EmailConfirm',{who:'student',step:7})
        }
    }

    const selectItem = (item) => {
        var selected_temp = 0
        setItems(items.map((single,index_)=>{
            if(single.id == item.id){
                single.selected = !single.selected
            }
            if(single.selected){
                selected_temp++
                setSelected(selected_temp)
            }
            return(single)
        }))
    }

    const renderItems = (column) => {
        return(column.map((single)=>{
            return(
            <Container width={'90%'} key={single.id} centerX>
                <Button
                width='100%'
                disabled={!single.selected}
                onPress={()=>{selectItem(single)}}>
                    {single.name}
                </Button>
            </Container>)
        }))
    }
    

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:6}} />
            <View centerX>
                <Container >

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text center>What is your graduation level?</Text>
                    </Container>

                    <Container row centerX centerY>
                        <Container centerX width={'50%'}>
                            {renderItems(items.filter((item,index)=>
                            (index%2)!=0))}
                        </Container>
                        <Container centerX width={'50%'}>
                            {renderItems(items.filter((item,index)=>
                            (index%2)==0))}
                        </Container>
                    </Container>

                    <Container centerX marginTop={useTheme().Margin.bottom-20}>
                        <Text center
                            Bodytext
                            fontSize={useTheme().FontSize.small}>
                                Select at Least 2.</Text>
                        <Button disabled={disabled} onPress={()=>{next()}}>Next</Button>
                    </Container>

                </Container>
            </View>
            
        </View>
    )
}

export default SubjectInterest