import Error from 'components/Error/Error';
import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api-movies';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async id => {
      setLoading(true);
      try {
        const dataMovie = await getMovieDetails(id);
        setMovie(dataMovie);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchMovieDetails(movieId);

    return () => {
      fetchMovieDetails(movieId);
    };
  }, [movieId]);

  return (
    <div>
      {error && <Error />}
      {loading ? <MovieDetailsCard movie={movie} /> : <Loader />}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
