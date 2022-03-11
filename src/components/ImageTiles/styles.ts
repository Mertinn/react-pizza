import styled from "styled-components";
import v from "../variables";

export const TileContainer = styled.div<{
  background: string;
  textColor: string;
}>`
  background: ${(props) => props.background};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  color: ${(props) => props.textColor};
  width: 50%;
  text-align: center;
  font-size: 1.8em;
`;

export const ImageTilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${v.desktopWidth}) {
    flex-wrap: nowrap;
    align-items: start;
    ${TileContainer} {
      border-radius: 0.2em;
      width: auto;
      padding: 2em clamp(1em, 5vw, 1.8em);
    }

    ${TileContainer}:nth-child(even) {
      margin-top: -1em;
    }
  }
`;
