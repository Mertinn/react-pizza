import React from "react";
import { BottomPanel, SidebarContainer, SidebarList, TopPanel } from "./styles";
import SidebarItem from "./SidebarItem";
import { IoClose } from "react-icons/io5";
import Button from "../Button";
import { MdKeyboardArrowRight } from "react-icons/md";

interface IProps {
  isShown: boolean;
}

const Sidebar = ({ isShown }: IProps) => {
  const mainDropdownItems = [
    { title: "Strona główna", link: "/" },
    { title: "O nas", link: "/" },
    { title: "Opinie", link: "/" },
  ];
  return (
    <SidebarContainer>
      <TopPanel>
        <IoClose />
      </TopPanel>

      <SidebarList>
        <li>
          <SidebarItem
            title={"Start"}
            isDropdown={true}
            dropdownItems={mainDropdownItems}
          />
        </li>
        <li>
          <SidebarItem title={"Menu"} />
        </li>
        <li>
          <SidebarItem title={"Promocje"} />
        </li>
        <li>
          <SidebarItem title={"Dostawa"} />
        </li>
        <li>
          <SidebarItem title={"Galeria"} />
        </li>
        <li>
          <SidebarItem title={"Kontakt"} />
        </li>
      </SidebarList>
      <BottomPanel>
        <Button>
          ZAMÓW ONLINE <MdKeyboardArrowRight size={30} />
        </Button>
      </BottomPanel>
    </SidebarContainer>
  );
};

export default Sidebar;
