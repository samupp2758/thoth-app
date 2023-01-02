import AntDesign from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import EvilIcons from '@expo/vector-icons/EvilIcons'
import Feather from '@expo/vector-icons/Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Fontisto from '@expo/vector-icons/Fontisto'
import Foundation from '@expo/vector-icons/Foundation'
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Octicons from '@expo/vector-icons/Octicons'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import Zocial from '@expo/vector-icons/Zocial'

const families = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
}
import styled from 'styled-components'
import React from "react"
import { styleDefault } from "./style"

type Props = {
  family?: string,
  name?: string,
  color?: string,
  size?: number,
  style?: () => string
}

export default ({
  family = 'AntDesign',
  name = 'info',
  color = '#000000',
  size = 30,
  style = styleDefault
})=>{
    const Component = styled(families[family])`
    ${style({color,size})}
    `
    return (<Component name={name}/>)
}