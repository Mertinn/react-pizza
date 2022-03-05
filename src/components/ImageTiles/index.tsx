import React from "react";
import { ImageTilesContainer, TileContainer } from "./styles";

export interface IImage {
  src?: string;
  fill?: string;
  text: string;
  textColor?: string;
}

interface IProps {
  images: IImage[];
}

const ImageTiles = ({ images }: IProps) => {
  return (
    <ImageTilesContainer>
      {images.map((image) => (
        <TileContainer
          background={image.src || image.fill || "white"}
          textColor={image.textColor || "white"}
        >
          {image.text}
        </TileContainer>
      ))}
    </ImageTilesContainer>
  );
};

export default ImageTiles;
