import React, {createContext, useCallback, useContext, useMemo} from 'react';
import PropTypes from 'prop-types';

import {USER_KEY, USER_DEFAULT_VALUE} from './state';

const user = (useStorage) => {
    const UserContext = createContext();
    const {Provider} = UserContext;

    const UserProvider = (props) => {
        const [user, updateUser, hydrated] = useStorage(
            USER_KEY,
            USER_DEFAULT_VALUE,
        );

        const value = useMemo(
            () => ({
                user,
                updateUser,
                userIsReady: hydrated,
            }),
            [user, updateUser, hydrated],
        );

        return <Provider value={value} {...props} />;
    };

    UserProvider.propTypes = {
        children: PropTypes.shape({}).isRequired,
    };

    const useUser = () => {
        const context = useContext(UserContext);

        if (!context) {
            throw new Error('useUser must be used within a UserProvider');
        }

        const {user, updateUser: update, ...rest} = context;

        const updateUser = useCallback(
            (newValue) => {
                let userPayload = {};
                update(userPayload);
            },
            [user, update],
        );

        const logOut = () => {
            update(null);
        };

        return {
            ...rest,
            user,
            updateUser,
            logOut,
        };
    };

    return {
        UserProvider,
        useUser,
    };
};

export default user;