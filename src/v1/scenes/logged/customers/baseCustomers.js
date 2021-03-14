import React, { Children } from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

import Button from '../../../components/commons/Button';
import TextField, {BIG_TYPE} from '../../../components/commons/TextField';

const BaseCustomer = (props) => {
    const {title, Child, stackProps, options} = props;
    return (
        <View style={styles.container}>
            <View style={styles.nav_buttons}>
                {title !== '' && (
                    <TextField 
                        isTitle 
                        text={title} 
                        type={BIG_TYPE}
                    />)}
                <View style={styles.buttons_container}>
                    {options.isCreateButton && (
                        <View style={styles.button_content}>
                            <Button text='CREAR CLIENTE'/>
                        </View>)}
                    {options.isListButton && (
                        <View style={styles.button_content}>
                            <Button text='LISTA DE CLIENTES'/>
                        </View>)}
                </View>
            </View>
            <View style={styles.container}>
                <Child {...stackProps} />
            </View>
        </View>
    );
};

BaseCustomer.propTypes = {
    title: PropTypes.string,
    Child: PropTypes.any,
    options: PropTypes.shape({
        isCreateButton: PropTypes.bool,
        isListButton: PropTypes.bool,
    }),
    stackProps: PropTypes.shape({}),
};

BaseCustomer.defaultProps = {
    title: '',
    Child: () => <></>,
    options: {
        isCreateButton: false,
        isListButton: false,
    },
    stackProps: {},
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: '20px',
        paddingTop: '10px',
    },
    buttons_container: {
        width: 400,
    },
    button_content: {
        display: 'flex',
        alignItems: 'flex-end',
        paddingRight: '10px',
    },
    nav_buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default (Child, title = '', options = {}) => (stackProps) => (
    <BaseCustomer 
        title={title} 
        Child={Child} 
        options={options}
        stackProps={stackProps}
    />
);