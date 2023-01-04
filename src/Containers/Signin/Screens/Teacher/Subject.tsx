import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'
import { Dropdown } from '../../../../Components/Dropdown'

import {useTheme} from '../../../../Hooks'
import { Subjects } from '../../../../Utils/Subjects'


const Subject = ({route,navigation}) => {
    const [selected,setSelected] = useState({})
    const [disabled,setDisabled] = useState(true)
    const [search,setSearch] = useState('')
    const items = Subjects


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
            navigation.navigate('Documents')
        }
    }
    

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:9}} />
            <View centerX centerY>
                <Container centerX>

                    <Container centerX marginBottom={useTheme().Margin.bottom-20}>
                        <Text center>You will teach....</Text>
                    </Container>
                    
                    <Container centerX width='90%'>
                        <Dropdown
                            placeholder={'Select the subject you will teach'}
                            items={items}
                            onChange={(value)=>setSelected(value)}
                            onChangeText={(value)=>setSearch(value)}
                        />

                        <Button width="100%" disabled={disabled} onPress={()=>{next()}}>Next</Button>
                    </Container>
                </Container>
            </View>
            <Container>
                <Text center
                    Bodytext
                    fontSize={useTheme().FontSize.small}>Caution: we will request your diploma{'\n'}
                    in the following steps, in order to validate your{'\n'}
                    proficiency in the chosen subject.</Text>
                    
            </Container>
            
        </View>
    )
}

export default Subject