import {CloseIcon, StyledCard, Text} from "./styled";

const Card = ({text, onCardRemove}) => {
  return (
    <StyledCard>
      <Text>{text}</Text>
      <CloseIcon onClick={onCardRemove}/>
    </StyledCard>
  )
};

export default Card;