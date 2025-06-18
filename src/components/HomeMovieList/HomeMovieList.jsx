import React from 'react';
import HomeMovieItem from 'components/HomeMovieItem/HomeMovieItem';
import { List } from './HomeMovieList.styled';

const HomeMovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <HomeMovieItem
          key={id}
          id={id}
          title={title}
          poster_path={poster_path}
        />
      ))}
    </List>
  );
};

export default HomeMovieList;
