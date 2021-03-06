import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {View, StyleSheet} from 'react-native';

import {useUser} from '../../../../kernel';
import Button from '../../../components/commons/Button';
import TextField, {BIG_TYPE} from '../../../components/commons/TextField';

/**
 * Este componente permite decorar una escena para mostrar un titulo y un boton de navegacion hacia las escenas crear o listar clientes.
 */
const BaseCustomer = (props) => {
    const {title, Child, stackProps, options} = props;
    const {logOut} = useUser();
    let history = useHistory();

    const toCustomerList = () => {
        history.replace("/");
    };

    const toCustomerCreate = () => {
        history.push("/customer");
    };

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
                            <Button 
                                text='CREAR CLIENTE' 
                                onPress={toCustomerCreate}
                            />
                        </View>)}
                    {options.isListButton && (
                        <View style={styles.button_content}>
                            <Button 
                                text='LISTA DE CLIENTES' 
                                onPress={toCustomerList} 
                            />
                        </View>)}
                        <View style={styles.button_content}>
                            <Button 
                                text='CERRAR SESION' 
                                onPress={logOut}
                            />
                        </View>
                </View>
            </View>
            <View style={styles.container}>
                <Child {...stackProps} />
            </View>
        </View>
    );
};

BaseCustomer.propTypes = {
    /**
     * Titulo de la escena
     */
    title: PropTypes.string,
    /**
     * Componente a renderizar (Create, List, Edit).
     */
    Child: PropTypes.any,
    /**
     * Opciones que definen que boton de navegacion mostrar.
     */
    options: PropTypes.shape({
        isCreateButton: PropTypes.bool,
        isListButton: PropTypes.bool,
    }),
    /**
     * Propiedades de pila (react navigation...)
     */
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
        width: 800,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: 150,
    },
    button_content: {
        width: 200,
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