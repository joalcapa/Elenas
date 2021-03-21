import {CLIENT_FIELDS} from '../gql/fragments';

export const updateCacheCreateClient = {
    update(cache, {data: {createClient}}) {
        cache.modify({
            fields: {
                clientsSearch(existingClients = []) {
                    const newClientRef = cache.writeFragment({
                        data: createClient,
                        fragment: CLIENT_FIELDS,
                    });

                    return {
                        ...existingClients,
                        results: [
                            newClientRef,
                            ...existingClients.results
                        ],
                    };
                }
            }
        });
    }
};