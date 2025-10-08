import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./views/HeroSection";
import IconComponent from "./components/Icon";
import AboutSection from "./views/AboutSection";
import ServiceSection from "./views/ServiceSection";
import ProjectSection from "./views/ProjectSection";
import ContactSection from "./views/ContactSection";
import Footer from "./views/Footer";
function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
      <a
        href="https://wa.me/+573022568113"
        style={{
          position: "fixed",
          right: "2rem",
          bottom: "2rem",
          zIndex: 1000,
          justifySelf: "end",
        }}
      >
        <IconComponent src="/WhatsappIcon.png" alt="WhatsApp Icon" />
      </a>
    </>
  );
}

export default App;
