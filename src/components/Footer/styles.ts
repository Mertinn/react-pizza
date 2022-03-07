import styled from "styled-components";
import FurnacePhoto from "../../assets/furnaceImage.jpg";

export const FooterContainer = styled.div`
  position: relative;
  padding: 2em;
  background: url(${FurnacePhoto}) rgba(0, 0, 0, 0.4) 15% 18%;
  background-blend-mode: color-dodge;
`;

export const TextContainer = styled.div`
  color: white;
  font-size: 0.9rem;
`;

export const SocialsList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2em;

  svg {
    width: 2em;
    height: 2em;
  }
`;
