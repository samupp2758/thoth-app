import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import { Container, View } from '../../../../Components/Container'
import { Input } from '../../../../Components/Input'
import TotReducedCard from '../../../../Components/TotReducedCard'

export default function ({ route, navigation }) {
    const [searchValue, setSearchValue] = useState('')
    const [tots, settots] = useState([])
    const [refreshing,setRefresh] = useState(false) 

    const onRefresh = () => {
        setRefresh(true)

        setTimeout(()=>{
            setRefresh(false)
        },2000)
    }


    return (
        <View scroll onRefresh={()=>onRefresh()} refreshing={refreshing}>
            <Container centerX>
                <Container width='90%'>
                    <Input
                        value={searchValue}
                        onChangeText={setSearchValue}
                        searchBar
                        placeholder='Search......'
                        autoFocus
                    />
                </Container>
            </Container>
            <Container>
                {refreshing ? <ActivityIndicator/> : tots.map((tot) => {
                    return (<TotReducedCard
                        title={tot.title}
                        topic={tot.topic}
                        key={tot.id}
                        />)
                })}
            </Container>
        </View>)
}