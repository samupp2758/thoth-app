import react from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components'


//Icons
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

import { useTheme } from '../../Hooks';


export const List = styled.FlatList`
backgroundColor: ${(props) => props.backgroundColor};
flexDirection: row;

${(props)=>props.centerX ? "alignItems: center;" : ""}
${(props)=>props.centerY ? "justifyContent: center;" : ""}

borderRadius: 10px;
paddingTop: 13px;
paddingBottom: 13px;

borderColor: ${(props)=>props.borderColor};

borderWidth: 0.5px;

width: 100%;

borderRadius: 10px;
`

export const ItemContainer = styled.View`
padding:6px;
backgroundColor: ${(props) => props.backgroundColor};
borderBottomColor:${(props)=>props.borderColor};
borderBottomWidth: 0.5px;
`

export const DropdownButton = styled.View`
position:absolute;

    right:20px;
    top:15px;
`

export const ListContainer = styled.ScrollView`
position:absolute;
top:56px;
width:100%;
height:200px;

borderRadius: 10px;
backgroundColor: ${(props) => props.backgroundColor};

`
