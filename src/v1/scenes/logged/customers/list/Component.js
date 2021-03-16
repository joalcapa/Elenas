import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {View} from 'react-native';

import TextField, {EXTRA_TYPE} from '../../../../components/commons/TextField';
import Button from '../../../../components/commons/Button';

import styles from './styles';

/**
 * Este componente permite listar la informacion de los usuarios.
 */
const ItemList = (props) => (
    <View style={styles.contain}>
        <View style={styles.BoxOne}>
            <TextField text={`${props.id}`} style={styles.textBox} type={EXTRA_TYPE}/>
        </View>
        <View style={styles.BoxOne}>
            <TextField text={props.firstName} style={styles.textBox} type={EXTRA_TYPE} />
        </View>
        <View style={styles.BoxOne}>
            <TextField text={props.lastName} style={styles.textBox} type={EXTRA_TYPE}/>
        </View>
        <View style={styles.BoxOne}>
            <TextField text={props.cedula} style={styles.textBox} type={EXTRA_TYPE}/>
        </View>
        <View style={styles.BoxOne}>
            <TextField text={props.email} style={styles.textBox} type={EXTRA_TYPE}/>
        </View>
        <View style={styles.BoxOne}>
            <TextField text={props.address} style={styles.textBox} type={EXTRA_TYPE}/>
        </View>
        <View style={styles.BoxOne}>
            <TextField text={props.cellphone} style={styles.textBox} type={EXTRA_TYPE}/>
        </View>
        <View style={styles.BoxOne}>
            {props.isEdit ?
                <Button text="Editar" onPress={props.onPress} /> :
                <TextField text="ACCION" style={styles.textBox} type={EXTRA_TYPE}/>
            }
        </View>
    </View>
);

ItemList.propTypes = {
    /**
     * Valor del id del cliente.
     */
    id: PropTypes.any,
    /**
     * Nombre del cliente.
     */
    firstName: PropTypes.string,
    /**
     * Apellido del cliente.
     */
    lastName: PropTypes.string,
    /**
     * Cedula del cliente.
     */
    cedula: PropTypes.string,
    /**
     * Correo del cliente .
     */
    email: PropTypes.string,
    /**
     * Direccion del cliente.
     */
    address: PropTypes.string,
    /**
     * Telefono del cliente.
     */
    cellphone: PropTypes.string,
    /**
     * Permite indicar si se editara el cliente.
     */
    isEdit: PropTypes.bool,
    /**
     * Funcion que edita el cliente.
     */
    onPress: PropTypes.func,
};

ItemList.defaultProps = {
    id: 'ID',
    firstName: 'NOMBRE',
    lastName: 'APELLIDO',
    cedula: 'CEDULA',
    email: 'EMAIL',
    address: 'DIRECCION',
    cellphone: 'TELEFONO',
    isEdit: false,
    onPress: () => {},
};

const Component = (props) => {
    let history = useHistory();

    const toCustomerEdit = (id) => {
        history.push(`/customer/${id}`);
    };

    return (
        <View style={styles.container}>
            <ItemList />
            {props.customers.map((customer) =>
                <ItemList
                    key={`Customer${customer.id}`}
                    isEdit 
                    {...customer} 
                    onPress={() => toCustomerEdit(customer.id)} 
                />)}
        </View>
    );
};

Component.propTypes = {
    /**
     * Array de clientes.
     */
    customers: PropTypes.array,
};

Component.defaultProps = {
    customers: [],
};

export default Component;