import React from 'react';
import { Text } from '../../elements/Type';
import { AlertWrapper } from '../../elements/Alert';

const Alert = (props) => {
    let { type, message } = props;

    return (
        <AlertWrapper type={type}>
            <Text>{message}</Text>
        </AlertWrapper>
    );
}

Alert.defaultProps = {
    type: 'grey',
    message: 'SCREAM'
}

export default Alert;
