import React, { useState } from "react";
import { NavbarLinkContainer, StyledDropdownList } from "./styles";
import { RiArrowDownSLine } from "react-icons/ri";
import DropdownList from "../../DropdownList";

interface IProps {
  url: string;
  isDropdown?: boolean;
  dropdownItems?: { title: string; link: string }[];
  children: React.ReactNode;
}

const NavbarLink = ({
  url,
  children,
  isDropdown = false,
  dropdownItems = [],
}: IProps) => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const dropdownItemsNode = dropdownItems.map((item) => (
    <a href={item.link}>{item.title}</a>
  ));

  const handleClick = () => {
    if (isDropdown) setIsDropdownShown(!isDropdownShown);
    window.location.href = url;
  };

  return (
    <NavbarLinkContainer onClick={handleClick}>
      <h1>
        {children}
        {isDropdown && (
          <RiArrowDownSLine
            style={{
              transform: `rotate(${isDropdownShown ? "-180deg" : "0"})`,
            }}
          />
        )}
      </h1>
      {isDropdown && (
        <DropdownList
          elements={dropdownItemsNode}
          List={StyledDropdownList}
          isShown={isDropdownShown}
          isAbsolute={true}
          approxElementHeight={50}
        />
      )}
    </NavbarLinkContainer>
  );
};

export default NavbarLink;
