import styled from "styled-components";
import v from "../variables";

export const NavbarContainer = styled.nav`
  background: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
  height: ${v.navbarHeight};
`;

export const LogoContainer = styled.div`
  img {
    width: 3em;
  }
`;

export const IconContainer = styled.div`
  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;
