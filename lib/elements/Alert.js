import styled from 'styled-components';
import { rgba } from 'polished';
import * as colors from '../styles/colors';
import { basefontsize } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

export const AlertWrapper = styled.div`
    font-size: ${basefontsize};
    border-radius: 5px;
    padding: ${calculateEM('15px', basefontsize)};
    margin-bottom: ${calculateEM('10px', basefontsize)};
    font-weight: normal;

    color: ${({ type }) => colors[type]};
    border: 1px solid ${({ type }) => colors[type]};
    background-color: ${({ type }) => rgba(colors[type], 0.1)};
    > *:first-child {
        margin-top: 0;
    }
    > *:last-child {
        margin-bottom: 0;
    }
`

AlertWrapper.defaultProps = {
    type: 'grey'
};