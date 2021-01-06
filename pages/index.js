import CommentCard from "../components/molecules/CommentCard";
import MainTemplate from "../components/templates/MainTemplate";
import TextArea from "../components/atoms/TextArea";

const Home = () => {
  return (
    <MainTemplate>
      <h3>Hello</h3>
      <CommentCard />
      <TextArea />
    </MainTemplate>
  )
}

export default Home