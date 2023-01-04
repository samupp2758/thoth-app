import React from 'react'


import ExplanationRevenue from "./ExplanationRevenue"
import FullName from "./FullName"
import NationalID from "./NationalID"
import BirthDate from "./BirthDate"
import Subject from "./Subject"
import Documents from "./Documents"
import OverviewData from "./OverviewData"
import PendingProfile from "./PendingProfile"

const studentScreens = (Stack) => {

    return(
        <Stack.Group>
            <Stack.Screen name="ExplanationRevenue" component={ExplanationRevenue} />
            <Stack.Screen name="FullName" component={FullName} />
            <Stack.Screen name="NationalID" component={NationalID} />
            <Stack.Screen name="BirthDate" component={BirthDate} />
            <Stack.Screen name="Subject" component={Subject} />
            <Stack.Screen name="Documents" component={Documents} />
            <Stack.Screen name="OverviewData" component={OverviewData} />
            <Stack.Screen name="PendingProfile" component={PendingProfile} />
        </Stack.Group>
    )
}

export default studentScreens