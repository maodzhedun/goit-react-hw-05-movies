import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import MovieForm from 'components/MovieForm/MovieForm';
import LoadMore from 'components/LoadMore/LoadMore';
import { useEffect, useState } from 'react';
import { searchMovies } from 'services/api-movies';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!queryParams) return setMovies([]);
    const fetchMovies = async (query, page) => {
      setLoading(true);
      try {
        const { results, total_result, total_pages } = await searchMovies(
          query,
          page
        );
        if (page === 1) {
          setMovies(results);
        } else {
          setMovies(prevMovies => [...prevMovies, ...results]);
          setLoadMore(total_pages < Math.ceil(total_result / 20));
        }
        setLoadMore(true);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
        setLoading(true);
      }
    };

    fetchMovies(queryParams, page);
  }, [page, queryParams]); // searchQuery

  useEffect(() => {
    if (!queryParams) return setLoadMore(false);
  }, [queryParams]);
  const onQuery = query => {
    setSearchParams(query);
  };

  const onClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <MovieForm
        onQuery={onQuery}
        queryParams={queryParams}
        setPage={setPage}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          {movies.length !== 0 && <h2>Movies: '{queryParams}'</h2>}
          <MovieList movies={movies} />
          {loadMore && <LoadMore onClick={onClick} />}
        </>
      )}
      {error && <Error />}
    </div>
  );
};

export default Movies;
