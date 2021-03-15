import React, {useEffect} from 'react';
import {useLogin, useUser} from '../../../../kernel';

import Form from './components/form';

/**
 * Este componente permite hacer login, guardar la informacion del usuario en el storage y navegar al listado de los clientes.
 */
const Login = () => {
    const {user} = useUser();
    const hook = useLogin();

    useEffect(() => {
        if (user) {
            // logged user
        }
    }, [user]);

    return <Form {...hook} />;
};

export default Login;