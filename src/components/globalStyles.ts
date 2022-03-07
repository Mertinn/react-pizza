import styled from "styled-components";

export const BackgroundImage = styled.div<{ src: string; filter?: string }>`
  background: url(${(props) => props.src}) center;
  background-size: cover;
  filter: ${(props) => props.filter};
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

BackgroundImage.defaultProps = {
  filter: "none",
};
