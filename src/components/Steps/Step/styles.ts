import styled from "styled-components";
import v from "../../variables";

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: #d4d4d4;
`;

export const ImageContainer = styled.div<{ counter: number }>`
  position: relative;
  &::after {
    content: "${(props) => props.counter}";
    background: ${v.green};
    width: 2em;
    height: 2em;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border-radius: 50%;
  }
`;
