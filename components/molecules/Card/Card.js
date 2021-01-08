import {StyledCard, Text} from "./styled";

const Card = ({text}) => {
  return (
    <StyledCard>
      <Text>{text}</Text>
    </StyledCard>
  )
};

export default Card;