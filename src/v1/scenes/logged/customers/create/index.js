import React from 'react';
import {View} from 'react-native';

import BaseCustomer from '../baseCustomers';
import styles from './styles';
import TextField, {BIG_TYPE} from '../../../../components/commons/TextField';
import InputField from '../../../../components/commons/InputField';
import Button from '../../../../components/commons/Button';

const Create = () => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.input_content}>
                    <InputField
                        placeholder=""
                        value=""
                        onChange={() => {}}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder=""
                        value=""
                        onChange={() => {}}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder=""
                        value=""
                        onChange={() => {}}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder=""
                        value=""
                        onChange={() => {}}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder=""
                        value=""
                        onChange={() => {}}
                    />
                </View>
                <View style={styles.input_content}>
                    <InputField
                        placeholder=""
                        value=""
                        onChange={() => {}}
                    />
                </View>
                <View style={styles.button_content}>
                    <Button
                        text="CREAR"
                        onPress={() => {}}
                    />
                </View>
            </View>
        </View>
    );
};

export default BaseCustomer(Create, 'Crear Cliente', {isListButton: true});