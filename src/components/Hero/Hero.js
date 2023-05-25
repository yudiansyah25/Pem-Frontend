import { useState } from 'react';
import style from './Hero.module.css';
function Hero(){
  //Membuat state movie
 const [movie, setMovie] = useState("");
 async function fetchMovie(){
  //Melakukan side effect : fetch data movie (api);
  const response = await fetch(" https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

  const data = await response.json();
  
  //set movie data dengan data movie hasil fetech
   setMovie(data);
 }

 useEffect(fetchMovie,[]);
 console.log(movie);
  return (
    <div className={style.container}>
      <section className={style.hero}>
        <div className={style.hero__left}>
          <h2 className={style.hero__title}>{movie.Title}</h2>
          <h3 className={style.hero__gendre}>Gendre: {movie.Gendre}</h3>
          <p className={style.hero__deskription}>{movie.Plot}</p>
          <button className={style.hero__button}>Watch</button>
        </div>
        <div className={style.hero__right}>
          <img className={style.hero__img} src={movie.Poster} alt={movie.Title} />
        </div>
      </section>
    </div>
  );

};
export default Hero;
