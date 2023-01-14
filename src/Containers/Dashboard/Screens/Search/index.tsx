import React, { useState } from 'react'
import styled from 'styled-components'
import { Container, View } from '../../../../Components/Container'
import { Input } from '../../../../Components/Input'

export default function ({ route, navigation }) {
    const [searchValue, setSearchValue] = useState('')

    return (
        <View scroll>
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
        </View>)
}