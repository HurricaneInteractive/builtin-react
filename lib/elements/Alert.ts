import styled from '../theme';
import { info } from '../styles/colors';
import { rgba, darken } from 'polished';
import { basefontsize } from '../styles/typography';
import { calculateEM } from '../helpers/helpers';

export const AlertWrapper = styled.div`
    border-radius: 5px;
    padding: ${calculateEM(15, basefontsize)};
    margin-bottom: ${calculateEM(10, basefontsize)};
    font-weight: normal;
    color: ${props => darken(0.3, props.theme.alert || info)};
    position: relative;
    font-size: ${ props => props.theme.fontSize || calculateEM(basefontsize) };

    border: 1px solid ${props => props.theme.alert || info};
    background-color: ${props => rgba(props.theme.alert || info, 0.03)};
    > *:first-child {
        margin-top: 0;
    }
    > *:last-child {
        margin-bottom: 0;
    }
`