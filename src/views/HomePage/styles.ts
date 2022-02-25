import styled from "styled-components";

export const StyledVideo = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  filter: brightness(0.6);
`;

export const VideoSection = styled.section`
  // needs fix
  //height: calc(100vh - 82.78px);
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
    max-width: 80%;
  }
`;
