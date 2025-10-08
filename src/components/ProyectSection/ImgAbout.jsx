import styled from "styled-components";

const ImgAbout = styled.img`
  grid-column: 8 / 12;
  grid-row: 3 / 12;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;

  @media (max-width: 1024px) {
    grid-column: 5 / 7;
  }

  @media (max-width: 900px) {
    grid-column: 3 / 5;
    grid-row: 2 / 6;
  }
  @media (max-width: 768px) {
    grid-column: 1 / 4;
    grid-row: 2 / 6;
  }
`;

function ImgAboutComponent({ src, alt }) {
  return <ImgAbout src={src} alt={alt} />;
}

export default ImgAboutComponent;
