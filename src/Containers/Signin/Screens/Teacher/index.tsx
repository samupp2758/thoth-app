import React from 'react'


import ExplanationRevenue from "./ExplanationRevenue"
import FullName from "./FullName"

const studentScreens = (Stack) => {

    return(
        <Stack.Group>
            <Stack.Screen name="ExplanationRevenue" component={ExplanationRevenue} />
            <Stack.Screen name="FullName" component={FullName} />
        </Stack.Group>
    )
}

export default studentScreens