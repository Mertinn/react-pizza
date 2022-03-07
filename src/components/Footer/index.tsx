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
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              <FaTwitterSquare />
            </a>
          </li>
        </SocialsList>
      </TextContainer>
    </FooterContainer>
  );
};

export default Footer;
