import styled from 'styled-components';
import { darken, lighten, rgba } from 'polished';
import * as colors from '../styles/colors';
import * as typography from '../styles/typography';
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

    padding: ${ calculateEM('5px', typography.tags) } ${ calculateEM('8px', typography.tags) };
    margin: 0 ${ calculateEM('5px', typography.tags) } ${ calculateEM('5px', typography.tags) } 0;
    font-size: ${ calculateEM(typography.tags) };
    color: ${({ fontColor })  => colors[fontColor]};
    background: ${({ bgColor })  => colors[bgColor]};
`;

Pill.defaultProps = {
    bgColor: 'grey',
    fontColor: 'white'
};

export const ButtonPill = Pill.withComponent('button');