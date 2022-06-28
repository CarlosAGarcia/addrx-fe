import {
  gql
} from "@apollo/client";

export const GET_PRICE = gql`
    query Query {
        getPrice
    }
`;

export const GET_DETAILS = gql`
query Query($address: String!) {
  getDetails(address: $address) {
    id
    name,
    symbol
    token_address
    contract_type
    synced_at
  }
}
`