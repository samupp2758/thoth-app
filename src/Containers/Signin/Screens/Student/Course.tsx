import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'

import {useTheme} from '../../../../Hooks'
import { Errors } from '../../../../Utils/Codes'
import { Dropdown } from '../../../../Components/Dropdown'
import { GraduationLevels } from '../../../../Utils/GraduationLevels'

const Course = ({route,navigation}) => {
    const [selected,setSelected] = useState({})
    const [disabled,setDisabled] = useState(true)
    const [search,setSearch] = useState('')
    const items = GraduationLevels


    useEffect(()=>{
        if(selected['name'] == search){
            //Save 
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[search])

    const next = () => {
        if(selected['name'] == search){
            //Save 
            navigation.navigate('SubjectInterest')
        }
    }
    

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:5}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text center>What is your graduation level?</Text>
                    </Container>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20} width={'90%'}>
                        <Dropdown
                            placeholder={'Select your graduation level:'}
                            items={items}
                            onChange={(value)=>setSelected(value)}
                            onChangeText={(value)=>setSearch(value)}
                        />
                        <Button width='100%' disabled={disabled} onPress={()=>{next()}}>Next</Button>
                    </Container>

                </Container>
            </View>
            
        </View>
    )
}

export default Course