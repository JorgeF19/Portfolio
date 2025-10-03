import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const DinamicNumber = styled.h1`
  color: #f18701;
  font-family: "Lexend";
  font-size: 6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

function DinamicNumberComponent({ targetNumber, duration = 1000 }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const numberRef = useRef(null);

  // Intersection Observer para detectar cuando el elemento es completamente visible
  useEffect(() => {
    const currentRef = numberRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 1 && !hasAnimated) {
          // El elemento es completamente visible y no ha sido animado
          setIsVisible(true);
        } else if (entry.intersectionRatio === 0) {
          // El elemento está completamente fuera del viewport
          setHasAnimated(false);
          setIsVisible(false);
          setCurrentNumber(0); // Resetear el número a 0
        }
      },
      {
        threshold: [0, 1.0], // Detectar cuando está completamente fuera (0) y completamente dentro (1)
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
  }, [hasAnimated]);

  // Animación del número
  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true); // Evitar que la animación se repita
    const startTime = Date.now();
    const startNumber = 0;
    const endNumber = targetNumber;

    const updateNumber = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Función de easing para suavizar la animación
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      const animatedNumber = Math.floor(
        startNumber + (endNumber - startNumber) * easeOutCubic
      );

      setCurrentNumber(animatedNumber);

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        setCurrentNumber(endNumber); // Asegurar que termine en el número exacto
      }
    };

    requestAnimationFrame(updateNumber);
  }, [isVisible, targetNumber, duration, hasAnimated]);

  return <DinamicNumber ref={numberRef}>{currentNumber}+</DinamicNumber>;
}

export default DinamicNumberComponent;
