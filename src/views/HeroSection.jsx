import Section from "../components/Section";
import HeroText from "../components/HeroTitle";
import HeroSubtitle from "../components/HeroSubtitle";
import HeroSubtitleContainer from "../components/HeroSubtitleContainer";
import Subtitle from "../components/Subtitle";
import NormalText from "../components/NormalText";
import IconComponent from "../components/Icon";
function HeroSection() {
  return (
    <Section
      id="hero-section"
      background={"linear-gradient(109deg, #0e0d3b 12.96%, #132a45 73.12%)"}
    >
      <div style={{ gridColumn: "2 / 8", gridRow: "1 / 6", marginTop: "2rem" }}>
        <HeroText>Jorge</HeroText>
        <HeroText marginLeft={"20%"}>Ferrer</HeroText>
        <HeroSubtitleContainer>
          <HeroSubtitle>FrontEnd developer & web designer</HeroSubtitle>
        </HeroSubtitleContainer>
      </div>
      <div style={{ gridColumn: "2 / 5", gridRow: "8 / 12" }}>
        <Subtitle>Introduction</Subtitle>
        <NormalText>
          Hi! This is my portfolio for those interested in hire me! or those
          just looking for some inspiration :D
        </NormalText>
      </div>
      <div
        style={{
          gridColumn: "1/12",
          gridRow: "12/12",
          display: "flex",
          gap: "1rem",
        }}
      >
        <a href="https://www.linkedin.com/in/jorge-ferrer-3039841b3">
          <IconComponent src="/LinkedInIcon.png" alt="LinkedIn Icon" />
        </a>
        <a href="https://github.com/JorgeF19">
          <IconComponent src="/GithubIcon.png" alt="GitHub Icon" />
        </a>
      </div>
      <img
        src="Hero.png"
        alt="HeroImage"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          maxHeight: "100vh",
        }}
      />
    </Section>
  );
}

export default HeroSection;
