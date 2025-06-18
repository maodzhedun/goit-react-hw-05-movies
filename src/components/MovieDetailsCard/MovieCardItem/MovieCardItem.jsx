import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Container,
  Info,
  Poster,
  Title,
  Paragraph,
  BackLink,
} from './MovieCardItem.styled';

const MovieCardItem = ({ movie }) => {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const baseUrlImg = 'https://image.tmdb.org/t/p/w300';

  const { original_title, poster_path, overview, vote_average, genres } = movie;
  return (
    <Container>
      <Info>
        <BackLink>
          <Link to={backLink.current}>Go back</Link>
        </BackLink>
        <Title>{original_title}</Title>
        <Poster src={`${baseUrlImg}${poster_path}`} alt={original_title} />
        <Paragraph>
          <strong>Overview:</strong> {overview}
        </Paragraph>
        <Paragraph>
          <strong>Rating:</strong> {vote_average}
        </Paragraph>
        <Paragraph>
          <strong>Genres:</strong>
          {genres && genres.length > 0
            ? genres.map(genre => genre.name).join(', ')
            : 'Non Genres'}
        </Paragraph>
      </Info>
    </Container>
  );
};

export default MovieCardItem;
