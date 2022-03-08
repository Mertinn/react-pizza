import React, { useEffect, useState } from "react";
import {
  IconContainer,
  LinksList,
  LogoContainer,
  NavbarButton,
  NavbarContainer,
} from "./styles";
import PizzaLogo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";
import NavbarLink from "./NavbarLink";

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

        <LinksList>
          <li>
            <NavbarLink isDropdown={true} url={"/#"}>
              Start
            </NavbarLink>
          </li>
          <li>
            <NavbarLink isDropdown={false} url={"/#"}>
              Menu
            </NavbarLink>
          </li>
          <li>
            <NavbarLink isDropdown={false} url={"/#"}>
              Promocje
            </NavbarLink>
          </li>
          <li>
            <NavbarLink isDropdown={false} url={"/#"}>
              Dostawa
            </NavbarLink>
          </li>
          <li>
            <NavbarLink isDropdown={false} url={"/#"}>
              Galeria
            </NavbarLink>
          </li>
          <li>
            <NavbarLink isDropdown={false} url={"/#"}>
              Kontakt
            </NavbarLink>
          </li>
          <li>
            <NavbarButton>Zamów</NavbarButton>
          </li>
        </LinksList>
      </NavbarContainer>
      <Sidebar isShown={isSidebarShown} setIsShown={setIsSidebarShown} />
    </>
  );
};

export default Navbar;
