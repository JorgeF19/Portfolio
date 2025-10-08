import styled from "styled-components";

const Container = styled.div`
  grid-column: 2 / 7;
  grid-row: 5 / 8;

  @media (max-width: 1024px) {
    grid-column: 2 / 6;
    line-height: 3rem;
    grid-row: 6 / 9;
  }
    @media (max-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 6 / 8;
`;

function ContainerComponent({ children }) {
  return <Container>{children}</Container>;
}
export default ContainerComponent;
