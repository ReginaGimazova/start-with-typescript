import {gql} from "@apollo/client";

export default gql`
  mutation createCard($text: String!){
    createCard(text: $text){
      id
      text
    }
  }
`;