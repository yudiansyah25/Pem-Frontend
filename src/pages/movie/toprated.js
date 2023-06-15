import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';
const TopRatedMovie = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    TopRatedMovies();
  }, []);

  async function TopRatedMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }
  return (
    <div>
      <Hero />
      <Movies title="Top Rated" movies={movies} />
    </div>
  );
};

export default TopRatedMovie;
