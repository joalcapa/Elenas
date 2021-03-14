import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

import styles from './styles';

const InputField = (props) => <TextInput {...props} style={styles.input}/>;

InputField.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
};

InputField.defaultProps = {
    value: '',
    placeholder: '',
    onChangeText: () => {},
};

export default InputField;