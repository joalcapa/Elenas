import {LOGIN} from '../src/kernel/v1/gql/mutations';
import {STATES, CLIENTS_SEARCH} from '../src/kernel/v1/gql/queries';

import {customers} from './customers';
import {states} from './states';

export const responseGpql = [
    {
        request: {
            query: LOGIN,
            variables: {
                cellphone: customers[0].cellphone,
                password: 'password',
            },
        },
        result: {
            data: {
                login: {
                    token: 'auth token',
                    user: customers[0],
                },
            },
        },
    },
    {
        request: {
            query: LOGIN,
            variables: {
                cellphone: customers[0].cellphone,
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
                ids: [customers[0].id]
            }
        },
        result: {
            data: {
                clientsSearch: [customers[0]],
            },
        },
    },
];