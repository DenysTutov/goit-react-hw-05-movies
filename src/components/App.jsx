import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

import { HomeView } from 'views/HomeView';
import { MoviesView } from 'views/MoviesView';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="home" element={<HomeView />} />

          <Route path="movies" element={<MoviesView />}>
            <Route path=":movieId" element={<MovieDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
