import SectionComponent from "../components/Section";
import Subtitle from "../components/Subtitle";
import ProyectCard from "../components/ProyectSection/ProyectCard";
import ProyectsContainer from "../components/ProyectSection/ProyectsContainer";
const ProjectSection = () => {
  return (
    <SectionComponent id="project-section" height="120vh">
      <Subtitle style={{ gridColumn: "2/3" }}>Projects</Subtitle>
      <ProyectsContainer>
        <ProyectCard image="ProyectoPortafolio.png" title="Portfolio" />
        <ProyectCard image="SandsLanding.png" title="Landing Page" />
        <ProyectCard image="ProyectCamelot.png" title="Camelot" />
      </ProyectsContainer>
    </SectionComponent>
  );
};

export default ProjectSection;
