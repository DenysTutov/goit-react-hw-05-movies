import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

import { HomeView } from 'pages/Home';
import { MoviesView } from 'pages/Movies';
import { MovieSearch } from './MovieSearch/MovieSearch';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { CastMovie } from './MovieDetails/CastMovie/CastMovie';
import { ReviewsMovie } from './MovieDetails/ReviewsMovie/ReviewsMovie';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeView />} />

          <Route path="movies" element={<MoviesView />}>
            <Route index element={<MovieSearch />} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<CastMovie />} />
              <Route path="reviews" element={<ReviewsMovie />} />
            </Route>
          </Route>

          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </>
  );
};
