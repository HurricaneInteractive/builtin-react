import styled from '../theme';
import { grey } from '../styles/colors';
import { basefontsize } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

export const Text = styled.p`
    font-size: ${props => props.theme.fontSize || calculateEM(basefontsize)};
    color: ${props => props.theme.font || grey};
    margin: ${calculateEM(10, basefontsize)} 0 ${calculateEM(20, basefontsize)};
    line-height: 1.5;
    font-weight: normal;
`
