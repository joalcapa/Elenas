import React, {useState} from 'react';
import PropTypes from 'prop-types';

import BaseCustomer from '../BaseCustomers';
import TextField, {BIG_TYPE} from '../../../../components/commons/TextField';
import {useCustomers} from '../../../../../kernel';
import {Form, AddressForm} from './components';

/**
 * Este componente permite crear o editar un cliente.
 */
export const Create = (props) => {
    const {isEdit} = props;
    const [isNewCustomer, setNewCustomer] = useState(false);
    const hook = useCustomers(isEdit, () => setNewCustomer(true));
    const {isAddressSelect} = hook;

    if (isNewCustomer) {
        return (
            <TextField
                text={
                    isEdit ?
                        'Se ha actualizado satisfactoriamente' :
                        'Se ha creado satisfactoriamente'
                }
                type={BIG_TYPE}
            />
        );
    }

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