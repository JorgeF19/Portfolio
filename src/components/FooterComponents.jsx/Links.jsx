import styled from "styled-components";

const Links = styled.a`
  color: #fff;
  font-family: Sora;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
  text-transform: capitalize;
`;
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

function LinksComponent({ children, href, style, ...props }) {
  return (
    <Links
      onClick={(e) => smoothScrollTo(href, e)}
      href={href}
      style={style}
      {...props}
    >
      {children}
    </Links>
  );
}

export default LinksComponent;
