import React from 'react'
import { SettingsButton, SubText } from './style'
import { Container, View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import { useTheme } from '../../../../Hooks'
import Header from '../../Components/Header'
import { Button } from '../../../../Components/Button'

export default function ({ navigation, route }) {

    const deleteAccount = () => {
        navigation.navigate('Login')
    }

    const logout = () => {
        navigation.navigate('Login')
    }

    return (<>
        <View>
            <Header
                navigation={navigation}
                props={{ title: 'Settings', noUserButton: true, backSettingsButton: true, who: route.params.who }} />

            <Container marginTop={useTheme().Margin.top - 20}
                centerX width='100%'>
                <SettingsButton>Dark Theme</SettingsButton>
                <SettingsButton>High Contrast Theme</SettingsButton>
                <SettingsButton noSwitch={true} onPress={() => navigation.navigate('Signin', { screen: 'SubjectInterest' })}>Edit your favorite subjects</SettingsButton>
                <SettingsButton noSwitch={true} onPress={() => { navigation.navigate('TermsOfUse') }}>Terms of Use</SettingsButton>
                <Container marginTop={useTheme().Margin.top-20} centerX>
                    <Button
                        backgroundColor={useTheme().Colors.error}
                        onPress={() => deleteAccount()}>Delete account</Button>
                </Container>
            </Container>
            <Container bottomY centerX flex>
                <Container
                    width='30%'
                    marginBottom={useTheme().Margin.bottom * 2}>
                    <Button
                        backgroundColor={useTheme().Colors.error}
                        onPress={() => logout()}>Log out</Button>
                </Container>
            </Container>
        </View>
    </>
    )
}