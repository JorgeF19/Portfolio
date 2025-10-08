import styled from "styled-components";

const NormalText = styled.p`
  color: white;
  font-family: "Lato";
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-style: normal;
  font-weight: 400;

  @media (max-width: 900px) {
    font-size: 1.6rem;
    font-weight: 500;
  }
  @media (max-width: 400px) {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
  }
`;
function NormalTextComponent({ children, fontSize, style }) {
  return (
    <NormalText fontSize={fontSize} style={style}>
      {children}
    </NormalText>
  );
}
export default NormalTextComponent;
