import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 12}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows || 12}, 1fr);
  gap: 2rem;
  padding: 3rem;
  background: ${(props) => props.background || "#0D293B"};
  color: white;
  height: ${(props) => props.height || "100vh"};
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  /* Tablet/Medium views - 6 columns */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
    padding: 2rem;
  }

  /* Mobile views - 3 columns */
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1.5rem;
  }
`;

function SectionComponent({
  background,
  children,
  columns = 12,
  rows = 12,
  height,
  ...props
}) {
  return (
    <Section
      background={background}
      columns={columns}
      rows={rows}
      height={height}
      {...props}
    >
      {children}
    </Section>
  );
}

export default SectionComponent;
