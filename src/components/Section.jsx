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
  overflow-x: hidden;
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
