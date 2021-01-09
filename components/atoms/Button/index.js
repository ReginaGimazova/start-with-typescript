import styled, {css} from "styled-components";

const StyledButton = styled.button(
  ({customStyles}) => css`
    display: block;
    min-width: 200px;
    margin: 0 0 0 auto;
    padding: 10px 20px;
    font-size: 1rem;
    border: 1px solid #adadad;
    background-color: white;
    cursor: pointer;
    ${customStyles && customStyles}
  `
);

const Button = ({children, onClick, customStyles}) => {
  const onSubmit = event => {
    event.preventDefault();
    onClick();
  };

  return (
    <StyledButton type='submit' onClick={onSubmit} customStyles={customStyles}>
      {children}
    </StyledButton>
  );
}

export default Button;