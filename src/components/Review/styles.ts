import styled from "styled-components";
import { borderAndShadow } from "../mixins";

export const ReviewContainer = styled.div`
  font-size: 0.85rem;
  padding: 2em;
  ${borderAndShadow};
`;

export const ReviewText = styled.p`
  font-size: 1.4em;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
