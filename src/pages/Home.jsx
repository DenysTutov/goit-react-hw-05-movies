import { useState, useEffect } from 'react';
import { getTrandingMovies } from '../services/fetchMoviesApi';
import { MoviesList } from 'components/MovieList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrandingMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(console.log);
  }, []);

  if (!movies) {
    return;
  }

  return (
    <main>
      <MoviesList movies={movies} title={'Trending today'} />
    </main>
  );
};
