import HomeMovieList from 'components/HomeMovieList/HomeMovieList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api-movies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <HomeMovieList movies={movies}/>
    </div>
  );
};

export default Home;
