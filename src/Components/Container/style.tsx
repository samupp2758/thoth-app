import styled from 'styled-components'
import { Dimensions } from 'react-native'

export const ViewContainer  = styled.View`
    flex: 1;
    flexDirection: row;
    ${(props)=>props.centerX ? "alignItems: center;" : ""}
    ${(props)=>props.centerY ? "justifyContent: center;" : ""}

    backgroundColor: ${(props)=>props.backgroundColor ? props.backgroundColor: "#ffffff"};
`


export const ContainerBox  = styled.View`
    ${(props)=>props.row ? 'flexDirection: row;' : "flexDirection: column;"}
    ${(props)=>props.row ? '' : "width:"+Dimensions.get('window').width+"px;"}
    ${(props)=>
            props.centerX ? "alignItems: center;" : 
            props.rightX ? "alignItems: flex-end;" : ""}
    
    backgroundColor: ${(props)=>props.backgroundColor ? props.backgroundColor: "#ffffff"};

    ${(props)=>props.width ? "width: "+props.width+";" : ""}

    ${(props)=>props.centerY ? "justifyContent: center;" : props.bottomY ? "justifyContent: flex-end;" : ""}

    ${(props) => props.flex ? "flex: 1;" : ""}

    zIndex:1;
    margin:0;
    ${(props)=>props.marginTop ? 'marginTop:'+props.marginTop+'px;' : ''}
    ${(props)=>props.marginLeft ? 'marginLeft:'+props.marginLeft+'px;' : ''}
    ${(props)=>props.marginRight ? 'marginRight:'+props.marginRight+'px;' : ''}
    ${(props)=>props.marginBottom ? 'marginBottom:'+props.marginBottom+'px;' : ''}
`


export const ScrollView = styled.ScrollView`

${(props)=>props.horizontal ? `
    paddingRight:20px;
    flexDirection: row;` : `flexDirection: column;`}
${(props)=>props.centerX ? "alignItems: center;" : ""}
${(props)=>props.centerY ? "justifyContent: center;" : ""}



`

export const AvoidingView = styled.KeyboardAvoidingView`
flex: 1;
`