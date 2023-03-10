
import styled from 'styled-components/native';

export const Text_ = styled.Text`
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
`;

export default {Text_}