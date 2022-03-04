import React, { useEffect, useState } from "react";
import { IconContainer, LogoContainer, NavbarContainer } from "./styles";
import PizzaLogo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      setIsShrunk((isShrunk) => {
        if (scrollY > 0 && !isShrunk) return true;
        else if (scrollY < 1 && isShrunk) return false;

        return isShrunk;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavbarContainer isShrunk={isShrunk}>
        <LogoContainer>
          <img src={PizzaLogo} alt="Comic pizza" />
        </LogoContainer>

        <IconContainer onClick={() => setIsSidebarShown(!isSidebarShown)}>
          <FaBars />
        </IconContainer>
      </NavbarContainer>
      <Sidebar isShown={isSidebarShown} setIsShown={setIsSidebarShown} />
    </>
  );
};

export default Navbar;
