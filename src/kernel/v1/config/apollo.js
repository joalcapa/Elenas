import {ApolloClient, InMemoryCache} from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'https://onboarding-redesign.dev.elenas.la/gql/',
    cache: new InMemoryCache()
});

export default apolloClient;