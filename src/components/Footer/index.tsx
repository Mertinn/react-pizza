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
      </TextContainer>

      <SocialsList>
        <li>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookSquare />
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitterSquare />
          </a>
        </li>
      </SocialsList>
    </FooterContainer>
  );
};

export default Footer;
