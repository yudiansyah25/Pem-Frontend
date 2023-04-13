import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

import { nanoid } from "nanoid";


function Movies(props) {
  // destructing data props
  const {movies, setMovies} = props;
  
 function handleClick() {
    const movie = {
      id: nanoid(),
      title: "Jigsaw",
      year: 2021,
      type: "movie",
      poster: "https://picsum.photos/300/400",
    };

    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {
            movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />
            })
          }
        </div>
        {/* button yang di klik nambah data */}
        <button className={styles.movies__button} onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
