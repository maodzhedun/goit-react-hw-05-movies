import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Item, StyledLink, Title, Poster } from './HomeMovieItem.styled';

const HomeMovieItem = ({ id, title, poster_path }) => {
  const baseUrlImg = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();
  return (
    <div className="home-movie-item">
      <Item key={id}>
        <StyledLink>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <Title>{title}</Title>
            <Poster src={`${baseUrlImg}${poster_path}`} alt={title} />
          </Link>
        </StyledLink>
      </Item>
    </div>
  );
};

export default HomeMovieItem;
