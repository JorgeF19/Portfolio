import styled from "styled-components";
import { useState } from "react";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  color: white;
  z-index: 10000;
  box-sizing: border-box;

  /* Responsive padding */
  @media (max-width: 1024px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  /* Ocultar en vistas medianas y móviles */
  @media (max-width: 1024px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10001;
  position: relative;

  /* Mostrar en vistas medianas y móviles */
  @media (max-width: 1024px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => (props.isOpen ? "#f7b801" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
      transform: ${(props) =>
        props.isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background: linear-gradient(135deg, #0d1b3b 0%, #132a45 100%);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 9999;
  overflow: hidden;

  /* Mostrar en vistas medianas y móviles */
  @media (max-width: 1024px) {
    display: flex;
  }

  /* Responsive width */
  @media (max-width: 480px) {
    width: min(280px, 100vw);
  }

  @media (max-width: 360px) {
    width: min(250px, 100vw);
  }

  /* Asegurar que esté completamente fuera del viewport cuando esté cerrado */
  @media (max-width: 300px) {
    width: 100vw;
    right: 0;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100vw)"};
  }
`;

const MobileNavLink = styled.a`
  color: #fff;
  font-family: "lato";
  font-weight: 700;
  font-size: 1.8rem;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-align: center;
  width: 80%;
  max-width: calc(100% - 2rem);
  box-sizing: border-box;

  &:hover {
    background: rgba(247, 184, 1, 0.2);
    color: #f7b801;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

  @media (max-width: 360px) {
    font-size: 1.6rem;
    padding: 0.8rem 1.5rem;
  }
`;

const MobileNavLinkFeat = styled.a`
  color: #f7b801;
  font-family: "lato";
  font-weight: 700;
  font-size: 1.8rem;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-align: center;
  width: 80%;
  max-width: calc(100% - 2rem);
  border: 2px solid #f7b801;
  box-sizing: border-box;

  &:hover {
    background: #f7b801;
    color: #0d1b3b;
  }

  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

  @media (max-width: 360px) {
    font-size: 1.6rem;
    padding: 0.8rem 1.5rem;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const NavLinkFeat = styled.a`
  color: #f7b801;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-family: "lato";
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #0d1b3b;
  }

  /* Animación suave de scroll al hacer clic */
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

  /* Responsive font size */
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
  }
`;

const NavLink = styled.a`
  color: #fff;
  font-family: "lato";
  font-weight: 700;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: #0d1b3b;
  }

  /* Animación suave de scroll al hacer clic */
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

  /* Responsive font size */
  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
  }
`;

// Función para scroll suave personalizado con duración de 0.5s
const smoothScrollTo = (targetId, event) => {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const targetPosition = targetElement.offsetTop - 50; // Offset para el navbar fijo
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500; // 0.5s en milisegundos
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Función de easing ease-in-out
    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  }
};

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (targetId, event) => {
    smoothScrollTo(targetId, event);
    closeMenu(); // Cerrar menú después de navegar
  };

  return (
    <>
      <Nav>
        <div>
          <NavLinkFeat
            href="#hero-section"
            onClick={(e) => handleNavClick("hero-section", e)}
          >
            Jorge Ferrer
          </NavLinkFeat>
        </div>

        {/* Links normales - se ocultan en vista mediana */}
        <NavLinks>
          <NavLink
            href="#service-section"
            onClick={(e) => handleNavClick("service-section", e)}
          >
            Services
          </NavLink>

          <NavLink
            href="#project-section"
            onClick={(e) => handleNavClick("project-section", e)}
          >
            Works
          </NavLink>

          <NavLinkFeat
            href="#contact-section"
            onClick={(e) => handleNavClick("contact-section", e)}
          >
            Contact Me
          </NavLinkFeat>
        </NavLinks>

        {/* Botón hamburguesa - se muestra en vista mediana */}
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </HamburgerButton>
      </Nav>

      {/* Overlay para cerrar menú al hacer clic fuera */}
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />

      {/* Menú móvil */}
      <MobileMenu isOpen={isMenuOpen}>
        <MobileNavLink
          href="#service-section"
          onClick={(e) => handleNavClick("service-section", e)}
        >
          Services
        </MobileNavLink>

        <MobileNavLink
          href="#project-section"
          onClick={(e) => handleNavClick("project-section", e)}
        >
          Works
        </MobileNavLink>

        <MobileNavLinkFeat
          href="#contact-section"
          onClick={(e) => handleNavClick("contact-section", e)}
        >
          Contact Me
        </MobileNavLinkFeat>
      </MobileMenu>
    </>
  );
}

export default NavBar;
