import React from "react";
import { ImageContainer, StepContainer } from "./styles";

export interface IStep {
  image: JSX.Element;
  title: string;
  description: string;
}

interface IProps {
  step: IStep & {
    counter: number;
  };
}

const Step = ({ step }: IProps) => {
  return (
    <StepContainer>
      <ImageContainer counter={step.counter}>{step.image}</ImageContainer>
    </StepContainer>
  );
};

export default Step;
