import React, { useEffect, useState } from 'react'
import { Container,View } from '../../../../Components/Container'
import { Text } from '../../../../Components/Text'
import Header from '../../Components/Header'

import { Button } from '../../../../Components/Button'

import {useTheme} from '../../../../Hooks'

const OverviewData = ({route,navigation}) => {
    const [userInfo,setuserInfo] = useState([])

    useEffect(()=>{
        setuserInfo([
            {key:'Name:',value:'John'},
            {key:'Full Name:',value:'John Clever Piper'},
            {key:'E-mail:',value:'john@gmail.com'},
            {key:'CPF:',value:'000.000.000-00'},
            {key:'Birth Date:',value:'00/00/0000'},
            {key:'Subject:',value:'Mathematics'},
        ])
    },[])

    const next = () => {
        navigation.navigate('PendingProfile')
    }

    return (
        <View centerX centerY>
            <Header navigation={navigation} props={{step:12}} />
            <View>
                <Container>

                    <Container centerX marginTop={useTheme().Margin.top}>
                        <Text Bodytext>Confirm your Data:</Text>
                    </Container>
                    
                    <Container width={'90%'}
                    marginTop={useTheme().Margin.top-10}>
                        {userInfo.map((single,index)=>{
                            return(
                                <Container id={index}
                                marginLeft={useTheme().Margin.left}>
                                    <Text 
                                    color={useTheme().Colors.placeHolder}
                                    fontSize={useTheme().FontSize.regular}>  {single.key}
                                        <Text
                                        color={useTheme().Colors.text}
                                        fontSize={useTheme().FontSize.regular}>  {single.value}
                                        </Text>
                                    </Text>
                                </Container>
                            )
                        })}    
                    </Container>

                </Container>
            </View>
            <Container centerX marginTop={useTheme().Margin.bottom-20}>
                <Button onPress={()=>{next()}}>Next</Button>
            </Container>
        </View>
    )
}

export default OverviewData