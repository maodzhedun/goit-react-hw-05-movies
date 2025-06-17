import React, { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/api-movies';
import { useParams } from 'react-router-dom';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';
import ReviewsList from '../Reviews/ReviewsList/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReview = async id => {
      setLoading(true);
      try {
        const dataReview = await getMovieReviews(id);
        setReviews(dataReview);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReview(movieId);
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {error && <Error message={error} />}
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <h3>We don't have any reviews for this movie</h3>
      )}
    </div>
  );
};

export default Reviews;
