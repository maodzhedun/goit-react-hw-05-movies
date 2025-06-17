import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MovieCardItem = ({ movie }) => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const baseUrlImg = 'https://image.tmdb.org/t/p/w300';

  const {original_title,poster_path, overview,vote_average, genres} = movie
  return (
    <div>
      <Link to={backLink.current}>Go back</Link>
      <h1>{original_title}</h1>
      <img
        src={`${baseUrlImg}${poster_path}`}
        alt={original_title}
      />
      <p>
        <strong>Огляд:</strong> {overview}
      </p>
      <p>
        <strong>Рейтинг:</strong> {vote_average}
      </p>
      <p>
        <strong>Жанри:</strong>
        {genres && genres.length > 0
          ? genres.map(genre => genre.name).join(', ')
          : 'Немає жанрів'}
      </p>
    </div>
  );
};

export default MovieCardItem;
