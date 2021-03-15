import {gql} from '@apollo/client';

import {CLIENTS_SEARCH_FIELDS} from './fragments';

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

export const CLIENTS_SEARCH = gql`
  ${CLIENTS_SEARCH_FIELDS}
  query ClientsSearch($page: Int, $perPage: Int, $term: String, $ids: [Int!]) {
    clientsSearch(page: $page, perPage: $perPage, term: $term, ids: $ids) {
      ...clientsSearchFields
    }
  }
`;