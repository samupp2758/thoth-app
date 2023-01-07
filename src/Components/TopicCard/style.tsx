import styled from 'styled-components'

export const Container = styled.View`
    borderRadius: 20px;
    background:${(props)=>props.backgroundColor};
    width:250px;
    height:70px;

    marginLeft: 20px;
`

export const Box = styled.View`
    marginTop:20px;
    marginLeft:20px;
`

export const ContentContainer = styled.View`
    flex:1;
    justifyContent:center;
    marginLeft: 10px;
`