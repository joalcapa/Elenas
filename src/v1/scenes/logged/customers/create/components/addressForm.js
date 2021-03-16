import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import Select from '../../../../../components/commons/Select';
import TextField from '../../../../../components/commons/TextField';
import Button from '../../../../../components/commons/Button';
import InputField from '../../../../../components/commons/InputField';
import styles from '../styles';

/**
 * Componente que permite llenar la informacion de la direccion del cliente.
 */
const AddressForm = (props) => (
    <View style={styles.container}>
        <View style={styles.content}>
            <View style={styles.select_label}>
                <TextField text='Pais' />
            </View>
            <InputField
                onChangeText={props.changeCountry}
                value={props.country}
            />
            <View style={styles.select_label}>
                <TextField text='Departamento' />
            </View>
            <Select
                value={props.stateName}
                options={props.statesForm}
                onSelect={props.onSelectStateForm}
            />
            {props.citiesForm.length >0 && (
                <>
                    <View style={styles.select_label}>
                        <TextField text='Ciudad' />
                    </View>
                    <Select
                        value={props.city}
                        options={props.citiesForm}
                        onSelect={props.onSelectCityForm}
                    />
                </>
            )}
            <View style={styles.select_label}>
                <TextField text='Direccion' />
            </View>
            <InputField
                onChangeText={props.changeStreetAddress}
                value={props.streetAddress}
            />
        </View>
        <View style={styles.box_button}>
            <Button 
                isWhiteButton
                text={'VOLVER'}
                onPress={props.onBack}
            />
            <View style={{width:20}}/>
            <Button
                text={props.isEdit ? 'EDITAR' : 'CREAR'}
                onPress={props.createCustomer}
                isDisabled={!props.isValidAddressForm}
            />
        </View>
    </View>
);

AddressForm.propTypes = {
    /**
     * Ciudad del cliente.
     */
    city: PropTypes.string,
    /**
     * Pais del cliente.
     */
    country: PropTypes.string,
    /**
     * Nombre del departamento del cliente.
     */
    stateName: PropTypes.string,
    /**
     * Direccion del cliente.
     */
    streetAddress: PropTypes.string,
    /**
     * Array de los departamentos del formulario.
     */
    statesForm: PropTypes.array,
    /**
     * Array de las ciudades del departamento seleccionado del formulario.
     */
    citiesForm: PropTypes.array,
    /**
     * Funcion de seleccion del departamento.
     */
    onSelectStateForm: PropTypes.func,
    /**
     * Funcion de seleccion de la ciudad del departamento.
     */
    onSelectCityForm: PropTypes.func,
    /**
     * Funcion que cambio el valor de la direccion.
     */
    changeStreetAddress: PropTypes.func,
    /**
     * Funcion que cambia el valor del pais.
     */
    changeCountry: PropTypes.func,
    /**
     * Funcion que crea al cliente.
     */
    createCustomer: PropTypes.func,
    /**
     * Identifica si el formulario de la direccion es valido.
     */
    isValidAddressForm: PropTypes.bool,
    /**
     * Identifica si se edita al cliente.
     */
    isEdit: PropTypes.bool,
    /**
     * Funcion que permite volver al formulario del cliente.
     */
    onBack: PropTypes.func,
};

AddressForm.defaultProps = {
    city: '',
    country: '',
    stateName: '',
    streetAddress: '',
    statesForm: [],
    citiesForm: [],
    onSelectStateForm: () => {},
    onSelectCityForm: () => {},
    changeStreetAddress: () => {},
    changeCountry: () => {},
    createCustomer: () => {},
    isValidAddressForm: false,
    isEdit: false,
    onBack: () => {},
};

export default AddressForm;