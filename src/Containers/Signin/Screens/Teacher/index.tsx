import React from 'react'


import ExplanationRevenue from "./ExplanationRevenue"
import FullName from "./FullName"
import NationalID from "./NationalID"
import BirthDate from "./BirthDate"

const studentScreens = (Stack) => {

    return(
        <Stack.Group>
            <Stack.Screen name="ExplanationRevenue" component={ExplanationRevenue} />
            <Stack.Screen name="FullName" component={FullName} />
            <Stack.Screen name="NationalID" component={NationalID} />
            <Stack.Screen name="BirthDate" component={BirthDate} />
        </Stack.Group>
    )
}

export default studentScreens