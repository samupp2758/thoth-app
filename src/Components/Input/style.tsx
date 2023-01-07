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
    flexDirection: row;

    ${(props)=>props.centerX ? "alignItems: center;" : ""}
    ${(props)=>props.centerY ? "justifyContent: center;" : ""}

    borderRadius: ${(props)=>props.searchBar ? "100000000px" : "10px"};
    paddingTop: ${(props)=>props.searchBar ? "10px" :"13px"};
    paddingBottom: ${(props)=>props.searchBar ? "10px" :"13px"};
    ${(props)=>props.searchBar ? "paddingLeft:10px;" : ""}

    borderColor: ${(props)=>props.borderColor};

    borderWidth: 0.5px;

    width: 100%;



`;


const icon = (props) => {
    return(`
    color: ${(props) => props.color};
    fontSize: 30px;

    position: absolute;

    top: 8px;
    left:10px;`)
}


export const InputController = styled.TextInput`
color: ${(props) => (props.color)};
font-size: ${(props) => (props.fontSize)}px;
font-family: ${(props) => (props.fontFamily)};
margin:0;
${(props)=>props.marginTop ? 'marginTop:'+props.marginTop+'px;' : ''}
${(props)=>props.marginLeft ? 'marginLeft:'+props.marginLeft+'px;' : ''}
${(props)=>props.marginRight ? 'marginRight:'+props.marginRight+'px;' : ''}
${(props)=>props.marginBottom ? 'marginBottom:'+props.marginBottom+'px;' : ''}
${(props)=>
    props.center ? "textAlign: center;" :
    props.justify? "textAlign:justify;" : ""}
${(props)=>props.underlined ?'textDecorationLine: underline;' : ''}
width:84%;

`