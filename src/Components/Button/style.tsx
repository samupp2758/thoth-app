import react from 'react';
import { Dimensions } from 'react-native';

//Icons
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

import styled from 'styled-components';
import { useTheme } from '../../Hooks';


export const Container = styled.View`
    backgroundColor: ${(props) => props.backgroundColor};
    ${(props) => props.borderColor ? "borderWidth:2px;borderColor: "+ props.borderColor+";" : ""}
    flexDirection: column;

    alignItems: center;
    justifyContent: center;

    
    borderRadius: 10px;

    paddingTop: 13px;
    paddingBottom: 13px;
    
    ${(props)=> props.borderStylee ? "borderStyle:"+props.borderStylee+";" : ""}

    width: 100%;
    zIndex:1;



`;


export const Pressable = styled.TouchableOpacity`
${(props)=>'width:'+props.width+';'};
margin: 5px;
`


export const PressableInline = styled.TouchableWithoutFeedback`
textDecorationLine: underline;
`


export const icon = (props) => {
    return(`
    color: ${props.color};
    fontSize: 30px;

    position: absolute;

    top: 8px;
    left:10px;`)
}


