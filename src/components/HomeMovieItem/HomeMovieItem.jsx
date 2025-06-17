import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeMovieItem = ({ id, title, poster_path }) => {
  const baseUrlImg = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();
  return (
    <div className="home-movie-item">
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <h3>{title}</h3>
          <img src={`${baseUrlImg}${poster_path}`} alt={title} />
        </Link>
      </li>
    </div>
  );
};

export default HomeMovieItem;
