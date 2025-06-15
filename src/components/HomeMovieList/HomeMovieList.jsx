import React from 'react';
import HomeMovieItem from 'components/HomeMovieItem/HomeMovieItem';

const HomeMovieList = ({ movies }) => {
  return (
    <div className="home-movie-list">
      {movies.map(({ id, title, poster_path }) => (
        <HomeMovieItem
          key={id}
          id={id}
          title={title}
          poster_path={poster_path}
        />
      ))}
    </div>
  );
};

export default HomeMovieList;
