import Section from "../components/section";
import Subtitle from "../components/subtitle";
import NormalText from "../components/NormalText";
import DinamicNumberComponent from "../components/DinamicNumber";
import ContainerCenterComponent from "../components/ContainerCenter";
function AboutSection() {
  return (
    <Section id="about-section">
      <div style={{ gridColumn: "2 / 7", gridRow: "5 / 8" }}>
        <Subtitle>About what I do</Subtitle>
        <NormalText fontSize="1.8rem">
          “I enjoy designing and building websites. Having friendly Co-workers
          and support each other becoming ideas into projects.”
        </NormalText>
      </div>
      <img
        src="AboutImage.png"
        alt="aboutImage"
        style={{ gridColumn: "8 / 12", gridRow: "3 / 12", height: "70vh" }}
      />

      <ContainerCenterComponent
        style={{ gridColumn: "2 / 5", gridRow: "8 / 12" }}
      >
        <DinamicNumberComponent targetNumber={1}>0</DinamicNumberComponent>
        <NormalText fontSize={"2rem"} style={{ marginTop: "0" }}>
          years of experience as developer
        </NormalText>
      </ContainerCenterComponent>
      <ContainerCenterComponent
        style={{ gridColumn: "5 / 7", gridRow: "8 / 12" }}
      >
        <DinamicNumberComponent targetNumber={3}>0</DinamicNumberComponent>
        <NormalText fontSize={"2rem"} style={{ marginTop: "0" }}>
          Proyects
        </NormalText>
      </ContainerCenterComponent>
    </Section>
  );
}

export default AboutSection;
