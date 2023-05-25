import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
const Navbar = () => {
  return (
    <div className={style.container}>
      <nav className={style.navbar}>
        <div>
          <h1 className={style.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={style.navbar__list}>
            <li className={style.navbar__items}>
              <Link to="/" className={style.li}>
                Home
              </Link>
            </li>
            <li className={style.navbar__items}>
              <Link to="/movie/create" className={style.li}>
                Add Movie
              </Link>
            </li>
            <li className={style.navbar__items}>
              <Link to="/movie/popular" className={style.li}>
                Popular
              </Link>
            </li>
            <li className={style.navbar__items}>
              <Link to="/movie/now" className={style.li}>
                Now Playing
              </Link>
            </li>
            <li className={style.navbar__items}>
              <Link to="/movie/top" className={style.li}>
                Top Rated
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
