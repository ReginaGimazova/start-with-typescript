import styled from "styled-components";

const Main = styled.main`
  width: 600px;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
`;

const MainTemplate = ({children}) => (
  <Main>
    {children}
  </Main>
);

export default MainTemplate;