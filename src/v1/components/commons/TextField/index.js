import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {FontSize} from '../../../resources';

import styles from './styles';

export const SMALL_TYPE = 'small';
export const NORMAL_TYPE = 'normal';
export const EXTRA_TYPE = 'extra';
export const BIG_TYPE = 'big';
export const HIGH_TYPE = 'high';

/**
 * Este componente renderiza un texto basico
 */

const TextField = (props) => (
    <Text style={[
        {fontSize: FontSize[props.type]},
        props.isTitle ? styles.title : {},
    ]}>{props.text}</Text>
);

TextField.propTypes = {
    /**
     * Texto del TextField
     */
    text: PropTypes.string,
    /**
     * Define el tamaño del texto
     */
    type: PropTypes.string,
    /**
     * Define el grosor del texto
     */    
    isTitle: PropTypes.bool,
};

TextField.defaultProps = {
    text: '',
    type: NORMAL_TYPE,
    isTitle: false,
};

export default TextField;