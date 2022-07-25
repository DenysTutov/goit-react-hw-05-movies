import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/fetchMoviesApi';
import styles from './CastMovie.module.scss';

export const CastMovie = () => {
  const [castMovie, setCastMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => setCastMovie(data))
      .catch(console.log);
  }, [movieId]);

  if (!castMovie) {
    return <div>No casts</div>;
  }

  return (
    <ul>
      {castMovie.map(({ name, character, profile_path }) => (
        <li key={name} className={styles.item}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              className={styles.img}
              width="100"
            />
          ) : (
            <div className={styles.imgNotFound}>Image not found</div>
          )}
          <div>
            <p>
              <b>{name}</b>
            </p>
            <p>
              Character: <b>{character}</b>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
