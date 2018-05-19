import styled from 'styled-components';
import * as colors from '../styles/colors';
import * as typography from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

const headingDefaults = () => (`
    line-height: 1.25;
    font-weight: bold;
    color: ${colors.black};
`);

export const H1 = styled.h1`
    font-size: ${calculateEM(typography.h1)};
    margin: ${calculateEM('20px', typography.h1)} 0px ${calculateEM('35px', typography.h1)};
    ${ headingDefaults() }
`;

export const H2 = styled.h2`
    font-size: ${calculateEM(typography.h2)};
    margin: ${calculateEM('20px', typography.h2)} 0px ${calculateEM('30px', typography.h2)};
    ${ headingDefaults() }
`;

export const H3 = styled.h3`
    font-size: ${calculateEM(typography.h3)};
    margin: ${calculateEM('18px', typography.h3)} 0px ${calculateEM('28px', typography.h3)};
    ${ headingDefaults() }
`;

export const H4 = styled.h4`
    font-size: ${calculateEM(typography.h4)};
    margin: ${calculateEM('15px', typography.h4)} 0px ${calculateEM('25px', typography.h4)};
    ${ headingDefaults() }
`;

export const H5 = styled.h5`
    font-size: ${calculateEM(typography.h5)};
    margin: ${calculateEM('15px', typography.h5)} 0px ${calculateEM('25px', typography.h5)};
    ${ headingDefaults() }
`;

export const H6 = styled.h6`
    font-size: ${calculateEM(typography.h6)};
    margin: ${calculateEM('15px', typography.h6)} 0px ${calculateEM('25px', typography.h6)};
    ${ headingDefaults() }
`;