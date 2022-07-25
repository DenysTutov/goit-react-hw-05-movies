import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesQuery } from 'services/fetchMoviesApi';
import { MoviesList } from 'components/MovieList/MoviesList';
import styles from './MovieSearch.module.scss';

export const MovieSearch = () => {
  const [movies, setMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') return;

    getMoviesQuery(query)
      .then(data => setMovie(data))
      .catch(console.log);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="query" placeholder="Enter movie name" />

        <button type="submit">Search</button>
      </form>

      {movies && <MoviesList movies={movies} />}
    </>
  );
};
