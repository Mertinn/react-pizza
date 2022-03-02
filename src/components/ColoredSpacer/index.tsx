import styled from "styled-components";

const ColoredSpacer = styled.div<{ width: string; color: string }>`
  height: 5px;
  width: ${(props) => props.width};
  background: ${(props) => props.color};
`;

export default ColoredSpacer;
