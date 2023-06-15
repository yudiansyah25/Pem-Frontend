import { useState } from 'react';
import style from './Hero.module.css';
import ENDPOINTS from '../utils/constants/enpoint';
import { useEffect } from 'react';
import axios from 'axios';
import Button from '../UI';
function Hero() {
  //Membuat state movie
  const [movie, setMovie] = useState('');
  const genres = movie && movie.genres.map((genre) => genre.name).join(', ');
  // console.log(genres);

  // ambil trailer video
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  // console.log(trailer);

  useEffect(() => {
    DetailMovies();
  }, []);

  async function TrendingMovies() {
    const response = await axios(ENDPOINTS.TRANDINGMOVIES);
    return response.data.results[3];
  }

  async function DetailMovies() {
    const trendingMovies = await TrendingMovies();
    const id = trendingMovies.id;

    // fetch detail movie berdasarkan id
    // const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const URL = ENDPOINTS.TrendingMovies(id);

    const response = await axios(URL);
    console.log(response.data);
    setMovie(response.data);
  }
  return (
    <div className={style.container}>
      <section className={style.hero}>
        <div className={style.hero__left}>
          <h2 className={style.hero__title}>{movie.title}</h2>
          <h3 className={style.hero__gendre}>Gendre: {genres}</h3>
          <p className={style.hero__deskription}>{movie.overview}</p>
          {/* <Button to="a" href={trailer} md color="primary">
            Watch
          </Button> */}
          <Button as="a" target="_blank" href={trailer} md color="primary">
            Watch
          </Button>
        </div>
        <div className={style.hero__right}>
          <img className={style.hero__img} src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.Title} />
        </div>
      </section>
    </div>
  );
}
export default Hero;
