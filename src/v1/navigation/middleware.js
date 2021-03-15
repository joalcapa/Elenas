import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {useUser} from '../../kernel';

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

export default Middleware;