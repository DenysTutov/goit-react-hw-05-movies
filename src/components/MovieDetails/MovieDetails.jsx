import { Outlet } from 'react-router-dom';
import { AdditionalInfo } from 'components/MovieDetails/AddititonalInfo/AddititonalInfo';
import { InfoMovie } from './InfoMovie/InfoMovie';

export const MovieDetails = () => {
  return (
    <>
      <InfoMovie />
      <AdditionalInfo />
      <Outlet />
    </>
  );
};
