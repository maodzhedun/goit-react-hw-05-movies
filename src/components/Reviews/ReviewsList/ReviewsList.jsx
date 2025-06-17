import React from 'react';
import ReviewsItem from '../ReviewsItem/ReviewsItem';

const ReviewsList = ({ reviews }) => {
  return (
    <div>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <ReviewsItem author={author} content={content} />
        </li>
      ))}
    </div>
  );
};

export default ReviewsList;
