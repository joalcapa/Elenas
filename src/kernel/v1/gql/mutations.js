import {gql} from '@apollo/client';

import {
  AUTH_FIELDS,
  CLIENTS_SEARCH_FIELDS,
  CLIENT_FIELDS,
} from './fragments';

export const LOGIN = gql`
  ${AUTH_FIELDS}
  mutation Login($cellphone: String!, $password: String!) {
    login(cellphone: $cellphone, password: $password) {
      ...authFields
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

export const CREATE_CLIENT = gql`
${CLIENT_FIELDS}
  mutation CreateClient($input: ClientInput!) {
    createClient(input: $input) {
      ...clientFields
    }
  }
`;