import {gql} from "@apollo/client";

export default gql`
  mutation removeCard($id: ID!){
    removeCard(id: $id){
      id
      text
    }
  }
`;