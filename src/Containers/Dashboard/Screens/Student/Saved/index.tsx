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

export default function ({navigation,props}) {
    const [searchValue,setSearchValue] = useState('')
    const [historyTots,sethistoryTots] = useState([])
    const [savedTots,setsavedTots] = useState([])

    useEffect(()=>{
        sethistoryTots([{
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

        setsavedTots([{
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

    const history = () => (
            <Container marginTop={useTheme().Margin.top-10}>
                <Container marginLeft={useTheme().Margin.left}>
                    <Text fontSize={useTheme().FontSize.regular}>History</Text>
                </Container>
            
                <Container scroll row marginTop={useTheme().Margin.top-20}>
                    
                        {historyTots.map((tot,index)=>{
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


    const saved = () => (
                <Container marginTop={useTheme().Margin.top-10}>
                    <Container marginLeft={useTheme().Margin.left}>
                        <Text fontSize={useTheme().FontSize.regular}>Saved Tots</Text>
                    </Container>
                
                    <Container scroll row marginTop={useTheme().Margin.top-20}>
                        
                            {savedTots.map((tot,index)=>{
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

    return (
        <View scroll>
            <Header navigation={navigation} props={{backbutton:true,title:'Saved'}}/> 
            {
            //Search bar
            }
            <Container centerX>
                <Container marginTop={useTheme().Margin.top-10} width="90%">
                    <Input
                    value={searchValue}
                    onChangeText={setSearchValue}
                    searchBar
                    placeholder='Saved.....'
                    />
                </Container>
            </Container>

            {saved()}

            {history()}
        </View>
    )
}