import React from 'react';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import { List, Item } from "./ReviewsList.styled";

const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <Item key={id}>
          <ReviewsItem author={author} content={content} />
        </Item>
      ))}
    </List>
  );
};

export default ReviewsList;
