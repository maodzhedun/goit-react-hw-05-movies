import { Link } from 'react-router-dom';
import MovieCardItem from './MovieCardItem/MovieCardItem';
import  {CardContainer, Nav, NavList, NavLink} from './MovieDetailsCard.styled';

const MovieDetailsCard = ({ movie }) => {
  return (
    <CardContainer>
      <MovieCardItem movie={movie} />

      <Nav>
        <NavList>
          <NavLink>
            <Link to="cast">Cast</Link>
          </NavLink>
          <NavLink>
            <Link to="reviews">Reviews</Link>
          </NavLink>
        </NavList>
      </Nav>
    </CardContainer>
  );
};

export default MovieDetailsCard;
