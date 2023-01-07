import React from 'react'
import { Home } from './Home'
import Saved from './Saved'

export default function (Stack){
    const Who = 'Student'
    return(
        <Stack.Group>
            <Stack.Screen name={Who+'.Home'} component={Home}/>
            <Stack.Screen name={Who+'.Saved'} component={Saved}/>
        </Stack.Group>
    )
}