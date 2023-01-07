import React from 'react'
import { Home } from './Home'

export default function (Stack){
    const Who = 'Student'
    return(
        <Stack.Group>
            <Stack.Screen name={Who+'.Home'} component={Home}/>
        </Stack.Group>
    )
}