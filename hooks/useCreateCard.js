import {useMutation} from "@apollo/client";
import createCardMutation from "../graphql/mutations/createCard";

const useCreateCard = () => {
  const [createCard, {data, loading, error}] = useMutation(createCardMutation);

  const saveCard = async text => {
    await createCard({variables: {text}});
  }

  return {loading, error, saveCard, savedCard: data?.createCard || null}
}

export default useCreateCard;