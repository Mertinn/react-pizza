import React from "react";
import { DropdownContainer } from "./styles";
import { FlattenSimpleInterpolation } from "styled-components";

interface IProps {
  elements: React.ReactNode[];
  approxElementHeight?: number;
  List: React.FunctionComponent;
  isShown: boolean;
  containerStyles?: FlattenSimpleInterpolation;
}

const DropdownList = ({
  elements,
  List,
  isShown,
  containerStyles,
  approxElementHeight = 45,
}: IProps) => {
  return (
    <DropdownContainer
      isShown={isShown}
      maxHeight={elements.length * approxElementHeight}
      additionalStyles={containerStyles}
    >
      <List>
        {elements.map((element) => (
          <li>{element}</li>
        ))}
      </List>
    </DropdownContainer>
  );
};

export default DropdownList;
