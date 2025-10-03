import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

const MessageBubbleLeft = styled.div`
  width: fit-content;
  max-width: 70%;
  background-color: #bcd9ff;
  padding: 0.8rem 1rem;
  border-top-left-radius: 0;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  align-self: flex-start;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible
      ? "scale(1) translateX(0)"
      : "scale(0.5) translateX(-50px)"};
  transition: all 0.5s ease;
`;

const MessageBubbleRight = styled.div`
  width: fit-content;
  max-width: 70%;
  padding: 0.8rem 1rem;
  align-self: flex-end;
  background-color: #70aeff;
  border-top-left-radius: 20px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.25);

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.$isVisible
      ? "scale(1) translateX(0)"
      : "scale(0.5) translateX(50px)"};
  transition: all 0.5s ease;
`;
const MessageText = styled.p`
  margin: 0;
  color: #000;
  font-family: Lato;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.3;
  word-wrap: break-word;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

function MessageLeft({ text, isVisible }) {
  return (
    <MessageBubbleLeft $isVisible={isVisible}>
      <MessageText>{text}</MessageText>
    </MessageBubbleLeft>
  );
}

function MessageRight({ text, isVisible }) {
  return (
    <MessageBubbleRight $isVisible={isVisible}>
      <MessageText>{text}</MessageText>
    </MessageBubbleRight>
  );
}

function AnimatedChatContainer({ messages, style }) {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const containerRef = useRef(null);
  const timeoutsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Limpiar timeouts anteriores
          timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
          timeoutsRef.current = [];

          // Reiniciar mensajes visibles
          setVisibleMessages([]);

          // Animar mensajes secuencialmente
          messages.forEach((_, index) => {
            const timeout = setTimeout(() => {
              setVisibleMessages((prev) => [...prev, index]);
            }, (index + 1) * 1000); // 500ms, 1000ms, 1500ms, 2000ms

            timeoutsRef.current.push(timeout);
          });
        } else {
          // Limpiar timeouts
          timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
          timeoutsRef.current = [];
          // Resetear mensajes
          setVisibleMessages([]);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [messages]);

  return (
    <ChatContainer ref={containerRef} style={style}>
      {messages.map((message, index) => {
        const isVisible = visibleMessages.includes(index);

        if (message.type === "left") {
          return (
            <MessageLeft
              key={index}
              text={message.text}
              isVisible={isVisible}
            />
          );
        } else {
          return (
            <MessageRight
              key={index}
              text={message.text}
              isVisible={isVisible}
            />
          );
        }
      })}
    </ChatContainer>
  );
}

export { MessageLeft, MessageRight, AnimatedChatContainer };
