import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const DropdownContainer = styled.div<{
  isShown: boolean;
  maxHeight: number;
  additionalStyles?: FlattenSimpleInterpolation;
  isAbsolute: boolean;
}>`
  max-height: ${(props) => (props.isShown ? props.maxHeight + "px" : 0)};
  overflow: hidden;
  transition: 0.5s;
  ${(props) => props.additionalStyles};
  ${(props) =>
    props.isAbsolute &&
    css`
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, 10%);
    `}
`;
