import { useState } from 'react';
import { useParams, Link, Route, useLocation } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetailsCard = () => {
 


    return (
        <div>
            <h1>Деталі фільму {movieId}</h1>
            {/* Логіка для відображення деталей фільму */}
            <nav>
                <Link to={`/movies/${movieId}/cast`}>Акторський склад</Link>
                <Link to={`/movies/${movieId}/reviews`}>Огляди</Link>
            </nav>

            <Route>
                <Route path={`/movies/:movieId/cast`} component={Cast} />
                <Route path={`/movies/:movieId/reviews`} component={Reviews} />
            </Route>
        </div>
    );
};

export default MovieDetailsCard;