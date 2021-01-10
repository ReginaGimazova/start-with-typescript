import {useEffect, useState} from "react";
import styled from "styled-components";
import Card from "../components/molecules/Card";
import MainTemplate from "../components/templates/MainTemplate";
import useCards from "../hooks/useCards";
import CardForm from "../components/molecules/CardForm";
import useCardAdded from "../hooks/useCardAdded";
import useRemoveCard from "../hooks/useRemoveCard";

const CardWrapper = styled.div`
  &:not(:first-child){
    margin-top: 10px;
  }
`;

const Home = () => {
  const {cards, loading, error} = useCards();
  const {error: removeError, deleteCard} = useRemoveCard();
  const {loading: addedCardLoading, error: addedCardError, addedCard} = useCardAdded();

  const [currentCards, setCurrentCards] = useState([]);

  useEffect(() => {
    if (cards){
      setCurrentCards(cards)
    }
  }, [cards]);

  useEffect(() => {
    if (addedCard){
      setCurrentCards([...currentCards, addedCard])
    }
  }, [addedCard]);

  const onCardRemove = async cardId => {
    await deleteCard(cardId);
    const updatedCards = currentCards.filter(({id}) => +id !== +cardId);
    if (!removeError){
      setCurrentCards(updatedCards);
    }
  };

  return (
    <MainTemplate loading={loading}>
      {currentCards.map(card => card && (
        <CardWrapper key={card.id}>
          <Card text={card.text} onCardRemove={() => onCardRemove(card.id)}/>
        </CardWrapper>
      ))}
      <CardForm />
    </MainTemplate>
  )
}

export default Home