import styled from "styled-components";
import v from "../variables";

export const NavbarContainer = styled.nav<{ isShrunk: boolean }>`
  background: white;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  height: ${(props) =>
    props.isShrunk ? "calc(" + v.navbarHeight + " - 3vh)" : v.navbarHeight};
  transition: height 200ms;
  position: sticky;
  top: 0;
  z-index: 999;
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
