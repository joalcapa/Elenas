import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Button = (props) => {
    const {onPress, text, isDefaultButton} = props;
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[
                styles.button_container,
                isDefaultButton ? styles.default_button : {},
            ]}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    isDefaultButton: PropTypes.bool,
};

Button.defaultProps = {
    onPress: () => {},
    text: '',
    isDefaultButton: true,
};

export default Button;