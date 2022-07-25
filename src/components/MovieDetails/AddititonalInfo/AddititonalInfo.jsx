import { Link } from 'react-router-dom';

export const AdditionalInfo = () => {
  return (
    <>
      <div>
        <h4>Addititonal information</h4>
        <ul>
          <li>
            <Link to={'cast'}>Cast</Link>
          </li>

          <li>
            <Link to={'reviews'}>Reviews</Link>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};
