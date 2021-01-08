import {gql} from "@apollo/client";

export default gql`
  query getCards{
    cards{
      id,
      text
    }
  }
`;