import styled from "styled-components";

const ContainerSubtitle = styled.div`
  position: relative;
  min-width: 100%;
  display: flex;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #fff 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

function HeroSubtitleContainer({ children }) {
  return <ContainerSubtitle>{children}</ContainerSubtitle>;
}

export default HeroSubtitleContainer;
