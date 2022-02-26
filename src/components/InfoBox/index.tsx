import React from "react";
import { InfoBoxContainer, InfoBoxDescription, InfoBoxTitle } from "./styles";

interface IProps {
  title: string;
  description: string;
}

const InfoBox = ({ description, title }: IProps) => {
  return (
    <InfoBoxContainer>
      <InfoBoxTitle>{title}</InfoBoxTitle>
      <InfoBoxDescription>{description}</InfoBoxDescription>
    </InfoBoxContainer>
  );
};

export default InfoBox;
