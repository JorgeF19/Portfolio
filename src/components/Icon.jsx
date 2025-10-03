import styled from "styled-components";

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`;

function IconComponent({ src, alt }) {
  return <Icon src={src} alt={alt} />;
}

export default IconComponent;
