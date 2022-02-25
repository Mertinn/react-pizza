import styled from "styled-components";
import v from "../variables";

export const SidebarContainer = styled.div<{ isShown: boolean }>`
  background: #f6f6f6;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  font-size: 1.2rem;
  min-width: 70vw;
  box-shadow: ${(props) =>
    props.isShown
      ? "-30vw 0 15px 10px rgba(0, 0, 0, 0.5)"
      : "0 0 0 0 rgba(0,0,0,0.5)"};
  transform: translateX(${(props) => (props.isShown ? "0" : "100%")});
  transition: 0.5s;
  z-index: 999;
`;

export const TopPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ${v.green};
  color: white;
  padding: 0.9em;
  align-items: center;
`;

export const SidebarList = styled.ul`
  list-style-type: none;
`;

export const BottomPanel = styled.div`
  display: flex;
  justify-content: center;
`;
