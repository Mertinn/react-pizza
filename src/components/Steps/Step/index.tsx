import React from "react";
import { ImageContainer, StepContainer, TextContainer } from "./styles";

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
      <TextContainer>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </TextContainer>
    </StepContainer>
  );
};

export default Step;
