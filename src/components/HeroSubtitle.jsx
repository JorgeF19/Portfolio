import styled from "styled-components";

const HeroSubtitle = styled.h3`
  color: #fff;
  font-family: Lexend;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export default HeroSubtitle;
