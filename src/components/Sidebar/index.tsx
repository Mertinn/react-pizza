import React from "react";
import { BottomPanel, SidebarContainer, SidebarList, TopPanel } from "./styles";
import SidebarItem from "./SidebarItem";
import { IoClose } from "react-icons/io5";
import Button from "../Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import v from "../variables";

interface IProps {
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ isShown, setIsShown }: IProps) => {
  return (
    <SidebarContainer isShown={isShown}>
      <TopPanel>
        <IoClose onClick={() => setIsShown(false)} />
      </TopPanel>

      <SidebarList>
        <li>
          <SidebarItem
            title={"Start"}
            isDropdown={true}
            dropdownItems={v.mainDropdownItems}
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
