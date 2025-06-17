import { Link } from 'react-router-dom';
import MovieCardItem from './MovieCardItem/MovieCardItem';

const MovieDetailsCard = ({ movie }) => {
  return (
    <div>
      <MovieCardItem movie={movie} />

      <nav>
        <ul>
          <li>
            <Link to="cast">Акторський склад</Link>
          </li>
          <li>
            <Link to="reviews">Огляди</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MovieDetailsCard;
