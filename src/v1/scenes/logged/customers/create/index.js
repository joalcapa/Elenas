import React from 'react';
import PropTypes from 'prop-types';

import BaseCustomer from '../BaseCustomers';
import {Form, AddressForm} from './components';
import {useCustomers} from '../../../../../kernel';

/**
 * Este componente permite crear un cliente.
 */
export const Create = (props) => {
    const {isEdit} = props;
    const hook = useCustomers(isEdit);
    const {isAddressSelect} = hook;

    if (isAddressSelect) {
        return <AddressForm {...hook} />;
    }

    return <Form {...hook} />;
};

Create.propTypes = {
    /**
     * Define si el componente funciona como editor de un cliente ya creado, en caso contrario creara un nuevo cliente.
     */
    isEdit: PropTypes.bool,
};

Create.defaultProps = {
    isEdit: false,
};

export default BaseCustomer(Create, 'Crear Cliente', {isListButton: true});