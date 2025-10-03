import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const ImgService = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  max-width: 100%;
  max-height: 100%;
  grid-column: ${(props) => props.gridColumn || "1 / 1"};
  grid-row: ${(props) => props.gridRow || "1 / 1"};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateX(${(props) => (props.isVisible ? "0" : "400px")});
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
  transition-delay: ${(props) => props.delay || "0ms"};

  /* Responsive behavior */
  @media (max-width: 768px) {
    object-fit: scale-down;
    width: 80%;
    height: 80%;
  }

  @media (max-width: 480px) {
    width: 70%;
    height: 70%;
  }
`;

function ImgServiceComponent({ src, alt, gridColumn, gridRow, delay = "0ms" }) {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  // Intersection Observer para detectar cuando el 20% del elemento es visible
  useEffect(() => {
    const currentRef = imgRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          // El elemento es 20% o más visible
          setIsVisible(true);
        } else if (entry.intersectionRatio === 0) {
          // El elemento está completamente fuera del viewport
          setIsVisible(false);
        }
      },
      {
        threshold: [0, 0.2], // Detectar cuando está completamente fuera (0) y cuando es 20% visible (0.2)
        rootMargin: "0px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <ImgService
      ref={imgRef}
      src={src}
      alt={alt}
      gridColumn={gridColumn}
      gridRow={gridRow}
      isVisible={isVisible}
      delay={delay}
    />
  );
}

export default ImgServiceComponent;
