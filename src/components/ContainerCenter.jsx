import styled from "styled-components";

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
`;

function ContainerCenterComponent({ children, style }) {
  return <ContainerCenter style={style}>{children}</ContainerCenter>;
}

export default ContainerCenterComponent;
