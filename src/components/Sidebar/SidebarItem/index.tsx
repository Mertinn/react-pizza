import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import DropdownList from "../../DropdownList";
import {
  StyledDropdownList,
  SidebarItemContainer,
  SidebarItemHeader,
  StyledLink,
  dropdownItemStyles,
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
    <StyledLink to={item.link}>{item.title}</StyledLink>
  ));

  return (
    <SidebarItemContainer>
      <SidebarItemHeader
        onClick={isDropdown ? () => setIsShown(!isShown) : undefined}
      >
        <p>{title}</p>
        {isDropdown && <RiArrowDownSLine />}
      </SidebarItemHeader>

      {isDropdown && (
        <DropdownList
          List={StyledDropdownList}
          elements={dropdownItemsNode}
          isShown={isShown}
          containerStyles={dropdownItemStyles}
          approxElementHeight={45}
        />
      )}
    </SidebarItemContainer>
  );
};

export default SidebarItem;
