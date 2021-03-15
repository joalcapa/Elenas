import React from 'react';

import BaseCustomer from '../BaseCustomers';
import Component from './Component';
import {useCustomers} from '../../../../../kernel';

/**
 * Este componente permite listar los clientes.
 */
const List = () => {
    const {customers} = useCustomers();
    return <Component customers={customers} />;
};

export default BaseCustomer(List, 'Lista de clientes', {isCreateButton: true});