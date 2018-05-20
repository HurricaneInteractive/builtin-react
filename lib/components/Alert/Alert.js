import React from 'react';
import styled from 'styled-components';
import { rgba, darken } from 'polished';
import classNames from 'classnames';
import { Text } from '../../elements/Type';
import { AlertWrapper } from '../../elements/Alert';
import * as colors from '../../styles/colors';

class Alert extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            type,
            message,
            classnames,
            positioned,
            position,
            hasClose,
            onClose,
            className
        } = this.props;

        let closeIcon = <svg viewBox="466 407 9 9" fill={darken(0.3, colors[type])}><g transform="translate(595.278 64.278)"><path d="M.176.03H1.911V11.023H.176Z" transform="translate(-129.424 344.052) rotate(-45)"/><path d="M0,0H1.736V10.992H0Z" transform="translate(-121.505 342.722) rotate(45)"/></g></svg>;

        let alertClassname = classNames(
            'alert',
            className,
            position,
            classnames,
            {
                'positioned': positioned,
                'has-close': hasClose && onClose
            }
        )

        return (
            <AlertWrapper type={type} className={alertClassname}>
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
        );
    }
}

Alert.defaultProps = {
    type: 'grey',
    message: 'SCREAM',
    positioned: false,
    position: '',
    hasClose: false,
    onClose: null
}

const StyledAlert = styled(Alert)`
    &.positioned {
        position: absolute;
        z-index: 1001;
        top: auto;
        left: auto;
        right: auto;
        bottom: auto;
        box-shadow: 0 2px 2px 0 ${ rgba(colors.black, 0.16) };
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
