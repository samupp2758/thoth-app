import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import { useTheme } from '../../../../Hooks'
import Header from '../../Components/Header'
import { ItemBox } from './style'

export default ({route,navigation}) => {
    const [notifications,setnotifications] = useState([])
    const [loading,setloading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setloading(false)
        },1000)

       setnotifications([
            {title:'Good News!',
            body:'Cool Body!',
            time:new Date()},
    
    
            {title:'Good News!',
            body:'Cool Body!',
            time:new Date()},
    
    
            {title:'Good News!',
            body:'Cool Body!',
            time:new Date()},
    
    
            {title:'Good News!',
            body:'Cool Body!',
            time:new Date()},
    
    
            {title:'Good News!',
            body:'Cool Body!',
            time:new Date()},
    
    
            {title:'Good News!',
            body:'Cool Body!',
            time:new Date()}
        ])

    },[])

    const renderItem = (single,index) => {
        return(<Container 
            width='90%'
            key={index}
            marginBottom={useTheme().Margin.bottom-10}>
                <ItemBox>
                    <Text Bodytext 
                    fontSize={useTheme().FontSize.regular}>
                        {single.title}
                    </Text>

                    <Text Bodytext 
                    fontSize={useTheme().FontSize.small}>
                        {single.body}
                    </Text>
                </ItemBox>
        </Container>)
    }

    return(
        <View centerX centerY scroll>
            <Header
            navigation={navigation}
            props={{title:'Notifications',backbutton:true}}/>

            <Container centerX centerY 
            marginTop={useTheme().Margin.top-20}
            marginBottom={useTheme().Margin.bottom+25}>
                {loading?<ActivityIndicator/>
                :
                notifications.map((single,index)=>{
                    return(renderItem(single,index))
                })}
            </Container>


        </View>
    )
}