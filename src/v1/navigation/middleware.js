import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

import {useUser} from '../../kernel';

/**
 * Componente que permite renderizar un componente hijo siempre y cuando este logueado.
 */
const Middleware = (props) => {
    const {children} = props
    const {user, userIsReady} = useUser();
    let history = useHistory();
    
    useEffect(() => {
        if (userIsReady && !user) {
            history.push("/login");
        }
    }, [user, userIsReady]);

    if (!userIsReady || !user) {
        return null;
    }

    return children;
};

Middleware.propTypes = {
    /**
     * Componente hijo a mostrar si el usuario esta logueado.
     */
    children: PropTypes.any,
};

Middleware.defaultProps = {
    children: () => <></>,
};

export default Middleware;