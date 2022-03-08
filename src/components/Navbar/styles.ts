import styled from "styled-components";
import v from "../variables";
import { borderAndShadow } from "../mixins";

export const IconContainer = styled.div`
  svg {
    width: 1.5em;
    height: 1.5em;
  }
`;

export const LinksList = styled.ul`
  display: none;
  font-size: 0.8em;
  list-style-type: none;
  gap: 2em;
  align-items: center;
  h1 {
    font-weight: normal;
  }
`;
export const LogoContainer = styled.div`
  img {
    width: 3em;
  }
`;

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

  @media (min-width: 600px) {
    font-size: clamp(0.65rem, 1.7vw, 1.05rem);
    height: calc(${v.navbarHeight} + 6vh);
    padding: 0 3em;
    ${LinksList} {
      display: flex;
    }
    ${IconContainer} {
      display: none;
    }
    ${LogoContainer} {
      font-size: 1.4rem;
    }
  }
`;

export const NavbarButton = styled.button`
  ${borderAndShadow};
  border-radius: 5px;
  padding: 0.5em 1em;
  background: transparent;
  text-transform: uppercase;
  font-size: 1.2em;
`;
