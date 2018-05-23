import styled from '../theme';
import { black } from '../styles/colors';
import { h1, h2, h3, h4 } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

const headingDefaults = () => (`
    line-height: 1.25;
    font-weight: bold;
`);

export const H1 = styled.h1`
    font-size: ${props => props.theme.fontSize || calculateEM(h1)};
    margin: ${calculateEM(22, h1)} 0px ${calculateEM(8, h1)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;

export const H2 = styled.h2`
    font-size: ${props => props.theme.fontSize || calculateEM(h2)};
    margin: ${calculateEM(22, h2)} 0px ${calculateEM(8, h2)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;

export const H3 = styled.h3`
    font-size: ${props => props.theme.fontSize || calculateEM(h3)};
    margin: ${calculateEM(22, h3)} 0px ${calculateEM(8, h3)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;

export const H4 = styled.h4`
    font-size: ${props => props.theme.fontSize || calculateEM(h4)};
    margin: ${calculateEM(22, h4)} 0px ${calculateEM(8, h4)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;