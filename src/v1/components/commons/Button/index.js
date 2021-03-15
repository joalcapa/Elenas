import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

/**
 * Este componente renderiza un boton basico que ejecuta una funcion y se puede deshabilitar.
 */
const Button = (props) => (
    <TouchableOpacity 
        onPress={props.isDisabled ? null : props.onPress} 
        style={[
            styles.button_container,
            props.isDefaultButton ? styles.default_button : {},
            props.isGreenButton ? styles.green_button : {},
            props.isDisabled ? styles.disabled_button : {},
        ]}
    >
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
);

Button.propTypes = {
    /**
     * Funcion que ejecuta el boton cuando se hace click sobre el.
     */
    onPress: PropTypes.func,
    /**
     * Nombre del boton.
     */
    text: PropTypes.string,
    /**
     * Por defecto el boton es de color azul.
     */
    isDefaultButton: PropTypes.bool,
    /**
     * El boton cambia a color verde.
     */
    isGreenButton: PropTypes.bool,
    /**
     * Se deshabilita el boton.
     */
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    onPress: () => {},
    text: '',
    isDefaultButton: true,
    isGreenButton: false,
    isDisabled: false,
};

export default Button;