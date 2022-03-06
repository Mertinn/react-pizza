import React from "react";
import { StyledList } from "./styles";
import Step, { IStep } from "./Step";

interface IProps {
  steps: IStep[];
}

const Steps = ({ steps }: IProps) => {
  return (
    <StyledList>
      {steps.map((step, index) => (
        <li key={index}>
          <Step step={{ ...step, counter: index + 1 }} />
        </li>
      ))}
    </StyledList>
  );
};

export default Steps;
