import {useQuery} from '@apollo/client';

import {STATES} from '../gql/queries';

const useStates = () => {
    const {data} = useQuery(STATES);

    return {
        states: data && data.states ? data.states : [],
    };
};

export default useStates;