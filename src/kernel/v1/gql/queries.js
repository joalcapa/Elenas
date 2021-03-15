import {gql} from '@apollo/client';

export const STATES = gql`
  query {
    states {
        id
        shortCode
        displayName
        name
        shippingZone {
            name
            cost
        }
        cities {
            id
            shortCode
            displayName
            name
            codAvailable
            isCapital
        }
    }
  }
`;