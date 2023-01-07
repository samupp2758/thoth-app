import Readt from 'react'
import { ButtonedIcon } from '../../../../Components/Button'
import { useTheme } from '../../../../Hooks'
import { Container,Box,Content, IconContainer } from './style'

import * as RootNavigation from '../../../../Navigators/RootNavigation';


export default () => {
    const Studentbuttons = [{
        name:'home',
        family:'Entypo',
        onPress:'Student.Home'
    },
    {
        name:'bell',
        family:'FontAwesome',
        onPress:'Notifications'
    },
    {
        name:'bookmark',
        family:'FontAwesome',
        onPress:'Student.Saved'
    },
    {
        name:'settings',
        family:'Ionicons',
        onPress:'Settings'
    }]
    return (
        <Container>
            <Box>
                <Content>
                    {Studentbuttons.map((single,index)=>{
                        return(
                        <IconContainer>
                            <ButtonedIcon
                                onPress={()=>{console.log(single.onPress);RootNavigation.navigate(single.onPress,{who:'Student'})}}
                                key={index}
                                name={single.name}
                                family={single.family}
                                size={30}
                                color={useTheme().Colors.primary}/>
                        </IconContainer>)
                    })}
                </Content>
            </Box>
        </Container>
    )
}