import styled from '../theme';
import { white, grey } from '../styles/colors';
import { darken, lighten, rgba } from 'polished';
import { button } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

export const Button = styled.button`
    background-color: ${props => props.theme.buttonFill || grey};
    border: none;
    border-radius: 5px;
    color: ${props => props.theme.buttonFont || white};
    cursor: pointer;
    display: inline-block;
    font-size: ${ props => props.theme.fontSize || calculateEM(button) };
    line-height: 1.2;
    font-weight: bold;
    margin: 0 ${ calculateEM(15, button) } ${ calculateEM(15, button) } 0;
    outline: none;
    padding: ${ calculateEM(16, button) } ${ calculateEM(25, button) };
    text-transform: uppercase;
    transition: all 300ms ease;
    &:hover {
        background: ${props  => darken(0.1, props.theme.buttonFill || grey)};
        box-shadow: 0 3px 8px 0 ${props => rgba(props.theme.buttonFill || grey, 0.3)};
    }
    &:active {
        background: ${props  => lighten(0.1, props.theme.buttonFill || grey)};
        box-shadow: 0 0px 10px 0 ${props => rgba(props.theme.buttonFill || grey, 0.4)};
    }
`;

export const ButtonLink = Button.withComponent('a').extend`
    text-decoration: none;
`;
