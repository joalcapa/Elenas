import {LOGIN, CREATE_CLIENT, UPDATE_CLIENT} from '../src/kernel/v1/gql/mutations';
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
                clientsSearch: {
                    __typename: 'ClientPagination',
                    currentPage: 0,
                    totalPages: 1,
                    results: [
                        {
                            ...customers[0],
                            city: 'Test city',
                            state: {
                                id: 1,
                                name: 'Test state',
                                shortCode: 'Test ShortCode',
                                cities: [
                                    {
                                        id: 3,
                                        name: 'Test city',
                                    },
                                ],
                            },
                        },
                        {
                            ...customers[1],
                            city: 'Test city',
                            state: {
                                id: 1,
                                name: 'Test state',
                                shortCode: 'Test ShortCode',
                                cities: [
                                    {
                                        id: 3,
                                        name: 'Test city',
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        },
    },
    {
        request: {
            query: CLIENTS_SEARCH,
            variables: {
                ids: [1],
            },
        },
        result: {
            data: {
                clientsSearch: {
                    __typename: 'ClientPagination',
                    currentPage: 0,
                    totalPages: 1,
                    results: [
                        {
                            ...customer,
                            city: 'Test city',
                            state: {
                                id: 1,
                                name: 'Test state',
                                shortCode: 'Test ShortCode',
                                cities: [
                                    {
                                        id: 3,
                                        name: 'Test city',
                                    },
                                ],
                            },
                        }
                    ],
                },
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
                    __typename: 'Client',
                    ...customer,
                },
            },
        },
    },
    {
        request: {
            query: UPDATE_CLIENT,
            variables: {
                id: 1,
                input: {
                    firstName: 'Test first name',
                    lastName: 'Test last name',
                    email: 'client.email',
                    cedula: '1000000',
                    cellphone: '+3500000',
                    address: {
                        streetAddress: 'Test address',
                        city: 'Test city',
                        cityId: 3,
                        stateShortCode: 'Test ShortCode',
                        stateId: 1,
                        country: 'Test country',
                    },
                },
            },
        },
        result: {
            data: {
                updateClient: {
                    __typename: 'Client',
                    ...customer,
                },
            },
        },
    },
];