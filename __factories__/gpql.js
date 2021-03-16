import {LOGIN} from '../src/kernel/v1/gql/mutations';
import {customers} from './customers';

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
];