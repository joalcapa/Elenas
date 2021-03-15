import React from 'react';
import {useParams} from 'react-router-dom';

import BaseCustomer from '../BaseCustomers';
import {Create} from '../create';

/**
 * Este componente permite editar un cliente.
 */
const Edit = () => {
    let {id} = useParams();
    return <Create isEdit customerId={id} />;
};

export default BaseCustomer(Edit, 'Editar Cliente', {isListButton: true});