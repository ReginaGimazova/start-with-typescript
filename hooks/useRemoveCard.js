import {useMutation} from "@apollo/client";
import removeCardMutation from "../graphql/mutations/removeCard";

const useRemoveCard = () => {
  const [removeCard, {loading, error, data}] = useMutation(removeCardMutation);

  const deleteCard = async id => {
    await removeCard({variables: {id}});
  }

  return {loading, error, deleteCard, removedCardId: data?.id || undefined}
}

export default useRemoveCard