import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  // Destructing props: state movies
  const { movies, setMovies } = props;

  // Membuat state title dan year
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [poster, setPoster] = useState("");

  // Membuat state: isTitleError, isYearError
  const [isTitleError, setIsTitleError] = useState(false);
  const [isYearError, setIsYearError] = useState(false);
  const [isTypeError, setIsTypeError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  /**
   * Membuat fungsi handleTitle
   * Dijalankan ketika nilai input berubah
   */
  function handleTitle(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title nilai baru: input saat ini.
     */
    setTitle(e.target.value);
  }

  /**
   * Membuat fungsi handleYear
   * Dijalankan ketika nilai input berubah
   */
  function handleYear(e) {
    /**
     * Jalankan fungsi setYear.
     * Set year nilai baru: input saat ini.
     */
    setYear(e.target.value);
  }

  /**
   * Membuat fungsi handleType
   * Dijalankan ketika nilai input berubah
   */
  function handleType(e) {
    /**
     * Jalankan fungsi setType.
     * Set type nilai baru: input saat ini.
     */
    setType(e.target.value);
  }

  /**
   * Membuat fungsi handlePoster
   * Dijalankan ketika nilai input berubah
   */
  function handlePoster(e) {
    /**
     * Jalankan fungsi setPoster.
     * Set poter nilai baru: input saat ini.
     */
    setPoster(e.target.value);
  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    // Jika title kosong, set isTitleError true
    if (title === "") {
      setIsTitleError(true);
    }
    // Jika year kosong, set isYearError true
    else if (year === "") {
      setIsYearError(true);
      setIsTitleError(false);
    }
    // Jika year kosong, set isYearError true
    else if (type === "") {
      setIsTypeError(true);
      setIsYearError(false);
    }
    // Jika year kosong, set isYearError true
    else if (poster === "") {
      setIsPosterError(true);
      setIsTypeError(false);
    }
    // Jika tidak, maka push movie dan set error false
    else {
      const movie = {
        id: nanoid(),
        title: title,
        year: year,
        type: type,
        poster: poster,
      };

      // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsYearError(false);
      setIsTypeError(false);
      setIsPosterError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleTitle}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>*Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="year" className={styles.form__label}>
                Year
              </label>
              <input
                id="year"
                className={styles.form__input}
                type="number"
                name="year"
                // Memberikan value input: year
                value={year}
                // Memberikan event onChange
                onChange={handleYear}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isYearError true maka render error
               */}
              {isYearError && <Alert>*Year Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label className={styles.form__label} htmlFor="type">
                Genre Movies:
              </label>
                <select className={styles.form__input} id="type" name="type" onChange={handleType} value={type}>
                  <option value="">Pilih genre</option>
                  <option value="drama">Drama</option>
                  <option value="romance">Romance</option>
                  <option value="horror">Horror</option>
                  <option value="adventure">Adventure</option>
                </select>
              
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTypeError true maka render error
               */}
              {isTypeError && <Alert>*Type Wajib Dipilih</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="poster" className={styles.form__label}>
                Link Poster
              </label>
              <input
                id="poster"
                className={styles.form__input}
                type="text"
                name="poster"
                // Memberikan value input: poster
                value={poster}
                // Memberikan event onChange
                onChange={handlePoster}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isPosterError true maka render error
               */}
              {isPosterError && <Alert>*Link Poster Wajib Diisi</Alert>}
            </div>

            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
