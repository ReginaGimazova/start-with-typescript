import Card from "../components/molecules/Card";
import MainTemplate from "../components/templates/MainTemplate";
import useCards from "../hooks/useCards";

const Home = () => {
  const {cards, loading, error} = useCards();

  return (
    <MainTemplate>
      {cards.map(card => card && (
        <Card text={card.text} key={card.id} />
      ))}
    </MainTemplate>
  )
}

export default Home