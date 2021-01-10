import {gql} from "@apollo/client";

export default gql`
  subscription onCardRemoved{
    cardRemoved{
      id
      text
    }
  }
`;