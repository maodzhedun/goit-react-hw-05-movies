// import { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetailsCard = ({movie}) => {
     const location = useLocation();
     const movieId = movie.id;
    //  const baseUrlImg = 'https://image.tmdb.org/t/p/w300';
  return (
    <div>
      MovieDetails
      <button type="button">Go back</button>
      <h1>{movie.original_title}</h1>
      <img src={movie.poster_path} alt={movie.original_title} />
      <p>
        <strong>Огляд:</strong> {movie.overview}
      </p>
      <p>
        <strong>Рейтинг:</strong> {movie.vote_average}
      </p>
      <p>
        <strong>Жанри:</strong>
        {movie.genres && movie.genres.length > 0
          ? movie.genres.map(genre => genre.name).join(', ')
          : 'Немає жанрів'}
      </p>
      <nav>
        <Link to={`/movies/${movieId}/cast`} state={{ from: location }}>
          Акторський склад
        </Link>
        <Link to={`/movies/${movieId}/reviews`} state={{ from: location }}>
          Огляди
        </Link>
      </nav>
      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>

    // <div>
    //     <h1>Деталі фільму {movieId}</h1>
    //     {/* Логіка для відображення деталей фільму */}
    //     <nav>
    //         <Link to={`/movies/${movieId}/cast`}>Акторський склад</Link>
    //         <Link to={`/movies/${movieId}/reviews`}>Огляди</Link>
    //     </nav>

    //     <Route>
    //         <Route path={`/movies/:movieId/cast`} component={Cast} />
    //         <Route path={`/movies/:movieId/reviews`} component={Reviews} />
    //     </Route>
    // </div>
  );
};

export default MovieDetailsCard;
