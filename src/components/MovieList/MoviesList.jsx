import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrandingMovies } from '../../services/fetchMoviesApi';
import styles from './MoviesList.module.scss';

export const MoviesList = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrandingMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => console.log(error));
  }, []);

  if (!movies) {
    return;
  }

  return (
    <main className={styles.main}>
      <h1>Trending today</h1>
      <ul className={styles.list}>
        {movies.map(({ id, title, name }) => (
          <li key={id} className={styles.item}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
