import React from "react";
import { DropdownContainer } from "./styles";

interface IProps {
  elements: React.ReactNode[];
  approxElementHeight?: number;
  List: React.FunctionComponent;
  isShown: boolean;
  isAbsolute?: boolean;
}

const DropdownList = ({
  elements,
  List,
  isShown,
  approxElementHeight = 45,
  isAbsolute = false,
}: IProps) => {
  return (
    <DropdownContainer
      isShown={isShown}
      maxHeight={elements.length * approxElementHeight}
      isAbsolute={isAbsolute}
    >
      <List>
        {elements.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </List>
    </DropdownContainer>
  );
};

export default DropdownList;
