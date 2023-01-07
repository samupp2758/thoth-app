import styled from 'styled-components'
import { useTheme } from '../../../../Hooks'

export const Container = styled.View`
    position: absolute;
    bottom:0;
    justifyContent: center;
    alignItems: center;
    width:100%;
`

export const Box = styled.View`
    width:90%;
    height: 60px;
    background:${useTheme().Colors.textLight};

    shadowColor: '#171717',
    shadowOffset: {width: 3, height: 4};
    shadowOpacity: 0.1;
    shadowRadius: 10px;

    borderRadius: 1000000px;
    marginBottom:30px;


    justifyContent: center;
`

export const Content = styled.View`
    margin:10px;
    alignItems: center;
    justifyContent: center;
    flexDirection:row;
`

export const IconContainer = styled.View`
    marginLeft:10%;
    marginRight:10%;
`