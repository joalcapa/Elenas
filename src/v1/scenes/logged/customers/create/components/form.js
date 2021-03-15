import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import InputField from '../../../../../components/commons/InputField';
import Button from '../../../../../components/commons/Button';
import styles from '../styles';

/**
 * Este componente permite enviar el formulario para crear o editar un cliente.
 */
const Form = (props) => {
    const {states} = props;

    console.log('States: ', states);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Nombres"
                        value={props.firstName}
                        onChangeText={props.changeFirstName}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Apellidos"
                        value={props.lastName}
                        onChangeText={props.changeLastName}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Cedula"
                        value={props.cedula}
                        onChangeText={props.changeCedula}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Email"
                        value={props.email}
                        onChangeText={props.changeEmail}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Telefono"
                        value={props.cellphone}
                        onChangeText={props.changeCellphone}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Direccion"
                        value={props.address}
                        onChangeText={props.changeAddress}
                    />
                </View>
                <View style={styles.button_content}>
                    <Button
                        isDisabled={!props.isValidForm}
                        text="CREAR"
                        onPress={props.createCustomer}
                    />
                </View>
            </View>
        </View>
    );
};

Form.propTypes = {
    /**
     * Array de los estados y sus ciudades.
     */
    states: PropTypes.array,
    /**
     * Valor del nombre.
     */
    firstName: PropTypes.string,
    /**
     * Valor del apellido.
     */
    lastName: PropTypes.string,
    /**
     * Valor de la cedula.
     */
    cedula: PropTypes.string,
    /**
     * Valor del correo.
     */
    email: PropTypes.string,
    /**
     * Valor del telefono.
     */
    cellphone: PropTypes.string,
    /**
     * Valor de la direccion.
     */
    address: PropTypes.string,
    /**
     * Define si el formulario es valido para enviar.
     */
    isValidForm: PropTypes.bool,
    /**
     * Funcion que cambia el valor del nombre.
     */
    changeFirstName: PropTypes.func,
    /**
     * Funcion que cambia el valor del apellido.
     */
    changeLastName: PropTypes.func,
    /**
     * Funcion que cambia el valor de la cedula.
     */
    changeCedula: PropTypes.func,
    /**
     * Funcion que cambia el valor del correo.
     */
    changeEmail: PropTypes.func,
    /**
     * Funcion que cambia el valor del telefono.
     */
    changeCellphone: PropTypes.func,
    /**
     * Funcion que cambia el valor de la direccion.
     */
    changeAddress: PropTypes.func,
    /**
     * Funcion que envia el formulario.
     */
    createCustomer: PropTypes.func,
};

Form.defaultProps = {
    states: [],
    firstName: '',
    lastName: '',
    cedula: '',
    email: '',
    cellphone: '',
    address: '',
    isValidForm: false,
    changeFirstName: () => {},
    changeLastName: () => {},
    changeCedula: () => {},
    changeEmail: () => {},
    changeCellphone: () => {},
    changeAddress: () => {},
    createCustomer: () => {},
};

export default Form;