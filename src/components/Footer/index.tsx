import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { FooterContainer, SocialsList, TextContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <TextContainer>
        <h1>Pizzeria</h1>
        <p>86-031 Osielsko</p>
        <p>Tymiankowa 15</p>
        <p>Tel: +48 000 000 000</p>

        <br />

        <SocialsList>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <FaTwitterSquare />
          </li>
        </SocialsList>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;
