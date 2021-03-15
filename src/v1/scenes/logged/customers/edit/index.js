import React from 'react';

import BaseCustomer from '../BaseCustomers';
import {Create} from '../create';

/**
 * Este componente permite editar un cliente.
 */
const Edit = () => <Create isEdit />;

export default BaseCustomer(Edit, 'Editar Cliente', {isListButton: true});