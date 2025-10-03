import styled from "styled-components";
import { useState } from "react";
import EmailMessage from "./EmailMessage";

const Button = styled.button`
  border-radius: 1rem;
  background: linear-gradient(45deg, #f18701 0%, #f18701 100%);
  border: none;
  min-width: 200px;
  padding: 1rem 2rem;
  cursor: pointer;
  position: relative;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  /* Pseudo-elemento para el gradiente de hover */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #f18701 0%, #ce5436ff 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    border-radius: 20px;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(241, 135, 1, 0.3);
  }

  &:hover::before {
    opacity: 1;
  }

  &:active {
    transform: translateY(0);
    transition: transform 0.1s ease;
  }
`;

const SecondaryButton = styled.button`
  border-radius: 1rem;
  background: linear-gradient(45deg, #0e0d3b 0%, #0e0d3b 100%);
  border: none;
  min-width: 200px;
  padding: 1rem 2rem;
  cursor: pointer;
  position: relative;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  /* Pseudo-elemento para el gradiente de hover */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #0e0d3b 0%, #4b093a 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    border-radius: 1rem;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(14, 13, 59, 0.3);
  }

  &:hover::before {
    opacity: 1;
  }

  &:active {
    transform: translateY(0);
    transition: transform 0.1s ease;
  }
`;
const ButtonText = styled.p`
  margin: 0;
  color: #fff;
  font-family: "Lato";
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  position: relative;
  text-align: center;
  z-index: 1;
`;

const MessageContainer = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -100%);
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

function ButtonsComponent({ children, onClick, style, link, ...props }) {
  const handleClick = (e) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button onClick={handleClick} style={style} {...props}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}

function SecondaryButtonComponent({
  children,
  onClick,
  style,
  link,
  copyText,
  ...props
}) {
  const [showMessage, setShowMessage] = useState(false);
  const [messagePosition, setMessagePosition] = useState({ x: 0, y: 0 });

  const handleClick = async (e) => {
    // Obtener posición del cursor
    const cursorX = e.clientX;
    const cursorY = e.clientY - 20; // 20px arriba del cursor

    setMessagePosition({ x: cursorX, y: cursorY });

    // Si hay texto para copiar, copiarlo al portapapeles
    if (copyText) {
      try {
        await navigator.clipboard.writeText(copyText);
        console.log("Texto copiado:", copyText);

        // Mostrar mensaje de confirmación
        setShowMessage(true);

        // Ocultar mensaje después de 1.5s
        setTimeout(() => {
          setShowMessage(false);
        }, 1500);
      } catch (err) {
        console.error("Error al copiar texto:", err);
      }
    }

    // Si hay link, abrir en nueva ventana
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }

    // Ejecutar onClick personalizado si existe
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <SecondaryButton onClick={handleClick} style={style} {...props}>
        <ButtonText>{children}</ButtonText>
      </SecondaryButton>

      <MessageContainer
        $visible={showMessage}
        style={{
          left: messagePosition.x,
          top: messagePosition.y,
        }}
      >
        <EmailMessage text="Copied!" />
      </MessageContainer>
    </>
  );
}

export { SecondaryButtonComponent, ButtonsComponent };
