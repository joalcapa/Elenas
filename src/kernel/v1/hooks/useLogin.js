import {useState, useCallback, useEffect} from 'react';
import {useMutation} from '@apollo/client';

import {LOGIN} from '../gql/mutations';

const useLogin = () => {
    const [cellphone, setCellphone] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    const [Login, result] = useMutation(LOGIN);

    useEffect(() => {
        if (result && result.data) {
            console.log('Data: ', result.data);
        }
    }, [result]);

    const changeCellphone = (value) => {
      setCellphone(value);
      setError(false);
    };

    const changePassword = (value) => {
      setPassword(value);
      setError(false);
    };

    const login = useCallback(async () => {
        try {
            if (cellphone && password) {
                console.log('Vamos a enviar: ', {variables: {cellphone, password}});
                Login({variables: {cellphone, password}});
            }
        } catch (error) {
            setError(true);
        }
    }, [cellphone, password]);

    return {
        cellphone,
        password,
        isValidForm: (cellphone && password && !isError),
        changeCellphone,
        changePassword,
        login,
    };
};

export default useLogin;