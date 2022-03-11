import React from "react";
import { StyledList } from "./styles";
import Step, { IStep } from "./Step";
import { ReactComponent as StepLine } from "../../assets/step dashed line.svg";

interface IProps {
  steps: IStep[];
}

const Steps = ({ steps }: IProps) => {
  return (
    <StyledList>
      {steps.map((step, index) => (
        <li key={index}>
          <Step step={{ ...step, counter: index + 1 }} />
          {index !== steps.length - 1 && <StepLine />}
        </li>
      ))}
    </StyledList>
  );
};

export default Steps;
