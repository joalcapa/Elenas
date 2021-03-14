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

const TextField = (props) => (
    <Text style={[
        {fontSize: FontSize[props.type]},
        props.isTitle ? styles.title : {},
    ]}>{props.text}</Text>
);

TextField.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    isTitle: PropTypes.bool,
};

TextField.defaultProps = {
    text: '',
    type: NORMAL_TYPE,
    isTitle: false,
};

export default TextField;