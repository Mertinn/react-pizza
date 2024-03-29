import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import DropdownList from "../../DropdownList";
import {
  StyledDropdownList,
  SidebarItemContainer,
  SidebarItemHeader,
  StyledLink,
} from "./styles";

interface IProps {
  title: string;
  isDropdown?: boolean;
  dropdownItems?: { title: string; link: string }[];
}

const SidebarItem = ({
  title,
  isDropdown = false,
  dropdownItems = [],
}: IProps) => {
  const [isShown, setIsShown] = useState(false);

  const dropdownItemsNode = dropdownItems.map((item) => (
    <StyledLink href={item.link}>{item.title}</StyledLink>
  ));

  return (
    <SidebarItemContainer>
      <SidebarItemHeader
        onClick={isDropdown ? () => setIsShown(!isShown) : undefined}
      >
        <p>{title}</p>
        {isDropdown && (
          <RiArrowDownSLine
            style={{
              transform: `rotate(${isShown ? "-180deg" : "0deg"})`,
            }}
          />
        )}
      </SidebarItemHeader>

      {isDropdown && (
        <DropdownList
          List={StyledDropdownList}
          elements={dropdownItemsNode}
          isShown={isShown}
          approxElementHeight={45}
        />
      )}
    </SidebarItemContainer>
  );
};

export default SidebarItem;
