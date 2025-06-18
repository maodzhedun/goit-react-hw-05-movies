import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api-movies';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import CastList from './CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCast = async id => {
      setLoading(true);
      try {
        const dataCredits = await getMovieCredits(id);
        setCast(dataCredits);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchCast(movieId);
  }, [movieId]);
  return (
    <div>
      {error && <Error />}
      {loading ? <CastList cast={cast} /> : <Loader />}
    </div>
  );
};

export default Cast;
