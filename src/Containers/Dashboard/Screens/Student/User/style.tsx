import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../../../../Hooks'

export const UserPhoto = styled.Image`
    resizeMode:contain;
    width:200px;
    height:200px
    borderRadius:10000000000000000px;
`

export const EditContainer = styled.View`
    position: absolute;
    right:20px;
    justifyContent:center;
    alignItems:center;
    borderRadius:1000000000000px;
    background:${useTheme().Colors.inputBackground};
    padding:15px;
`