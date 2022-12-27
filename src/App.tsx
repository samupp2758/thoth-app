import React from 'react';
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { useFonts } from 'expo-font';
import MainNavigator from './Navigators'


const App = () => (
    <PaperProvider>
        <MainNavigator/>
    </PaperProvider>
)

export default App
