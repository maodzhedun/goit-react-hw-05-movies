import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomeMovieItem = ({ id, title, poster_path }) => {
  const baseUrlImg = 'https://image.tmdb.org/t/p/w200';
  const location = useLocation();
  return (
    <div className="home-movie-item">
      {/* <p>Release Date: {release_date}</p>
        <p>Rating: {vote_average}</p> */}
      <li key={id}>
        <Link to={`/movie/${id}`} state={{from: location}}>
          <h3>{title}</h3>
          <img src={`${baseUrlImg}${poster_path}`} alt={title} />
        </Link>
      </li>
     
    </div>
  );
};

export default HomeMovieItem;
