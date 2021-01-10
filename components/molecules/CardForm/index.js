import {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button";
import useCreateCard from "../../../hooks/useCreateCard";

const Form = styled.form`
  margin-top: 30px;
`;

const customButtonStyles = () => css`
  margin-top: 10px;
`;

const CardForm = () => {
  const {saveCard, loading, error} = useCreateCard();
  const [cardText, setCardText] = useState('');

  const onSaveCard = async () => {
    await saveCard(cardText);
    setCardText('')
  };

  return (
    <Form>
      <TextArea cardText={cardText} setCardText={setCardText} />
      <Button customStyles={customButtonStyles} onClick={onSaveCard}>Add card</Button>
    </Form>
  )
};

export default CardForm;