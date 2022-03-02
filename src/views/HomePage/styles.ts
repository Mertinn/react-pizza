import styled from "styled-components";
import v from "../../components/variables";
import { Link } from "react-router-dom";
import { fullCenteredText } from "../../components/mixins";

export const StyledVideo = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  filter: brightness(0.6);
`;

export const VideoSection = styled.section`
  height: calc(100vh - ${v.navbarHeight});
  position: relative;
`;

export const VideoSectionContent = styled.div`
  ${fullCenteredText};
  color: white;
  gap: 2em;

  h1 {
    font-weight: normal;
    text-transform: uppercase;
  }
  p {
    max-width: 90%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 700px) {
    & > *:not(:last-child) {
      border-right: 4px solid #ebebeb;
    }
  }
`;

export const DefaultSection = styled.section`
  padding: 4em 1em 0 1em;
`;

export const SmallSpacer = styled.div`
  padding: 1em;
`;

export const ReviewsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;
export const ReviewsTitle = styled.h1`
  letter-spacing: 0.2em;
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
  color: ${v.green};
  text-decoration: none;
`;

export const ReviewsList = styled.ul`
  margin: 2em 0 0 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const BackgroundImage = styled.div<{ src: string }>`
  background: url(${(props) => props.src}) center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const BackgroundImageContainer = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.8);
`;

export const MenuSection = styled.div`
  padding-top: 4em;
`;

export const ImageContentContainer = styled.div`
  ${fullCenteredText};
  color: white;
  padding: 8em 2em;
  gap: 1.5em;
  font-size: 1.3rem;
  h1 {
    font-weight: normal;
    font-size: 1.5em;
    text-transform: uppercase;
  }
`;
