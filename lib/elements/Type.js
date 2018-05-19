import styled from 'styled-components';
import { grey } from '../styles/colors';
import { basefontsize } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

export const Text = styled.p`
    font-size: ${calculateEM(basefontsize)};
    color: ${grey};
    margin: ${calculateEM('20px', basefontsize)} 0 ${calculateEM('25px', basefontsize)};
    line-height: 1.5;
    font-weight: normal;
`
