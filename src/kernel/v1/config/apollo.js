import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

import config from './index';

const httpLink = createHttpLink({
    uri: 'https://onboarding-redesign.dev.elenas.la/gql/',
});

const authLink = setContext(async (_, {headers}) => {
    let authHeaders = {headers};

    try {
        const {storage} = config.getInstance().getConfiguration();
        const user = JSON.parse(await storage.getItem('USER'));

        if (user) {
            authHeaders = {
                headers: {
                    ...headers,
                    authorization: user.authToken ? `Token ${user.authToken}` : '',
                },
            };
        }
    } catch (error) {}

    return authHeaders;
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default apolloClient;