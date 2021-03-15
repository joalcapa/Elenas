import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

import TextField, {EXTRA_TYPE} from '../../../../components/commons/TextField';
import Button from '../../../../components/commons/Button';

import styles from './styles';

const ItemList = (props) => (
    <View style={styles.contain}>
        <View style={styles.BoxOne}>
            <TextField text={props.id} style={styles.textBox} type={EXTRA_TYPE}/>
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
    id: PropTypes.any,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    cedula: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    cellphone: PropTypes.string,
    isEdit: PropTypes.bool,
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

const Component = (props) => (
        <View style={styles.container}>
            <ItemList />
            {props.customers.map((customer) =>
                <ItemList {...customer} onPress={() => {}} />)}
        </View>
);

Component.propTypes = {
    customers: PropTypes.array,
};

Component.defaultProps = {
    customers: [],
};

export default Component;