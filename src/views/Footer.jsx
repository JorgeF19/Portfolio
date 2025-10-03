import FooterContainer from "../components/FooterSection";
import LinksComponent from "../components/FooterComponents.jsx/Links";
import Title from "../components/ContactSection.jsx/Title";
const Footer = () => {
  return (
    <FooterContainer>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-evenly",
        }}
      >
        <LinksComponent href="contact-section">Contact Me</LinksComponent>
        <LinksComponent href="about-section">About Me</LinksComponent>
        <LinksComponent href="project-section">My Work</LinksComponent>
      </div>
      <Title>Jorge Ferrer</Title>
    </FooterContainer>
  );
};

export default Footer;
