import React from "react";
import { ReviewContainer, ReviewText } from "./styles";

interface IProps {
  text: string;
  author: string;
}

const Review = ({ text, author }: IProps) => {
  return (
    <ReviewContainer>
      <ReviewText>{text}</ReviewText>
      <p>{author}</p>
    </ReviewContainer>
  );
};

export default Review;
