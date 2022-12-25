import React from 'react';
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import ApplicationNavigator from './Navigators'

const App = () => (
  <>
    <ApplicationNavigator />
  </>
  )


export default App
