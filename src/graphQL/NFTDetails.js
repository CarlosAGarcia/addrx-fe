import {
  gql
} from "@apollo/client";

export const GET_PRICE = gql`
    query Query {
        getPrice
    }
`;
