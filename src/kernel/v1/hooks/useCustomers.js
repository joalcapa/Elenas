import {useState, useCallback, useEffect} from 'react';
import {useMutation} from '@apollo/client';

import useStates from './useStates';
import {CLIENTS_SEARCH, CREATE_CLIENT} from '../gql/mutations';

const useCustomers = (isEdit = false) => {
    const {states} = useStates();
    //const [ClientsSearch, resultClientSearch] = useMutation(CLIENTS_SEARCH);
    const [CreateClient, resultCreateClient] = useMutation(CREATE_CLIENT);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cedula, setCedula] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [address, setAddress] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [cityId, setCityId] = useState(0);
    const [stateShortCode, setStateShortCode] = useState('');
    const [country, setCountry] = useState('');
    const [stateId, setStateId] = useState(0);
    const [isError, setError] = useState(false);

    useEffect(() => {
        console.log('Data: ', resultCreateClient);
    }, [resultCreateClient]);

    const changeCountry = (value) => {
        setCountry(value);
    };

    const changeStateId = (value) => {
        setStateId(value);
    };

    const changeStateShortCode = (value) => {
        setStateShortCode(value);
    };

    const changeCityId = (value) => {
        setCityId(value);
    };

    const changeCity = (value) => {
        setCity(value);
    };

    const changeStreetAddress = (value) => {
        setStreetAddress(value);
    };

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
                await CreateClient({
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
        states,
        firstName,
        lastName,
        cedula,
        email,
        cellphone,
        address,
        streetAddress,
        city,
        cityId,
        stateShortCode,
        stateId,
        country,
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
        changeCountry,
        changeStateId,
        changeStateShortCode,
        changeCity,
        changeCityId,
        changeStreetAddress,
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