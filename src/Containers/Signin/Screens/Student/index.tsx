import React from 'react'
import Course from "./Course"

const studentScreens = (Stack) => {

    return(
        <Stack.Group>
            <Stack.Screen name="Course" component={Course} />
        </Stack.Group>
    )
}

export default studentScreens