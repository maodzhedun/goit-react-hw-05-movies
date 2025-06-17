import React from 'react';
import {ButtonMore} from "./LoadMore.styled";

const LoadMore = ({ onClick }) => {
  return (
    <ButtonMore type="button" onClick={onClick}>
      Load more
    </ButtonMore>
  );
};

export default LoadMore;