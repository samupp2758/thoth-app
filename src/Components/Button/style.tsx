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

    borderRadius: 10px;



`;


export const Pressable = styled.TouchableOpacity`
width:85%;
margin: 5px;
`


export const PressableInline = styled.TouchableWithoutFeedback`
textDecorationLine: underline;
`


const icon = (props) => {
    return(`
    color: ${(props) => props.color};
    fontSize: 30px;

    position: absolute;

    top: 8px;
    left:10px;`)
}

export const AntDesign_ = styled(AntDesign)`
${(props)=>icon(props)}
`;

export const Ionicons_ = styled(Ionicons)`
${(props)=>icon(props)}
`;

export const FontAwesome_ = styled(FontAwesome)`
    ${(props)=>icon(props)}
`;

export const Entypo_ = styled(Entypo)`
${(props)=>icon(props)}
`;
