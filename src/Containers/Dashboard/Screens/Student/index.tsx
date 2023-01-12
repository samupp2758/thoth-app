import React from 'react'
import ExploreSubject from './Explore.Subject'
import { Home } from './Home'
import Saved from './Saved'
import User from './User'

export default function (Stack){
    const Who = 'Student'
    return(
        <Stack.Group>
            <Stack.Screen name={Who+'.Home'} component={Home}/>
            <Stack.Screen name={Who+'.Saved'} component={Saved}/>
            <Stack.Screen name={Who+'.User'} component={User}/>
            
            <Stack.Screen name={Who+'.Explore.Subject'} component={ExploreSubject}/>
        </Stack.Group>
    )
}