import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  li:not(:last-child)::after {
    content: "";
    height: 3em;
    width: 3px;
    background: rgba(0, 0, 0, 0.17);
    margin: 0.5em auto;
    display: block;
    border-radius: 5px;
  }
`;
