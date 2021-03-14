import React from 'react';
import {View} from 'react-native';

import BaseCustomer from '../baseCustomers';
import Button from '../../../../components/commons/Button';

import styles from './styles';

const List = () => {
    return (
        <View style={styles.container}>
        
        </View>
    );
};

export default BaseCustomer(List, 'Lista de clientes', {isCreateButton: true});