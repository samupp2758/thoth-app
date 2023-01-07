import React, { useEffect, useState } from 'react'
import { Container, View } from "../../../../Components/Container"
import {ScrollView} from "../../../../Components/Container/style"
import { Input } from '../../../../Components/Input'
import { Text } from '../../../../Components/Text'
import TopicCard from '../../../../Components/TopicCard'
import TotCard from '../../../../Components/TotCard'
import { useTheme } from '../../../../Hooks'
import { Subjects } from '../../../../Utils/Subjects'
import Header from './Header'

export const Home = ({navigation,props}) => {
    const [searchValue,setSearchValue] = useState('')
    const [recomendedTots,setrecomendedTots] = useState([])
    const [trendingTots,settrendingTots] = useState([])

    useEffect(()=>{
        setrecomendedTots([{
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
        }])

        settrendingTots([{
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
        }])
    },[])

    const trends = () => (
            <Container marginTop={useTheme().Margin.top-10}>
                <Container marginLeft={useTheme().Margin.left}>
                    <Text fontSize={useTheme().FontSize.regular}>Trends</Text>
                </Container>
            
                <Container scroll row marginTop={useTheme().Margin.top-20}>
                    
                        {trendingTots.map((tot,index)=>{
                            return(<TotCard
                                title={tot.title}
                                topic={tot.topic}
                                background={tot.bg}
                                saved={tot.saved}
                                key={tot.key}
                            />)
                        })}
                </Container>
            </Container>)


    const recomendedToYou = () => (
                <Container marginTop={useTheme().Margin.top-10}>
                    <Container marginLeft={useTheme().Margin.left}>
                        <Text fontSize={useTheme().FontSize.regular}>Recomended for you</Text>
                    </Container>
                
                    <Container scroll row marginTop={useTheme().Margin.top-20}>
                        
                            {recomendedTots.map((tot,index)=>{
                                return(<TotCard
                                            title={tot.title}
                                            topic={tot.topic}
                                            background={tot.bg}
                                            saved={tot.saved}
                                            key={tot.key}
                                        />)
                            })}
                    </Container>
                </Container>)

    const subjects = () => (
        <Container marginTop={useTheme().Margin.top-10}>
            <Container marginLeft={useTheme().Margin.left}>
                <Text fontSize={useTheme().FontSize.regular}>Subjects</Text>
            </Container>
        
            <Container scroll row marginTop={useTheme().Margin.top-20}>
                
                    {Subjects.map((topic,index)=>{
                        return(<TopicCard
                                    title={topic.name}
                                    backgroundColor={topic.color}
                                    key={topic.id}
                                />)
                    })}
            </Container>
        </Container>
    )

    return (
        <View scroll>
            <Header navigation={navigation} props={{title:'Explore'}}/> 
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
            
            {recomendedToYou()}

            {subjects()}

            {trends()}
        </View>
    )
}