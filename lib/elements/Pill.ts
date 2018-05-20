import * as React from 'react';
import styled from '../theme';
import { tags } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

export const Pill = styled.a`
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    line-height: 1.2;
    font-weight: bold;
    outline: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;

    padding: ${ calculateEM(5, tags) } ${ calculateEM(8, tags) };
    margin: 0 ${ calculateEM(5, tags) } ${ calculateEM(5, tags) } 0;
    font-size: ${ calculateEM(tags) };
    color: ${props => props.theme.pillFont};
    background: ${props => props.theme.pillFill};
`;

export const ButtonPill = Pill.withComponent('button');