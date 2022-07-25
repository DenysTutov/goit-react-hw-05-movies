import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services/fetchMoviesApi';
import { AdditionalInfo } from 'components/MovieDetails/AddititonalInfo/AddititonalInfo';
import { InfoMovie } from './InfoMovie/InfoMovie';
import { GoBackButton } from 'components/GoBackButton/GoBackButton';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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

  return (
    <>
      <GoBackButton backLinkHref={backLinkHref} />
      <InfoMovie movie={movie} />
      <AdditionalInfo />
      <Outlet />
    </>
  );
};
