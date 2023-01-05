import React from 'react'
import Course from "./Course"
import SubjectInterest from "./SubjectInterest"
import SuccessPage from "./SuccessPage"

const studentScreens = (Stack) => {

    return(
        <Stack.Group>
            <Stack.Screen name="Course" component={Course} />
            <Stack.Screen name="SubjectInterest" component={SubjectInterest} />
            <Stack.Screen name="SuccessPage" component={SuccessPage} />
        </Stack.Group>
    )
}

export default studentScreens