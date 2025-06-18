import React from 'react';
import { Container, Author, Content } from "./ReviewsItem.styled";

const ReviewsItem = ({ author, content }) => {
  return (
    <Container>
      <Author>{author}</Author>
      <Content>{content}</Content>
    </Container>
  );
};

export default ReviewsItem;
