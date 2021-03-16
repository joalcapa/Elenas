import {useState, useCallback, useEffect} from 'react';
import {useMutation} from '@apollo/client';

import config from '../config';
import {LOGIN} from '../gql/mutations';

const useLogin = () => {
    const {updateUser, user} = config.getInstance().getConfiguration().useUser();
    const [cellphone, setCellphone] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    const [isSuccesfull, setSuccesfull] = useState(false);
    const [Login, result] = useMutation(LOGIN);

    useEffect(() => {
        if (result && result.data && !user) {
            if (result.data.login && result.data.login.user) {
                setSuccesfull(true);
                updateUser({
                    ...result.data.login.user,
                    authToken: result.data.login.token,
                });
            }

            if (
                result.data.login &&
                result.data.login.__typename &&
                result.data.login.__typename === 'ValidationErrors'
            ) {
                setError(true);
            }
        }
    }, [result, user]);

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
            Login({variables: {cellphone, password}});
        } catch (error) {
            setError(true);
        }
    }, [cellphone, password]);

    return {
        isSuccesfull,
        cellphone,
        password,
        isValidForm: (cellphone !== '' && password !== '' && !isError),
        isError,
        changeCellphone,
        changePassword,
        login,
    };
};

export default useLogin;