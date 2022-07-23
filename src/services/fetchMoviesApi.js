import axios from 'axios';

const KEY = '1e6151af323d47cf8003a2a2a65ce0eb';

export const getTrandingMovies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

  const response = await axios.get(`${BASE_URL}?api_key=${KEY}&language=en-US`);
  return response.data;
};

export const getMovieById = async id => {
  const BASE_URL = 'https://api.themoviedb.org/3/movie';

  const response = await axios.get(
    `${BASE_URL}/${id}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};
