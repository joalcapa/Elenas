import {gql} from '@apollo/client';

import {AUTH_FIELDS, CLIENT_FIELDS} from './fragments';

export const LOGIN = gql`
  ${AUTH_FIELDS}
  mutation Login($cellphone: String!, $password: String!) {
    login(cellphone: $cellphone, password: $password) {
      ...authFields
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

export const UPDATE_CLIENT = gql`
  ${CLIENT_FIELDS}
  mutation UpdateClient($id: Int!, $input: ClientInput!) {
    updateClient(id: $id, input: $input) {
      ...clientFields
    }
  }
`;