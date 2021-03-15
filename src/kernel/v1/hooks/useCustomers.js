import {useState, useCallback, useEffect} from 'react';
import {useMutation} from '@apollo/client';

import {CLIENTS_SEARCH, CREATE_CLIENT} from '../gql/mutations';

const useCustomers = () => {
    const [ClientsSearch, resultClientSearch] = useMutation(CLIENTS_SEARCH);
    const [CreateClient, resultCreateClient] = useMutation(CREATE_CLIENT);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cedula, setCedula] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [address, setAddress] = useState('');
    const [isError, setError] = useState(false);

    useEffect(() => {
        console.log('Data: ', resultCreateClient);
    }, [resultCreateClient]);

    const changeFirstName = (value) => {
        setFirstName(value);
        setError(false);
    };

    const changeLastName = (value) => {
        setLastName(value);
        setError(false);
    };

    const changeCedula = (value) => {
        setCedula(value);
        setError(false);
    };

    const changeEmail = (value) => {
        setEmail(value);
        setError(false);
    };

    const changeCellphone = (value) => {
        setCellphone(value);
        setError(false);
    };

    const changeAddress = (value) => {
        setAddress(value);
        setError(false);
    };

    const createCustomer = useCallback(async () => {
        try {
            await createCustomer({
                variables: {
                    input: {
                        firstName,
                        lastName,
                        email,
                        cellphone,
                        cedula,
                        address,
                    },
                },
            });
        } catch (error) {
            setError(true);
        }
    }, [firstName, lastName, cedula, email, cellphone, address]);

    return {
        firstName,
        lastName,
        cedula,
        email,
        cellphone,
        address,
        isError,
        isValidForm: (
            firstName &&
            lastName &&
            cedula &&
            email &&
            cellphone &&
            address &&
            !isError
        ),
        changeFirstName,
        changeLastName,
        changeCedula,
        changeEmail,
        changeCellphone,
        changeAddress,
        createCustomer,
    };
};

export default useCustomers;