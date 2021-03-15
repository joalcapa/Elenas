import React from 'react';
import {View} from 'react-native';
import Button from '../../../../components/commons/Button';
import TextField, { EXTRA_TYPE } from '../../../../components/commons/TextField';

import BaseCustomer from '../BaseCustomers';

import styles from './styles';

/**
 * Este componente permite listar los clientes.
 */
const List = () => {
    const clientes = [
        {
            id: 2, 
            firstName: 'Cindy',
            lastName: 'Caceres',
            cedula: '1094168406',
            email: 'cindy@hoos.com',
            address: 'cucuta',
            cellphone: '3138884466',
        },
        {
            id: 2, 
            firstName: 'Jose',
            lastName: 'Castro',
            cedula: '1098068806',
            email: 'castrojose@hoos.com',
            address: 'medellin',
            cellphone: '3137892563',
        }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.contain}>
                <View style={styles.BoxOne}>
                    <TextField text="ID" style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text="NOMBRE" style={styles.textBox} type={EXTRA_TYPE} />
                </View>
                <View style={styles.BoxOne}>
                    <TextField text="APELLIDO" style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text="CEDULA" style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text="EMAIL" style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text="DIRECCION" style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text="TELEFONO" style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text="ACCION" style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
            </View>
            {clientes.map((cliente) => {
                return (
                    <View style={styles.contain}>
                <View style={styles.BoxOne}>
                    <TextField text={cliente.id} style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text={cliente.firstName} style={styles.textBox} type={EXTRA_TYPE} />
                </View>
                <View style={styles.BoxOne}>
                    <TextField text={cliente.lastName} style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text={cliente.cedula} style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text={cliente.email} style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text={cliente.address} style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <TextField text={cliente.cellphone} style={styles.textBox} type={EXTRA_TYPE}/>
                </View>
                <View style={styles.BoxOne}>
                    <Button text="Editar" />
                </View>
            </View>
                );
            })}
        </View>
    );
};

export default BaseCustomer(List, 'Lista de clientes', {isCreateButton: true});