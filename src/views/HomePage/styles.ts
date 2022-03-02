import styled from "styled-components";
import v from "../../components/variables";
import { Link } from "react-router-dom";

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
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
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
  padding: 4em 1em;
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
  margin: 2em 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const ImageContentContainer = styled.div<{ src: string }>`
  background: ${(props) => props.src};
`;
