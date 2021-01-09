import {useSubscription} from "@apollo/client";
import cardAdded from "../graphql/subscriptions/cardAdded";

const useCardAdded = () => {
  const {data, loading} = useSubscription(cardAdded);
  console.log(data)
};

export default useCardAdded;