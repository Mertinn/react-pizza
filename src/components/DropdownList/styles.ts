import styled, { FlattenSimpleInterpolation } from "styled-components";

export const DropdownContainer = styled.div<{
  isShown: boolean;
  maxHeight: number;
  additionalStyles?: FlattenSimpleInterpolation;
}>`
  max-height: ${(props) => (props.isShown ? props.maxHeight + "px" : 0)};
  overflow: hidden;
  transition: 0.5s;
  ${(props) => props.additionalStyles};
`;
