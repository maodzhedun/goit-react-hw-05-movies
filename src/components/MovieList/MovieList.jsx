import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, Item, StyledLink, Poster, Title } from './MovieList.styled';

const baseUrlImg = 'https://image.tmdb.org/t/p/w200';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ title, id, poster_path }) => (
          <Item key={id}>
            <StyledLink>
              <Link to={`${id}`} state={{ from: location }}>
                <Poster src={`${baseUrlImg}${poster_path}`} alt={title} />
                <Title>{title}</Title>
              </Link>
            </StyledLink>
          </Item>
        ))}
      </List>
    </>
  );
};

export default MovieList;
