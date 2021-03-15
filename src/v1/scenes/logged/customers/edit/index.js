import React from 'react';

import BaseCustomer from '../baseCustomers';
import {Create} from '../create';

const Edit = () => (<Create isEdit />);

export default BaseCustomer(Edit, 'Editar Cliente', {isListButton: true});