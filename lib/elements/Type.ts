import styled from '../theme';
import { grey } from '../styles/colors';
import { basefontsize } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

export const Text = styled.p`
    font-size: ${calculateEM(basefontsize)};
    color: ${props => props.theme.font};
    margin: ${calculateEM(20, basefontsize)} 0 ${calculateEM(25, basefontsize)};
    line-height: 1.5;
    font-weight: normal;
`
