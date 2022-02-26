import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import {
  DropdownContainer,
  DropdownList,
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

  return (
    <SidebarItemContainer>
      <SidebarItemHeader
        onClick={isDropdown ? () => setIsShown(!isShown) : undefined}
      >
        <p>{title}</p>
        {isDropdown && <RiArrowDownSLine />}
      </SidebarItemHeader>
      {isDropdown && (
        <DropdownContainer
          isShown={isShown}
          maxHeight={dropdownItems.length * 47}
        >
          <DropdownList>
            {dropdownItems.map((item, index) => (
              <li key={index}>
                <StyledLink to={item.link}>{item.title}</StyledLink>
              </li>
            ))}
          </DropdownList>
        </DropdownContainer>
      )}
    </SidebarItemContainer>
  );
};

export default SidebarItem;
