import Section from "../components/Section";
import Subtitle from "../components/Subtitle";
import NormalText from "../components/NormalText";
import DinamicNumberComponent from "../components/DinamicNumber";
import ContainerCenterComponent from "../components/ContainerCenter";
import ImgAboutComponent from "../components/ProyectSection/ImgAbout";
import ContainerComponent from "../components/AboutSection/Conainter";
import ResponsiveContainer from "../components/ResponsiveContainer";
import styled from "styled-components";

// Contenedor personalizado con breakpoint específico para 900px
const StatsContainer = styled.div`
  grid-column: ${(props) => props.gridColumn};
  grid-row: ${(props) => props.gridRow};
  display: flex;

  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    grid-row: 10 / 12;
    grid-column: 2 / 5;
  }
  @media (max-width: 900px) {
    grid-column: 1 / 6;

    margin-bottom: ${(props) => props.mobileMargin || "0"};
  }
  @media (max-width: 768px) {
    grid-column: 1 / 4;
  }
`;
function AboutSection() {
  return (
    <Section id="about-section">
      <ContainerComponent>
        <Subtitle>About what I do</Subtitle>
        <NormalText fontSize="1.8rem">
          “I enjoy designing and building websites. Having friendly Co-workers
          and support each other becoming ideas into projects.”
        </NormalText>
      </ContainerComponent>
      <ImgAboutComponent src="AboutImage.png" alt="aboutImage" />

      <StatsContainer gridColumn="2 / 7" gridRow="8 / 12" mobileMargin="1rem">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "40%",
          }}
        >
          <DinamicNumberComponent targetNumber={1}>0</DinamicNumberComponent>
          <NormalText fontSize={"2rem"} style={{ marginTop: "0" }}>
            years of experience as developer
          </NormalText>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "40%",
          }}
        >
          <DinamicNumberComponent targetNumber={3}>0</DinamicNumberComponent>
          <NormalText fontSize={"2rem"} style={{ marginTop: "0" }}>
            Proyects
          </NormalText>
        </div>
      </StatsContainer>
    </Section>
  );
}

export default AboutSection;
