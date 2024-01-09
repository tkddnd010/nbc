import { config } from "../apikey.js";
export const fetchMovieData = async () => {
  const API_KEY = config.apikey;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  );
  const res = await response.json();
  return res.results;
};
