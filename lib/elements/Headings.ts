import styled from '../theme';
import { black } from '../styles/colors';
import { h1, h2, h3, h4, h5, h6 } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

const headingDefaults = () => (`
    line-height: 1.25;
    font-weight: bold;
`);

export const H1 = styled.h1`
    font-size: ${calculateEM(h1)};
    margin: ${calculateEM(20, h1)} 0px ${calculateEM(35, h1)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;

export const H2 = styled.h2`
    font-size: ${calculateEM(h2)};
    margin: ${calculateEM(20, h2)} 0px ${calculateEM(30, h2)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;

export const H3 = styled.h3`
    font-size: ${calculateEM(h3)};
    margin: ${calculateEM(18, h3)} 0px ${calculateEM(28, h3)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;

export const H4 = styled.h4`
    font-size: ${calculateEM(h4)};
    margin: ${calculateEM(15, h4)} 0px ${calculateEM(25, h4)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;

export const H5 = styled.h5`
    font-size: ${calculateEM(h5)};
    margin: ${calculateEM(15, h5)} 0px ${calculateEM(25, h5)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;

export const H6 = styled.h6`
    font-size: ${calculateEM(h6)};
    margin: ${calculateEM(15, h6)} 0px ${calculateEM(25, h6)};
    color: ${props => props.theme.heading || black};
    ${ headingDefaults() };
`;