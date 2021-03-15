import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import Select from '../../../../../components/commons/Select';
import TextField from '../../../../../components/commons/TextField';
import Button from '../../../../../components/commons/Button';
import InputField from '../../../../../components/commons/InputField';
import styles from '../styles';

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
        <Button
            text={'CREAR'}
            onPress={props.createCustomer}
            isDisabled={!props.isValidAddressForm}
        />
    </View>
);

AddressForm.propTypes = {
    city: PropTypes.string,
    country: PropTypes.string,
    stateName: PropTypes.string,
    streetAddress: PropTypes.string,
    statesForm: PropTypes.array,
    citiesForm: PropTypes.array,
    onSelectStateForm: PropTypes.func,
    onSelectCityForm: PropTypes.func,
    changeStreetAddress: PropTypes.func,
    changeCountry: PropTypes.func,
    createCustomer: PropTypes.func,
    isValidAddressForm: PropTypes.bool,
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
};

export default AddressForm;