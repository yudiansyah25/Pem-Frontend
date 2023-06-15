import { useEffect, useState } from 'react';
import axios from 'axios';
import Hero from '../../components/Hero/Hero';
import Movies from '../../components/Movies/Movies';

const NowPlaying = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    NowPlayingMovies();
  }, []);

  async function NowPlayingMovies() {
    const response = await axios(URL);
    setMovies(response.data.results);
  }

  return (
    <div>
      <Hero />
      <Movies title="Now Playing" movies={movies} />
    </div>
  );
};

export default NowPlaying;
