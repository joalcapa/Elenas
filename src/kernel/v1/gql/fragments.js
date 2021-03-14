import {gql} from '@apollo/client';

export const AUTH_FIELDS = gql`
  fragment authFields on AuthInfo {
    token
    user {
        email
        firstName
        lastName
        cedula
        cellphone
    }
  }
`;