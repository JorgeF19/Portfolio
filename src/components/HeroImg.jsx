import styled from "styled-components";

const HeroImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-height: 100vh;
  z-index: 0;
  transform-origin: bottom right;

  /* Escalado fluido desde 1224px hacia abajo */
  transform: scale(
    clamp(0.6, 0.2 + (100vw - 360px) / (1224px - 360px) * 0.65, 1)
  );

  /* Altura dinámica basada en el viewport */
  max-height: clamp(
    70vh,
    60vh + (100vw - 360px) / (1224px - 360px) * 40vh,
    100vh
  );

  @media (min-width: 1225px) {
    transform: scale(1);
    max-height: 100vh;
  }
`;
function HeroImg({ src, alt }) {
  return <HeroImage src={src} alt={alt} />;
}

export default HeroImg;
