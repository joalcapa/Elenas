import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MockedProvider} from '@apollo/client/testing';

import config from '../../../src/kernel/v1/config';
import {responseGpql} from '../../../__factories__/gpql';

const App = (props) => {
    config.getInstance().setConfiguration({
        AsyncStorage,
        useUser: () => {
            return {
                user: null,
                userIsReady: true,
                updateUser: (newUser) => {
                    localStorage.setItem('USER', JSON.stringify(newUser));
                },
            }
        },
        env: {},
    });

    return (
        <MockedProvider mocks={responseGpql}>
            {props.children}
        </MockedProvider>
    );
}

export default App;