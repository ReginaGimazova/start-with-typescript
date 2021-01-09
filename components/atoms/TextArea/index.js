import {TextAreaStyled} from './styled';

const TextArea = ({cardText, setCardText}) => {
  const onChange = event => {
    event.preventDefault();
    setCardText(event.target.value)
  };

  return (
    <TextAreaStyled value={cardText} onChange={onChange}/>
  )
}

export default TextArea;