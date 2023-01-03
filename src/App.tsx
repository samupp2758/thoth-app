import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import MainNavigator from './Navigators'


const App = () => (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <MainNavigator/>
    </GestureHandlerRootView>
)

export default App
