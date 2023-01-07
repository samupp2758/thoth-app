import React, { useEffect, useState } from 'react'
import {  } from 'react-native'
import { Container, View } from "../../../../Components/Container"
import {ScrollView} from "../../../../Components/Container/style"
import { Input } from '../../../../Components/Input'
import { Text } from '../../../../Components/Text'
import TotCard from '../../../../Components/TotCard'
import { useTheme } from '../../../../Hooks'
import Header from './Header'

export const Home = ({navigation,props}) => {
    const [searchValue,setSearchValue] = useState('')
    const [recomendedTots,setrecomendedTots] = useState([])

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
    },[])
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
            {
            //Recomended to you
            }
            <Container marginTop={useTheme().Margin.top-10}>
                <Container marginLeft={useTheme().Margin.left}>
                    <Text fontSize={useTheme().FontSize.regular}>Recomended for you</Text>
                </Container>
            
                <Container scroll row marginTop={useTheme().Margin.top-10}>
                    
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
            </Container>
        </View>
    )
}