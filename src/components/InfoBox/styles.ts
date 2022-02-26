import styled from "styled-components";
import v from "../variables";

export const InfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  font-size: 0.7rem;
  text-align: center;
`;

export const InfoBoxTitle = styled.h1`
  color: ${v.green};
  text-transform: uppercase;
`;
export const InfoBoxDescription = styled.h1`
  font-weight: normal;
`;
