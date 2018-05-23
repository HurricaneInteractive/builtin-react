import styled from '../theme';
import { tags } from '../styles/typography';
import { white, grey } from '../styles/colors';
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
    font-size: ${ props => props.theme.fontSize || calculateEM(tags) };
    color: ${props => props.theme.pillFont || white};
    background: ${props => props.theme.pillFill || grey};
`;

export const ButtonPill = Pill.withComponent('button');