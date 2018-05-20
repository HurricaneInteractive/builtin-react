import styled from 'styled-components';
import { rgba, darken } from 'polished';
import * as colors from '../styles/colors';
import { basefontsize } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

export const AlertWrapper = styled.div`
    border-radius: 5px;
    padding: ${calculateEM('15px', basefontsize)};
    margin-bottom: ${calculateEM('10px', basefontsize)};
    font-weight: normal;
    position: relative;

    border: 1px solid ${({ type }) => colors[type]};
    background-color: ${({ type }) => rgba(colors[type], 0.03)};
    > *:first-child {
        margin-top: 0;
    }
    > *:last-child {
        margin-bottom: 0;
    }
    p {
        color: ${({ type }) => darken(0.3, colors[type])};
    }
`

AlertWrapper.defaultProps = {
    type: 'grey'
};