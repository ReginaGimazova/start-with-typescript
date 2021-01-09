import {gql} from "@apollo/client";

export default gql`
  subscription onCardAdded{
    cardAdded{
      id
      text
    }
  }
`;