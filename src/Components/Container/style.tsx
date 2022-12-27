import styled from 'styled-components'
import { Dimensions } from 'react-native'

export const ViewContainer  = styled.View`
    flex: 1;
    flexDirection: column;
    ${(props)=>props.centerX ? "alignItems: center;" : ""}
    ${(props)=>props.centerY ? "justifyContent: center;" : ""}
`


export const ContainerBox  = styled.View`
    ${(props)=>props.row ? 'flexDirection: row;' : "flexDirection: column;"}
    ${(props)=>props.row ? 'height:100%;' : "width:"+Dimensions.get('window').width+"px;"}
    ${(props)=>
            props.centerX ? "alignItems: center;" : 
            props.rightX ? "alignItems: flex-end;" : ""}

    ${(props)=>props.centerY ? "justifyContent: center;" : ""}
`