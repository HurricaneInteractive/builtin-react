import styled from 'styled-components';
import { darken, lighten, rgba } from 'polished';
import * as colors from '../styles/colors';
import * as typography from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

export const Button = styled.button`
    background: ${({ bgColor })  => colors[bgColor]};
    border: none;
    border-radius: 5px;
    color: ${({ fontColor })  => colors[fontColor]};
    cursor: pointer;
    display: inline-block;
    font-size: ${ calculateEM(typography.button) };
    line-height: 1.2;
    font-weight: bold;
    margin: 0 ${ calculateEM('15px', typography.button) } ${ calculateEM('15px', typography.button) } 0;
    outline: none;
    padding: ${ calculateEM('16px', typography.button) } ${ calculateEM('25px', typography.button) };
    text-transform: uppercase;
    transition: all 300ms ease;
    &:hover {
        background: ${({ bgColor })  => darken(0.1, colors[bgColor])};
        box-shadow: 0 3px 8px 0 ${({ bgColor })  => rgba(colors[bgColor], 0.3)};
    }
    &:active {
        background: ${({ bgColor })  => lighten(0.1, colors[bgColor])};
        box-shadow: 0 0px 10px 0 ${({ bgColor })  => rgba(colors[bgColor], 0.4)};
    }
`;

Button.defaultProps = {
    bgColor: 'grey',
    fontColor: 'white'
};

export const ButtonLink = Button.withComponent('a').extend`
    text-decoration: none;
`;
