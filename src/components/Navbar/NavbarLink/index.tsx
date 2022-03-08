import React from "react";
import { NavbarLinkContainer } from "./styles";
import { RiArrowDownSLine } from "react-icons/ri";

interface IProps {
  url: string;
  isDropdown?: boolean;
  children: React.ReactNode;
}

const NavbarLink = ({ url, children, isDropdown = false }: IProps) => {
  return (
    <NavbarLinkContainer>
      <h1>
        {children}
        {isDropdown && <RiArrowDownSLine />}
      </h1>
    </NavbarLinkContainer>
  );
};

export default NavbarLink;
