import React from 'react';
import PropTypes from 'prop-types';
import {ApolloProvider} from '@apollo/client';

import config from '../config';
import apolloClient from '../config/apollo';
import userContext from '../contexts/user';
import useStorageCreator from '../hooks/useStorageCreator';

const Kernel = (props) => {
    const {children, storage} = props;
    const useStorage = useStorageCreator(storage);
    const {UserProvider, useUser} = userContext(useStorage);

    config.getInstance().setConfiguration({
        storage,
        useUser,
        env: {},
    });

    return (
        <ApolloProvider client={apolloClient}>
            <UserProvider>
                {children}
            </UserProvider>
        </ApolloProvider>
    );
};

Kernel.propTypes = {
  children: PropTypes.any,
  storage: PropTypes.any,
};

export default Kernel;