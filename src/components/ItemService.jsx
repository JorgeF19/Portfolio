import styled from "styled-components";

const ItemServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;

  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.isVisible ? "0" : "5rem")});
  transition: opacity 0.4s ease, transform 0.4s ease;
  transition-delay: ${(props) => props.delay || "0s"};

  /* Bordes con gradiente usando pseudo-elementos */
  &::before {
    content: "";
    position: absolute;
    top: auto;
    right: 0;
    width: 1px;
    height: 90%;
    background: linear-gradient(
      180deg,
      rgba(188, 217, 255, 0) 0%,
      rgba(188, 217, 255, 1) 50%,
      rgba(188, 217, 255, 0) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    top: auto;
    left: 0;
    width: 1px;
    height: 90%;
    background: linear-gradient(
      180deg,
      rgba(188, 217, 255, 0) 0%,
      rgba(188, 217, 255, 1) 50%,
      rgba(188, 217, 255, 0) 100%
    );
  }
`;

const TitleService = styled.h2`
  color: #fff;
  font-family: "Lexend";
  font-size: 2.5rem;
  font-weight: 200;
  font-style: normal;
`;

const ImgItem = styled.img`
  width: 50%;
  height: auto;
`;

function ItemService({ img, title, style, isVisible = false, delay = "0s" }) {
  return (
    <ItemServiceContainer style={style} isVisible={isVisible} delay={delay}>
      <TitleService>{title}</TitleService>
      <ImgItem src={img} alt={title} />
    </ItemServiceContainer>
  );
}

export default ItemService;
