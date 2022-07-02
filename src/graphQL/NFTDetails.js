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
    holders {
      cursor
      page
      page_size
      status
      total
      result {
        name,
        symbol
        token_address
        contract_type
        synced_at
        token_id
        block_number
        block_number_minted
        token_uri
        metadata
        amount
      }
    }
  }
}
`