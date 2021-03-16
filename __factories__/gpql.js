import {LOGIN, CREATE_CLIENT} from '../src/kernel/v1/gql/mutations';
import {STATES, CLIENTS_SEARCH} from '../src/kernel/v1/gql/queries';

import {customers} from './customers';
import {states} from './states';

const customer = customers[0];

export const responseGpql = [
    {
        request: {
            query: LOGIN,
            variables: {
                cellphone: customer.cellphone,
                password: 'password',
            },
        },
        result: {
            data: {
                login: {
                    token: 'auth token',
                    user: customer,
                },
            },
        },
    },
    {
        request: {
            query: LOGIN,
            variables: {
                cellphone: customer.cellphone,
                password: 'other password',
            },
        },
        result: {
            data: {
                login: {
                    __typename: 'ValidationErrors',
                },
            },
        },
    },
    {
        request: {
            query: STATES,
        },
        result: {
            data: {
                states: states,
            },
        },
    },
    {
        request: {
            query: CLIENTS_SEARCH,
        },
        result: {
            data: {
                clientsSearch: customers,
            },
        },
    },
    {
        request: {
            query: CLIENTS_SEARCH,
            variables: {
                ids: [customer.id]
            }
        },
        result: {
            data: {
                clientsSearch: [customer],
            },
        },
    },
    {
        request: {
            query: CREATE_CLIENT,
            variables: {
                input: {
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    email: customer.email,
                    cedula: customer.cedula,
                    cellphone: customer.cellphone,
                    address: {
                        streetAddress: 'Test streetAddress',
                        city: 'Test city',
                        cityId: 1,
                        stateShortCode: 'Test ShortCode',
                        stateId: 2,
                        country: 'Test Country',
                    },
                },
            },
        },
        result: {
            data: {
                createClient: {
                    ...customer,
                },
            },
        },
    },
];