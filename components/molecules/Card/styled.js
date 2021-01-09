import styled from 'styled-components';

export const StyledCard = styled.section`
  position: relative;
  padding: 10px 20px;
  border: 1px solid lightgray;
  border-radius: 3px;
  box-shadow: 2px 3px 5px lightgrey;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const CloseIcon = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  opacity: 0.3;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  };
  
  &:before {
    transform: rotate(45deg);
  }
  
  &:after {
    transform: rotate(-45deg);
  };

  &:before, &:after {
    position: absolute;
    left: 10px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }
`;
