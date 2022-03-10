import styled from "styled-components";
import v from "../../variables";

export const NavbarLinkContainer = styled.div`
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  h1 {
    display: flex;
    align-items: center;
    gap: 0.2em;
  }
  svg {
    transition: 500ms;
  }
`;

export const StyledDropdownList = styled.ul`
  background: white;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: max-content;
  padding: 1.5em;
  list-style-type: none;
  font-size: 1.1em;
  border: 1px solid rgba(0, 0, 0, 0.2);

  li {
    a {
      color: black;
      transition: color 400ms;
      text-decoration: none;
    }

    a:hover {
      color: ${v.green};
    }
  }
`;
