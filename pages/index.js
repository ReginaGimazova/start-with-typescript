import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/molecules/Card';
import MainTemplate from '../components/templates/MainTemplate';
import useCards from '../hooks/useCards';
import CardForm from '../components/molecules/CardForm';
import useCardAdded from '../hooks/useCardAdded';
import useRemoveCard from '../hooks/useRemoveCard';
import useCardRemoved from "../hooks/useCardRemoved";

const CardWrapper = styled.div`
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const Home = () => {
  const { cards, loading, error } = useCards();
  const { error: removeError, deleteCard } = useRemoveCard();
  const { loading: addedCardLoading, error: addedCardError, addedCard } = useCardAdded();
  const { removedCardId } = useCardRemoved();

  const [currentCards, setCurrentCards] = useState([]);

  const onCardRemove = async (cardId) => {
    await deleteCard(cardId);
  };

  useEffect(() => {
    if (cards) {
      setCurrentCards(cards);
    }
  }, [cards]);

  useEffect(() => {
    if (addedCard) {
      setCurrentCards([...currentCards, addedCard]);
    }
  }, [addedCard]);

  useEffect(() => {
    if (removedCardId) {
      const updatedCards = currentCards.filter(({ id }) => +id !== +removedCardId);
      setCurrentCards(updatedCards);
    }
  }, [removedCardId]);

  return (
    <MainTemplate loading={loading}>
      {currentCards.map(
        (card) =>
          card && (
            <CardWrapper key={card.id}>
              <Card text={card.text} onCardRemove={() => onCardRemove(card.id)} />
            </CardWrapper>
          ),
      )}
      <CardForm />
    </MainTemplate>
  );
};

export default Home;
