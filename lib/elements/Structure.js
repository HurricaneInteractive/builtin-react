import styled from 'styled-components';
import { border } from '../styles/colors';

export const Box = styled.div`
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid ${border};
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    background: ${border};
    margin: 20px 0;
`