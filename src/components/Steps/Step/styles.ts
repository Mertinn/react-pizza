import styled from "styled-components";
import v from "../../variables";

export const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  color: #d4d4d4;
`;

export const ImageContainer = styled.div<{ counter: number }>`
  position: relative;

  &::after {
    content: "${(props) => props.counter}";
    background: ${v.green};
    width: 1.7em;
    height: 1.7em;
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

export const TextContainer = styled.div`
  color: black;
  text-align: center;

  h3 {
    font-weight: normal;
    text-transform: uppercase;
  }

  p {
    color: rgba(0, 0, 0, 0.79);
  }
`;
