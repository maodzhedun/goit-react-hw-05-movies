
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Layout  = lazy(() => import('../components/Layout/Layout'));
const Cast  = lazy(() => import('../components/Cast/Cast'));
const Reviews  = lazy(() => import('../components/Reviews/Reviews'));



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
};
