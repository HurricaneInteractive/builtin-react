import * as React from 'react';
import styled, { ThemeProvider, IThemeInterface } from '../../theme';
import { rgba, darken } from 'polished';
import classNames from 'classnames';
import { Text } from '../../elements/Type';
import { AlertWrapper } from '../../elements/Alert';
import { black } from '../../styles/colors';

interface AlertProps {
    type: string;
    message?: string;
    positioned?: boolean;
    position?: string;
    hasClose?: boolean;
    onClose?: any;
    className?: string;
    theme?: IThemeInterface;
}

const Alert: React.StatelessComponent<AlertProps> = props => {

    const {
        type,
        message,
        positioned,
        position,
        hasClose,
        onClose,
        className,
        theme
    } = props;

    let alertClassname = classNames(
        'alert',
        className,
        position,
        {
            'positioned': positioned,
            'has-close': hasClose && onClose
        }
    )

    let closeIcon = <svg viewBox="466 407 9 9"><g transform="translate(595.278 64.278)"><path d="M.176.03H1.911V11.023H.176Z" transform="translate(-129.424 344.052) rotate(-45)"/><path d="M0,0H1.736V10.992H0Z" transform="translate(-121.505 342.722) rotate(45)"/></g></svg>;

    return (
        <ThemeProvider theme={theme}>
            <AlertWrapper className={alertClassname}>
                <Text>{message}</Text>
                { 
                    hasClose === true && typeof onClose === 'function' ? (
                        <a
                            href="#" 
                            className="close-trigger" 
                            onClick={(e) => {
                                e.preventDefault();
                                onClose();
                            }}
                        >
                        {closeIcon}
                        </a>
                    ) : (
                        ''
                    )
                }
            </AlertWrapper>
        </ThemeProvider>
    )
}

const StyledAlert = styled(Alert)`
    &.positioned {
        position: absolute;
        z-index: 1001;
        top: auto;
        left: auto;
        right: auto;
        bottom: auto;
        box-shadow: 0 2px 2px 0 ${ rgba(black, 0.16) };
        &.top {
            top: 15px;
        }
        &.left {
            left: 15px;
        }
        &.right {
            right: 15px;
        }
        &.bottom {
            bottom: 15px;
        }
    }
    &.has-close {
        padding-right: 39px;
        .close-trigger {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 7px;
            display: block;
            padding: 8px;
            line-height: 0;
            svg {
                max-width: 9px;
                width: 100%;
                height: auto;
                fill: ${ props => darken(0.3, props.theme.alert) }
            }
        }
    }
    > *:first-child {
        margin-top: 0;
    }
    > *:last-child {
        margin-bottom: 0;
    }
    p {
        margin: 0;
    }
`;

export default StyledAlert;
