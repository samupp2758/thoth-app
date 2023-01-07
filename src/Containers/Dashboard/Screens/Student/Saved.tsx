import React from 'react'
import { View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'

export default ({route,navigation}) => {
    return(
        <View centerX centerY>
            <Text>{route.params.who}.Saved</Text>
        </View>
    )
}