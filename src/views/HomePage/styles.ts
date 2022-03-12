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
  align-items: start;

  @media (min-width: 700px) {
    & > *:not(:last-child) {
      border-right: 4px solid #ebebeb;
    }
  }
`;

export const DefaultSection = styled.section<{
  marginOnTop?: boolean;
  marginOnBottom?: boolean;
}>`
  margin: ${(props) => (props.marginOnTop ? "4em" : 0)} 1em
    ${(props) => (props.marginOnBottom ? "4em" : 0)} 1em;
`;

DefaultSection.defaultProps = {
  marginOnTop: true,
  marginOnBottom: false,
};

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
  @media (min-width: ${v.desktopWidth}) {
    flex-direction: row;
    max-width: 80%;
    margin: 2em auto 0 auto;
    li {
      flex: 1 1 0;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.8);
`;

export const MenuSection = styled.section`
  margin-top: 4em;
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
  @media (min-width: ${v.desktopWidth}) {
    padding: 12em 2em;
  }
`;

export const ImageTilesContainer = styled.div`
  margin-top: -5em;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 0 2em;
`;

export const OrderingStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  button {
    font-size: 1.1em;
  }
`;

export const StepsHeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 4em;
  font-size: 1.2em;
  h1 {
    font-weight: normal;
    letter-spacing: 0.15em;
  }
`;
