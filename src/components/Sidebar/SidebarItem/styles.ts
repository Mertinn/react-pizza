import styled, { css } from "styled-components";
import v from "../../variables";

export const SidebarItemContainer = styled.div`
  display: flex;
  color: ${v.green};
  padding: 1em;
  flex-wrap: wrap;
`;

export const SidebarItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2em;
  width: 100%;

  svg {
    transition: transform 400ms;
  }
`;

export const StyledDropdownList = styled.ul`
  list-style-type: none;
  padding-left: 0.5em;
  padding-top: 0.5em;

  li::before {
    content: "\\2022";
    display: inline-block;
    margin-right: 0.5em;
  }

  li {
    background: ${v.green}1f;
    padding: 0.2em 0.5em;
    border-radius: 5px;

    &:not(:first-child) {
      margin-top: 0.5em;
    }
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${v.green};
`;
