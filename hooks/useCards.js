import {useQuery} from "@apollo/client";
import getCards from "../graphql/queries/getCards";

const useCards = () => {
  const {data, loading, error} = useQuery(getCards);

  return {
    cards: data?.cards || [],
    loading,
    error
  }
}

export default useCards;