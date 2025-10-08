import SectionComponent from "../components/Section";
import Subtitle from "../components/Subtitle";
import Title from "../components/ContactSection.jsx/Title";
import NormalTextComponent from "../components/NormalText";
import {
  ButtonsComponent,
  SecondaryButtonComponent,
} from "../components/ContactSection.jsx/Buttons";
import { AnimatedChatContainer } from "../components/ContactSection.jsx/ChatAnimation/Message";
import ButtonsContainer from "../components/ContactSection.jsx/ButtonsContainer";

const ContactSection = () => {
  const chatMessages = [
    { type: "left", text: "Hey! I have this project in mind." },
    { type: "right", text: "I'm in." },
    { type: "left", text: "Just Like that?" },
    { type: "right", text: "I'm broke." },
  ];

  return (
    <SectionComponent id="contact-section" height="100vh">
      <Subtitle style={{ gridColumn: "2/3" }}>Contact</Subtitle>

      <div style={{ gridColumn: "2/7", gridRow: "2/10" }}>
        <Title>Something I can help with?</Title>
        <NormalTextComponent style={{ gridColumn: "2/5", gridRow: "8/9" }}>
          Write me or text me!
        </NormalTextComponent>
      </div>

      <ButtonsContainer>
        <ButtonsComponent link="https://wa.me/+573022568113">
          Whatsapp
        </ButtonsComponent>
        <SecondaryButtonComponent copyText={"jwjf19@gmail.com"}>
          Email
        </SecondaryButtonComponent>
      </ButtonsContainer>

      <AnimatedChatContainer
        messages={chatMessages}
        style={{
          gridColumn: "8/12",
          gridRow: "2/10",
        }}
      />
    </SectionComponent>
  );
};

export default ContactSection;
