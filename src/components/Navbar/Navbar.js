import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__brand}>
          <h1>IndoXXI App</h1>
        </div>

        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Home</li>
            <li className={styles.navbar__item}>Add Movie</li>
            <li className={styles.navbar__item}>Populer</li>
            <li className={styles.navbar__item}>Now Playing</li>
            <li className={styles.navbar__item}>Top Rated</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
