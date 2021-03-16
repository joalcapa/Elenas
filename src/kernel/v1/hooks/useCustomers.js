import {useState, useCallback, useEffect} from 'react';
import {useMutation, useQuery} from '@apollo/client';

//import useStates from './useStates';
import {CREATE_CLIENT, UPDATE_CLIENT} from '../gql/mutations';
import {CLIENTS_SEARCH} from '../gql/queries';

const useCustomers = (isEdit = false, onSuccessful = () => {}, customerId = '') => {
    //const {states} = useStates();
    const clientsSearch = useQuery(CLIENTS_SEARCH, customerId !== '' ? {variables: {ids: [parseInt(customerId)]}} : null);
    const [CreateClient, resultCreateClient] = useMutation(CREATE_CLIENT);
    const [UpdateClient, resultUpdateClient] = useMutation(UPDATE_CLIENT);

    const [isCustomerCreate, setCustomerCreate] = useState(false);
    const [isCustomerEdit, setCustomerEdit] = useState(false);
    const [isAddressSelect, setAddressSelect] = useState(false);
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
    const [stateName, setStateName] = useState('');
    const [country, setCountry] = useState('');
    const [stateId, setStateId] = useState(0);
    const [isError, setError] = useState(false);
    const [statesForm, setStatesForm] = useState([]);
    const [citiesForm, setCitiesForm] = useState([]);

    useEffect(() => {
        console.log('Cs: ', clientsSearch);
        if (
            isEdit &&
            clientsSearch &&
            clientsSearch.data &&
            clientsSearch.data.clientsSearch &&
            clientsSearch.data.clientsSearch.results
        ) {
            const client = clientsSearch.data.clientsSearch.results[0];
            changeFirstName(client.firstName);
            changeLastName(client.lastName);
            changeCellphone(client.cellphone);
            changeEmail('client.email');
            changeCedula(client.cedula);
            changeStateId(client.state.id);
            changeStateName(client.state.name);
            changeStreetAddress(client.address);
            changeStateShortCode(client.state.shortCode);

            setCitiesForm(
                client.state.cities.map((data) => {
                    if (data.name === client.city) {
                        changeCityId(data.id);
                        changeCity(data.name);
                    }

                    return {
                        ...data,
                        label: data.name,
                        value: data.id,
                    };
                })
            );
        }
    }, [clientsSearch]);

    /*useEffect(() => {
        if (statesForm.length === 0) {
            setStatesForm(
                states.map((stateForm) => {
                    return {
                        ...stateForm,
                        label: stateForm.name,
                        value: stateForm.id,
                    };
                })
            );
        }
    }, [states, statesForm]);*/

    useEffect(() => {
        if (
            resultCreateClient &&
            resultCreateClient.data &&
            resultCreateClient.data.createClient
        ) {
            onSuccessful();
            setCustomerCreate(true);
        }
    }, [resultCreateClient]);

    useEffect(() => {
        if (
            resultUpdateClient &&
            resultUpdateClient.data &&
            resultUpdateClient.data.updateClient
        ) {
            onSuccessful();
            setCustomerEdit(true);
        }
    }, [resultUpdateClient]);

    const onBack = () => {
        setAddressSelect(false);
    };

    const onSelectStateForm = (selectState) => {
        setCitiesForm(
            selectState.cities.map((data) => {
                return {
                    ...data,
                    label: data.name,
                    value: data.id,
                };
            })
        );
        setStateShortCode(selectState.shortCode);
        setStateId(selectState.id);
        changeStateName(selectState.name);
        setCityId(0);
        setCity('');
    };

    const onSelectCityForm = (citySelect) => {
        setCity(citySelect.name);
        setCityId(citySelect.id);
    };

    const changeCountry = (value) => {
        setCountry(value);
    };

    const changeStateName = (value) => {
        setStateName(value);
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

    const nextAddressSelect = () => {
        setAddressSelect(true);
    };

    const nextForm = () => {
        setAddressSelect(false);
    };

    const createCustomer = useCallback(async () => {
            try {
                if (isEdit) {
                    await UpdateClient({
                        variables: {
                            id: parseInt(customerId),
                            input: {
                                firstName,
                                lastName,
                                email,
                                cellphone,
                                cedula,
                                address: {
                                    streetAddress,
                                    city,
                                    cityId,
                                    stateShortCode,
                                    stateId,
                                    country,
                                },
                            },
                        },
                    });
                } else {
                    await CreateClient({
                        variables: {
                            input: {
                                firstName,
                                lastName,
                                email,
                                cellphone,
                                cedula,
                                address: {
                                    streetAddress,
                                    city,
                                    cityId,
                                    stateShortCode,
                                    stateId,
                                    country,
                                },
                            },
                        },
                    });
                }
            } catch (error) {
                setError(true);
            }
    }, [
        isEdit,
        firstName,
        lastName,
        cedula,
        email,
        cellphone,
        city,
        cityId,
        stateShortCode,
        stateId,
        country,
        streetAddress,
        CreateClient,
    ]);

    return {
        customers:
            clientsSearch &&
            clientsSearch.data &&
            clientsSearch.data.clientsSearch &&
            clientsSearch.data.clientsSearch.results ?
                clientsSearch.data.clientsSearch.results : [],
        statesForm,
        citiesForm,
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
        stateName,
        isValidForm: (
            firstName &&
            lastName &&
            cedula &&
            email &&
            cellphone &&
            !isError
        ),
        isValidAddressForm: (
            streetAddress &&
            country &&
            stateName &&
            city &&
            !isError
        ),
        isCustomerCreate,
        isCustomerEdit,
        isAddressSelect,
        nextForm,
        nextAddressSelect,
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
        onSelectStateForm,
        onSelectCityForm,
        createCustomer,
        onBack,
    };
};

export default useCustomers;