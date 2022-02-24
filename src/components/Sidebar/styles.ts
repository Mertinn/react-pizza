import styled from "styled-components";

export const SidebarContainer = styled.div`
  background: #f6f6f6;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  box-shadow: -30vw 0 15px 10px rgba(0, 0, 0, 0.5);
  font-size: 1.2rem;
  min-width: 70vw;
`;

export const TopPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  background: #539943;
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
