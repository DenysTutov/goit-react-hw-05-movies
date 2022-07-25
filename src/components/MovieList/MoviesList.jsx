import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.scss';

export const MoviesList = ({ movies, title = null }) => {
  const location = useLocation();

  return (
    <>
      {title && <h1 className={styles.title}>{title}</h1>}

      <ul className={styles.list}>
        {movies.map(({ id, title, name }) => (
          <li key={id} className={styles.item}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
