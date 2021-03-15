import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

import styles from './styles';

/**
 * Este componente renderiza un input basico.
 */
const InputField = (props) => <TextInput {...props} style={styles.input}/>;

InputField.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
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
};

export default InputField;