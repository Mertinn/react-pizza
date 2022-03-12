import styled from "styled-components";
import FurnacePhoto from "../../assets/furnaceImage.jpg";
import v from "../variables";

export const FooterContainer = styled.div`
  position: relative;
  padding: 2em;
  background: url(${FurnacePhoto}) rgba(0, 0, 0, 0.4) 15% 18%;
  background-blend-mode: color-dodge;
  display: flex;
  flex-direction: column;
  gap: 2em;

  @media (min-width: ${v.desktopWidth}) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  color: white;
  font-size: 0.9em;
`;

export const SocialsList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2em;
  font-size: 0.9em;

  svg {
    color: white;
    width: 2em;
    height: 2em;
  }
`;
