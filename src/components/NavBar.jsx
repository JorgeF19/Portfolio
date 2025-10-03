import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  color: white;
  z-index: 1000;
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

  &:hover {
    background: #0d1b3b;
  }

  /* Animación suave de scroll al hacer clic */
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
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

  &:hover {
    background: #0d1b3b;
  }

  /* Animación suave de scroll al hacer clic */
  &:active {
    transform: scale(0.95);
    transition: transform 0.1s ease;
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
  return (
    <Nav>
      <div>
        <NavLinkFeat
          href="#hero-section"
          onClick={(e) => smoothScrollTo("hero-section", e)}
        >
          Jorge Ferrer
        </NavLinkFeat>
      </div>
      <div>
        <NavLink
          href="#service-section"
          onClick={(e) => smoothScrollTo("service-section", e)}
        >
          Services
        </NavLink>

        <NavLink
          href="#project-section"
          onClick={(e) => smoothScrollTo("project-section", e)}
        >
          Works
        </NavLink>

        <NavLinkFeat
          href="#contact-section"
          onClick={(e) => smoothScrollTo("contact-section", e)}
        >
          Contact Me
        </NavLinkFeat>
      </div>
    </Nav>
  );
}

export default NavBar;
