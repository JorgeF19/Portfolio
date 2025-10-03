import styled from "styled-components";

const Container = styled.div`
  grid-column: 2 / 12;
  grid-row: 3 / 12;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
  justify-items: stretch;

  /* Responsive para pantallas pequeñas */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

function ProyectsContainer({ children }) {
  return <Container>{children}</Container>;
}
export default ProyectsContainer;
