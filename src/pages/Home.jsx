import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import HomeMovieList from 'components/HomeMovieList/HomeMovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api-movies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
        setLoading(true);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      {error && <Error />}
      {loading ? <HomeMovieList movies={movies} /> : <Loader />}
    </div>
  );
};

export default Home;
