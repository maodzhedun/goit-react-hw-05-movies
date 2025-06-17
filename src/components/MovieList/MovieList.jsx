import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const baseUrlImg = 'https://image.tmdb.org/t/p/w200';

const MovieList = ({movies}) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ title, id, poster_path }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              <img src={`${baseUrlImg}${poster_path}`} alt={title} />
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieList;
