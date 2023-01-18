import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import { ButtonedIcon } from '../../../../Components/Button'
import { Container, View } from '../../../../Components/Container'
import { Input } from '../../../../Components/Input'
import TotReducedCard from '../../../../Components/TotReducedCard'

import { useTheme } from '../../../../Hooks'

export default function ({ route, navigation }) {
    const [searchValue, setSearchValue] = useState('')
    const [tots, settots] = useState([])
    const [refreshing,setRefresh] = useState(false) 


    const mockedData = [{
        title:'Sum of Arcs',
        topic:"Mathematics",
        background:'https://adasdasd.com/image.png',
        saved:true,
        key:'2jiocj02dm2n34672'
    },
    {
        title:'Sum of Arcs',
        topic:"Mathematics",
        background:'https://adasdasd.com/image.png',
        saved:false,
        key:'2jioc02dm2n34672'
    }]

    const onRefresh = () => {
        setRefresh(true)

        setTimeout(()=>{
            setRefresh(false)
        },2000)
    }

    const search = (value) => {
        setSearchValue(value)
        setRefresh(true)

        settots(mockedData)

        setTimeout(()=>{
            setRefresh(false)
        },2000)
    }

    const onBlurSearch = () => {
        //setsearching(false)
    }

    return (
        <View scroll onRefresh={()=>onRefresh()} refreshing={refreshing}>
            <Container centerX>
                <Container  row centerX width='100%'>
                    <Container width='10%' centerX centerY>
                        <ButtonedIcon name='left' onPress={()=>navigation.goBack()} color={useTheme().Colors.primary}/>
                    </Container>
                    <Container width='85%'>
                        <Input
                            value={searchValue}
                            onChangeText={search}
                            searchBar
                            placeholder='Search......'
                            onBlur={()=>{onBlurSearch()}}
                            autoFocus
                        />
                    </Container>
                </Container>
            </Container>
            <Container width='100%' centerX centerY>
                {refreshing ? <></>: tots.map((tot) => {
                    return (<TotReducedCard
                        title={tot.title}
                        topic={tot.topic}
                        key={tot.id}
                        />)
                })}
            </Container>
        </View>)
}