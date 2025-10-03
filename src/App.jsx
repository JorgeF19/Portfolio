import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./views/HeroSection";
import IconComponent from "./components/Icon";
import AboutSection from "./views/AboutSection";
import ServiceSection from "./views/ServiceSection";
import ProjectSection from "./views/ProjectSection";
import ContactSection from "./views/ContactSection";
import Footer from "./views/footer";
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
        href="https://wa.me/qr/SPOZTAC4JOW6N1"
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
