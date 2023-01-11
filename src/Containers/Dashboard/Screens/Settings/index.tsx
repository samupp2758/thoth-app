import React, { useEffect, useState } from 'react'
import { Button } from '../../../../Components/Button'
import { Container, View } from '../../../../Components/Container'
import { Input } from '../../../../Components/Input'
import { Text } from '../../../../Components/Text'
import { useTheme } from '../../../../Hooks'
import Header from '../../Components/Header'
import { UserPhoto } from './style'

export default ({route,navigation}) => {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [graduation,setgraduation] = useState('')
    const [disabled,setdisabled] = useState(true)
    const [textButton,settextButton] = useState('Edit')

    useEffect(()=>{
        setname('Student Thoth')
        setemail('student@thoth.com')
        setgraduation('Undergraduate - Freshman')
    },[])

    const edit = () => {
        setdisabled(false)
        settextButton('Save')
    }

    const save = () => {
        setdisabled(true)
        settextButton('Edit')
    }

    return(
        <View centerX centerY scroll>

            <Container centerX centerY marginTop={useTheme().Margin.top*2}>
                <UserPhoto source={require('../../../../Assets/Images/Logo/4x.png')}/>
            </Container>

        <Container centerX>
            <Container width='90%' centerY marginTop={useTheme().Margin.top}>
                <Container marginBottom={useTheme().Margin.bottom-20}>
                    <Text Bodytext fontSize={useTheme().FontSize.regular}>Name:</Text>
                </Container>               
                <Input
                    value={name}
                    onChangeText={setname}
                    disabled={disabled}
                    noborder
                    />
            </Container>


            <Container width='90%' centerY marginTop={useTheme().Margin.top}>
                <Container marginBottom={useTheme().Margin.bottom-20}>
                    <Text Bodytext fontSize={useTheme().FontSize.regular}>Email:</Text>
                </Container>
                <Input
                    value={email}
                    onChangeText={setemail}
                    disabled={disabled}
                    noborder
                    />
            </Container>


            <Container width='90%' centerY marginTop={useTheme().Margin.top}>
                <Container marginBottom={useTheme().Margin.bottom-20}>
                    <Text Bodytext fontSize={useTheme().FontSize.regular}>Your Graduation Level:</Text>
                </Container>
                <Input
                    value={graduation}
                    onChangeText={setgraduation}
                    disabled={disabled}
                    noborder
                    />
            </Container>

            <Container rightX centerY width='90%' marginTop={useTheme().Margin.top}>
                <Container rightX width='30%'>
                    <Button onPress={()=>textButton == 'Save' ? save() : edit()}>{textButton}</Button>
                </Container>
            </Container>
        </Container>
        </View>
    )
}