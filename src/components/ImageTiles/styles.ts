import styled from "styled-components";

export const ImageTilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

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
