import react from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';

export const ImageView = styled.Image`
resizeMode:contain;
${(props)=>props.height ? "height: "+props.height+";" : ""}
${(props)=>props.maxWidth  ? "maxWidth: "+props.maxWidth+";" : ""}
`;