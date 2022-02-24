import React, { useState } from "react";
import { IconContainer, LogoContainer, NavbarContainer } from "./styles";
import PizzaLogo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(false);

  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <img src={PizzaLogo} alt="Comic pizza" />
        </LogoContainer>

        <IconContainer onClick={() => setIsSidebarShown(!isSidebarShown)}>
          <FaBars />
        </IconContainer>
      </NavbarContainer>
      <Sidebar isShown={true} />
    </>
  );
};

export default Navbar;
