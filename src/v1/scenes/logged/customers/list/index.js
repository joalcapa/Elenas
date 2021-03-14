import React from 'react';
import {View} from 'react-native';

import BaseCustomer from '../baseCustomers';
import Button from '../../../../components/commons/Button';

import style from './styles';

const List = () => {
    return (
        <View style={style.container}>
            <View style={style.button_content}>
                <Button text='CREAR CLIENTE'/>
            </View>
        </View>
    );
};

export default BaseCustomer(List, 'Lista de clientes');