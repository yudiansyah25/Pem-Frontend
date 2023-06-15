import data from '../components/utils/constants/data.js';
import { useState } from 'react';
import Hero from '../components/Hero/Hero.js';
import Movies from '../components/Movies/Movies.js';
import From from '../components/From/From.js';
import Counter from '../components/Counter/index.js';

const Home = () => {
  // state
  const [movies, setMovies] = useState(data);
return(
  <>
  <Hero/> 
  <Movies title="Latest Movie" movies={movies} setMovies={setMovies}/>
  <From movies={movies} setMovies={setMovies}/>
  <h1>
    Selamat Datang
  </h1>

  </>
)
};

export default Home;
