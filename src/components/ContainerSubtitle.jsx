import styled from "styled-components";

const Container = styled.div`
  z-index: 1;
  grid-column: 2 / 5;
  grid-row: 8 / 12;
  text-align: center;

  @media (max-width: 1224px) {
    grid-column: 2 / 6;
  }
  @media (max-width: 1024px) {
    grid-column: 2 / 4;
  }
  @media (max-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 6 / 9;
  }
`;
function ContainerSubtitle({ children }) {
  return <Container>{children}</Container>;
}

export default ContainerSubtitle;
