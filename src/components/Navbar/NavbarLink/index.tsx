import React, { useState } from "react";
import { NavbarLinkContainer, StyledDropdownList } from "./styles";
import { RiArrowDownSLine } from "react-icons/ri";
import DropdownList from "../../DropdownList";
import { Link, useNavigate } from "react-router-dom";

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
  const history = useNavigate();

  const dropdownItemsNode = dropdownItems.map((item) => (
    <Link to={item.link}>{item.title}</Link>
  ));

  const handleClick = () => {
    if (isDropdown) setIsDropdownShown(!isDropdownShown);
    history(url);
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
