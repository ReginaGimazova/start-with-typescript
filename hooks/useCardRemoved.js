import {useSubscription} from "@apollo/client";
import cardRemoved from "../graphql/subscriptions/cardRemoved";

const useCardRemoved = () => {
  const {data, loading, error} = useSubscription(cardRemoved);
  return {
    removedCardId: data?.cardRemoved?.id || undefined,
    loading,
    error
  }
};

export default useCardRemoved