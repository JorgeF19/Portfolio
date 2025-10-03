import styled from "styled-components";

const Container = styled.div`
  background: #bcd9ffd5;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  width: fit-content;
  white-space: nowrap;
`;

const Text = styled.p`
  margin: 0;
  color: #0e0d3b;
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  text-align: center;
`;

export default function EmailMessage({ text }) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}
