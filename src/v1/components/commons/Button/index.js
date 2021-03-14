import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Button = (props) => (
        <TouchableOpacity 
            onPress={props.onPress} 
            style={[
                styles.button_container,
                props.isDefaultButton ? styles.default_button : {},
                props.isGreenButton ? styles.green_button : {},
            ]}
        >
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );

Button.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    isDefaultButton: PropTypes.bool,
    isGreenButton: PropTypes.bool,
};

Button.defaultProps = {
    onPress: () => {},
    text: '',
    isDefaultButton: true,
    isGreenButton: false,
};

export default Button;