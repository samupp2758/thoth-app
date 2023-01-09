import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../../../Hooks'

export const ItemBox = styled.View`
backgroundColor:${useTheme().Colors.inputBackground};
padding:15px;
minHeight:100px;
borderRadius:10px;
`