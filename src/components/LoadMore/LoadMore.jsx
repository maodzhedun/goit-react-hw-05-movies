import React from 'react';
import {LoadMoreButton} from "./LoadMore.styled";

const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      Load more
    </LoadMoreButton>
  );
};

export default LoadMore;