import Section from "../components/Section";
import HeroText from "../components/HeroTitle";
import HeroSubtitle from "../components/HeroSubtitle";
import HeroSubtitleContainer from "../components/HeroSubtitleContainer";
import Subtitle from "../components/Subtitle";
import NormalText from "../components/NormalText";
import IconComponent from "../components/Icon";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ContainerSubtitle from "../components/ContainerSubtitle";
import HeroImg from "../components/HeroImg";
function HeroSection() {
  return (
    <Section
      id="hero-section"
      background={"linear-gradient(109deg, #0e0d3b 12.96%, #132a45 73.12%)"}
    >
      <ResponsiveContainer
        wideStartColumn={2}
        wideEndColumn={8}
        wideStartRow={1}
        wideEndRow={6}
        widePadding="2rem 0 0 0"
        zIndex={1}
        mediumStartColumn={2}
        mediumEndColumn={8}
        mediumStartRow={2}
        mediumEndRow={5}
        smallStartColumn={1}
        smallEndColumn={4}
        smallStartRow={2}
        smallEndRow={4}
        mobileTextAlign="center"
      >
        <HeroText>Jorge</HeroText>
        <HeroText marginLeft={"20%"}>Ferrer</HeroText>
        <HeroSubtitleContainer>
          <HeroSubtitle>FrontEnd developer & web designer</HeroSubtitle>
        </HeroSubtitleContainer>
      </ResponsiveContainer>
      <ContainerSubtitle>
        <Subtitle>Introduction</Subtitle>
        <NormalText>
          Hi! This is my portfolio for those interested in hire me! or those
          just looking for some inspiration :D
        </NormalText>
      </ContainerSubtitle>
      <div
        style={{
          gridColumn: "1 / 2",
          gridRow: "12 / 12",
          display: "flex",
          gap: "1rem",
          zIndex: 1,
        }}
      >
        <a href="https://www.linkedin.com/in/jorge-ferrer-3039841b3">
          <IconComponent src="/LinkedInIcon.png" alt="LinkedIn Icon" />
        </a>
        <a href="https://github.com/JorgeF19">
          <IconComponent src="/GithubIcon.png" alt="GitHub Icon" />
        </a>
      </div>
      <HeroImg src="Hero.png" alt="HeroImage" />
    </Section>
  );
}

export default HeroSection;
