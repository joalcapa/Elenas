import React from 'react';
import {View} from 'react-native';

import {useCustomers} from '../../../../../kernel';
import BaseCustomer from '../baseCustomers';
import InputField from '../../../../components/commons/InputField';
import Button from '../../../../components/commons/Button';

import styles from './styles';

const Create = () => {
    const {
        firstName, 
        lastName,
        cedula,
        email,
        cellphone,
        address,
        isValidForm,
        changeFirstName,
        changeLastName,
        changeCedula,
        changeEmail,
        changeCellphone,
        changeAddress,
        createCustomer,
    } = useCustomers();

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Nombres"
                        value={firstName}
                        onChangeText={changeFirstName}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Apellidos"
                        value={lastName}
                        onChangeText={changeLastName}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Cedula"
                        value={cedula}
                        onChangeText={changeCedula}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Email"
                        value={email}
                        onChangeText={changeEmail}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Telefono"
                        value={cellphone}
                        onChangeText={changeCellphone}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder="Direccion"
                        value={address}
                        onChangeText={changeAddress}
                    />
                </View>
                <View style={styles.button_content}>
                    <Button
                        isDisabled={isValidForm}
                        text="CREAR"
                        onPress={createCustomer}
                    />
                </View>
            </View>
        </View>
    );
};

export default BaseCustomer(Create, 'Crear Cliente', {isListButton: true});