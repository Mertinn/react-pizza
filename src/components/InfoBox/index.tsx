import React, { useState } from "react";
import {
  DropdownStyled,
  InfoBoxContainer,
  InfoBoxDescription,
  InfoBoxTitle,
} from "./styles";
import { RiArrowDownSLine } from "react-icons/ri";
import DropdownList from "../DropdownList";
import { StyledLink } from "../Sidebar/SidebarItem/styles";

interface IProps {
  title: string;
  description: string;
  isDropdown?: boolean;
  dropdownItems?: { text: string }[];
}

const InfoBox = ({
  description,
  title,
  isDropdown = false,
  dropdownItems = [],
}: IProps) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const dropdownItemsNode = dropdownItems.map((item) => <p>{item.text}</p>);

  return (
    <InfoBoxContainer>
      <InfoBoxTitle>{title}</InfoBoxTitle>
      <InfoBoxDescription>
        {description}
        {isDropdown && (
          <RiArrowDownSLine
            onClick={() => setIsDropdownShown(!isDropdownShown)}
            style={{
              transform: `rotate(${isDropdownShown ? "-180deg" : "0deg"})`,
            }}
          />
        )}
      </InfoBoxDescription>
      <DropdownList
        List={DropdownStyled}
        elements={dropdownItemsNode}
        isShown={isDropdownShown}
        approxElementHeight={25}
      />
    </InfoBoxContainer>
  );
};

export default InfoBox;
