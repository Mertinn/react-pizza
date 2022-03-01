import styled from "styled-components";

export const ReviewContainer = styled.div`
  border: 1px solid rgba(191, 191, 191, 0.56);
  font-size: 0.85rem;
  padding: 2em;
  box-shadow: -7px 7px 0 rgba(0, 0, 0, 0.09);
`;

export const ReviewText = styled.p`
  font-size: 1.4em;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
