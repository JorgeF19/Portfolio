import styled from "styled-components";
import BannerTitle from "../BannerTitle";
const Card = styled.div`
  background-image: url("/${(props) => props.backgroundImage}");
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 20rem;
  width: auto;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 1rem;
  position: relative;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  /* Overlay - oculto por defecto */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.3) 80%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 10px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Efectos en hover */
  &:hover {
    box-shadow: 0 0 10px 2px rgba(188, 217, 255, 0.25);
  }

  &:hover::before {
    opacity: 1;
  }
`;

const StyledBannerTitle = styled(BannerTitle)`
  position: relative;
  z-index: 2;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

function ProyectCard({ image, title, style }) {
  return (
    <Card backgroundImage={image} style={style}>
      <StyledBannerTitle>{title}</StyledBannerTitle>
    </Card>
  );
}

export default ProyectCard;
