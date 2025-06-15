import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api-movies';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const dataMovie = await getMovieDetails();
        setMovie(dataMovie);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <p>Завантаження...</p>;
  }
  
  return (
    <div>
      MovieDetails
      <button type="button">Go back</button>
      <h1>{movie.original_title}</h1>
            <img src={movie.poster_path} alt={movie.original_title} />
            <p><strong>Огляд:</strong> {movie.overview}</p>
            <p><strong>Рейтинг:</strong> {movie.vote_average}</p>
            <p>
                <strong>Жанри:</strong> 
                {movie.genres && movie.genres.length > 0 
                    ? movie.genres.map(genre => genre.name).join(', ') 
                    : 'Немає жанрів'}
            </p>
            
            <nav>
                <Link to={`/movies/${movieId}/cast`} state={{ from: location }}>Акторський склад</Link>
                <Link to={`/movies/${movieId}/reviews`} state={{ from: location }}>Огляди</Link>
            </nav>

            <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
            </Routes>
    </div>
  );
};

export default MovieDetails;
