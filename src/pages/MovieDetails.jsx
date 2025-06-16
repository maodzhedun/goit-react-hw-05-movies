import Error from 'components/Error/Error';
import React, { useEffect, useState } from 'react';
import {  Outlet,   useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api-movies';
import MovieDetailsCard from 'components/MovieDetailsCard/MovieDetailsCard';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        console.log(id);
        const dataMovie = await getMovieDetails(id);
        console.log(dataMovie)
        setMovie(dataMovie);
        setLoading(true);
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

  // if (!movie) {
  //   return <p>Завантаження...</p>;
  // }

  return (
    <div>
      MovieDetails
      {error && <Error />}
      {loading ? <MovieDetailsCard movie={movie} /> : <Loader />}
      <Outlet/>
 
    </div>
  );
};

export default MovieDetails;
