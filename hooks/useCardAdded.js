import {useSubscription} from "@apollo/client";
import cardAdded from "../graphql/subscriptions/cardAdded";

const useCardAdded = () => {
  const {data, loading, error} = useSubscription(cardAdded);
  return {
    addedCard: data?.cardAdded || null,
    loading,
    error
  }
};

export default useCardAdded;