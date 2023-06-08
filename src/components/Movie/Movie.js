import style from '../Movies/Movies.module.css';

// tangkap props
const Movie = (props) => {
  // destructing object props
  const { movie } = props;
  return (
    <div className={style.movie}>
      <img className={style.movie__image} src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
      <h3 className={style.movie__title}>{movie.title}</h3>
      <p className={style.movie__date}>{movie.year || movie.release_date}</p>
    </div>
  );
};

export default Movie;
