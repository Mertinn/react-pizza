import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { SidebarItemContainer, SidebarItemHeader } from "./styles";

interface IProps {
  title: string;
  isDropdown?: boolean;
}

const SidebarItem = ({ title, isDropdown = false }: IProps) => {
  return (
    <SidebarItemContainer>
      <SidebarItemHeader>
        <p>{title}</p>
        {isDropdown && <RiArrowDownSLine />}
      </SidebarItemHeader>
    </SidebarItemContainer>
  );
};

export default SidebarItem;
