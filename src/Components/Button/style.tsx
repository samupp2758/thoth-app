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
    flexDirection: column;

    alignItems: center;
    justifyContent: center;

    borderRadius: 10px;
    paddingTop: 13px;
    paddingBottom: 13px;

    width: 100%;
    zIndex:1;
    borderRadius: 10px;



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


