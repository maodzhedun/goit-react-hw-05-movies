import React from 'react';

const ReviewsItem = ({ author, content }) => {
  return (
    <div>
      <h3>{author}</h3>
      <p>{content}</p>
    </div>
  );
};

export default ReviewsItem;
