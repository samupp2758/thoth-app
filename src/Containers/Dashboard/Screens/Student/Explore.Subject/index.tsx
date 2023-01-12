import React, { useEffect, useState } from 'react'
import { Container, View } from "../../../../../Components/Container"
import {ScrollView} from "../../../../../Components/Container/style"
import { Input } from '../../../../../Components/Input'
import { Text } from '../../../../../Components/Text'
import TopicCard from '../../../../../Components/TopicCard'
import TotCard from '../../../../../Components/TotCard'
import { useTheme } from '../../../../../Hooks'
import { Subjects } from '../../../../../Utils/Subjects'
import Header from '../../../Components/Header'

export default function ({route,navigation}) {
    const [searchValue,setSearchValue] = useState('')
    const [subTopics,setsubTopics] = useState([])
    const [titleName,settitleName] = useState('') 

    const mockedData = [{
        title:'Sum of Arcs',
        topic:"Mathematics",
        background:'https://adasdasd.com/image.png',
        saved:true,
        key:'2jiocj02dm2n34672'
    },
    {
        title:'Sum of Arcs',
        topic:"Mathematics",
        background:'https://adasdasd.com/image.png',
        saved:true,
        key:'2jioc02dm2n34672'
    }]

    useEffect(()=>{
        setsubTopics(Subjects[route.params.topic.id].subtopics)
        settitleName(route.params.topic.name)
        populateSubtopics()
    },[])

    const populateSubtopics = () => {
        var d = subTopics.map((single,index)=>{
            single['tots'] = mockedData
            return single
        })
        setsubTopics(d)
    }

    const subTopic = (title,tots) => (
            <Container marginTop={useTheme().Margin.top-10}>
                <Container marginLeft={useTheme().Margin.left}>
                    <Text fontSize={useTheme().FontSize.regular}>{title}</Text>
                </Container>
            
                <Container scroll row marginTop={useTheme().Margin.top-20}>
                    
                        {tots.map((tot,index)=>{
                            return(<TotCard
                                title={tot.title}
                                topic={tot.topic}
                                background={tot.background}
                                saved={tot.saved}
                                key={tot.key}
                            />)
                        })}
                </Container>
            </Container>)


    return (
        <View scroll>
            <Header navigation={navigation} props={{backbutton:true,title:titleName,who:'Student'}}/> 
            {
            //Search bar
            }
            <Container centerX>
                <Container marginTop={useTheme().Margin.top-10} width="90%">
                    <Input
                    value={searchValue}
                    onChangeText={setSearchValue}
                    searchBar
                    placeholder='Search......'
                    />
                </Container>
            </Container>

            {subTopics.map((single)=>{
                return(subTopic(single.title,single.tots))
            })}

            <Container marginBottom={80}></Container>
        </View>
    )
}