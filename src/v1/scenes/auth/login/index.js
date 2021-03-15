import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useLogin, useUser} from '../../../../kernel';

import Form from './components/form';

/**
 * Este componente permite hacer login, guardar la informacion del usuario en el storage y navegar al listado de los clientes.
 */
const Login = () => {
    const {user} = useUser();
    let history = useHistory();
    const hook = useLogin();

    useEffect(() => {
        if (user) {
            history.push("/");
        }
    }, [user]);

    return <Form {...hook} />;
};

export default Login;