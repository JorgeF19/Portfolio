import { Children } from "react";
import styled from "styled-components";

const HeroTitle = styled.h1`
  color: #f7b801;
  font-family: Sora;
  font-size: 10rem;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
`;

function HeroText({ children, marginLeft, marginRight }) {
  return (
    <HeroTitle marginLeft={marginLeft} marginRight={marginRight}>
      {children}
    </HeroTitle>
  );
}
export default HeroText;
