import React, { Children } from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import TextField, {BIG_TYPE} from '../../../components/commons/TextField';

const BaseCustomer = (props) => {
    const {title, Child, stackProps} = props;
    return (
        <View style={styles.container}>
            {title !== '' && <View>
                <TextField 
                    isTitle 
                    text={title} 
                    type={BIG_TYPE}
                />
            </View>}
        <View style={styles.container}>
            <Child {...stackProps} />
        </View>
    </View>);
};

BaseCustomer.propTypes = {
    title: PropTypes.string,
    Child: PropTypes.any,
    stackProps: PropTypes.shape({}),
};

BaseCustomer.defaultProps = {
    title: '',
    Child: () => <></>,
    stackProps: {},
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: '20px',
        paddingTop: '10px',
    },
});

export default (Child, title = '') => (stackProps) => (
    <BaseCustomer 
        title={title} 
        Child={Child} 
        stackProps={stackProps}
    />
);