import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import InputField from '../../../../../components/commons/InputField';
import Button from '../../../../../components/commons/Button';
import styles from '../styles';

/**
 * Este componente permite enviar el formulario para crear o editar un cliente.
 */
const Form = (props) => (
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
                {!props.isEdit && (
                    <View style={styles.input_content}>
                        <InputField
                            placeholder="Email"
                            value={props.email}
                            onChangeText={props.changeEmail}
                        />
                    </View>
                )}
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Cedula"
                        value={props.cedula}
                        onChangeText={props.changeCedula}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Telefono"
                        value={props.cellphone}
                        onChangeText={props.changeCellphone}
                    />
                </View>
                <View style={styles.button_content}>
                    <Button
                        isDisabled={!props.isValidForm}
                        text="CONTINUAR"
                        onPress={props.nextAddressSelect}
                    />
                </View>
            </View>
        </View>
    );

Form.propTypes = {
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
     * Define si el formulario es valido para enviar.
     */
    isValidForm: PropTypes.bool,
    /**
     * Define si el formulario es para edicion.
     */
    isEdit: PropTypes.bool,
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
     * Funcion que muestra el formulario de direccion.
     */
    nextAddressSelect: PropTypes.func,
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
    isEdit: false,
    changeFirstName: () => {},
    changeLastName: () => {},
    changeCedula: () => {},
    changeEmail: () => {},
    changeCellphone: () => {},
    changeAddress: () => {},
    nextAddressSelect: () => {},
};

export default Form;