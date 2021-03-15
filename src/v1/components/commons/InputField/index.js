import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

import styles from './styles';

/**
 * Este componente renderiza un input basico.
 */
const InputField = (props) => 
    <TextInput 
        {...props} 
        style={styles.input}
        secureTextEntry={props.isPassword}
    />;

InputField.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    isPassword: PropTypes.bool,
};

InputField.defaultProps = {
    /**
     * Valor del input.
     */
    value: '',
    /**
     * Informacion que identifica al input.
     */
    placeholder: '',
    /**
     * Funcion que modifica el valor del input.
     */
    onChangeText: () => {},
    /**
     * Valor que indica si es input de contraseña.
     */
    isPassword: false,
};

export default InputField;