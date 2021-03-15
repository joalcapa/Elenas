import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import TextField, {BIG_TYPE} from '../../../../components/commons/TextField';
import InputField from '../../../../components/commons/InputField';
import Button from '../../../../components/commons/Button';
import styles from '../styles';

/**
 * Este componente renderiza el formulario para iniciar session.
 */
const Form = (props) => (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.form_content}>
                <TextField
                    isTitle
                    text="Inicio de sesión"
                    type={BIG_TYPE}
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
                    isPassword
                    placeholder="Contraseña"
                    value={props.password}
                    onChangeText={props.changePassword}
                />
            </View>
            <View style={styles.button_content}>
                <Button
                    isGreenButton
                    text="Iniciar Sesión"
                    isDisabled={!props.isValidForm}
                    onPress={props.login}
                />
            </View>
            {props.isError && (
                <View style={styles.input_content}>
                    <TextField text={'Hubo un error, intenta mas tarde'} />
                </View>
            )}
        </View>
    </View>
);

Form.propTypes = {
    /**
     * Valor del telefono.
     */
    cellphone: PropTypes.string,
    /**
     * Valor de la contraseña.
     */
    password: PropTypes.string,
    /**
     * Identifica si el formulario es valido para enviar.
     */
    isValidForm: PropTypes.bool,
    /**
     * Identifica si ocurrio un error al enviar el formulario.
     */
    isError: PropTypes.bool,
    /**
     * Funcion que modifica el valor del telefono.
     */
    changeCellphone: PropTypes.func,
    /**
     * Funcion que modifica la contraseña.
     */
    changePassword: PropTypes.func,
    /**
     * Funcion que envia el formulario.
     */
    login: PropTypes.func,
};

Form.defaultProps = {
    cellphone: '',
    password: '',
    isValidForm: false,
    isError: false,
    changeCellphone: () => {},
    changePassword: () => {},
    login: () => {},
};

export default Form;