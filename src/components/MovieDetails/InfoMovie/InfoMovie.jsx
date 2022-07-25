import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../../services/fetchMoviesApi';
import styles from './InfoMovie.module.scss';

export const InfoMovie = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(console.log);
  }, [movieId]);

  if (!movie) {
    return;
  }

  const {
    title,
    name,
    overview,
    genres,
    release_date,
    first_air_date,
    poster_path,
  } = movie;

  return (
    <>
      <div className={styles.cardFilm}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title || name}
          width="200"
          className={styles.img}
        />
        <div>
          <h2>
            {title || name} ({(first_air_date || release_date).slice(0, 4)})
          </h2>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h3>Genres</h3>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
        </div>
      </div>
      <hr />
    </>
  );
};
