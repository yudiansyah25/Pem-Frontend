import { useEffect, useState } from 'react';
import axios from 'axios';
import StyledMovie from './detailMovie.modules';
import { useParams } from 'react-router-dom';
import ENDPOINTS from '../utils/constants/enpoint';

const DetailMovie = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const genres = movie.genres && movie.genres.map((genre) => genre.name).join(', ');
  const trailer = movie.videos && movie.videos.results[0] && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    getDetailMovie();
  }, [params.id]);

  async function getDetailMovie() {
    const URL = ENDPOINTS.DetailMovie(params.id);
    const response = await axios(URL);

    setMovie(response.data);
  }

  return (
    <StyledMovie>
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
      </div>
      <div className="info">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <a href={trailer}>Watch</a>
      </div>
    </StyledMovie>
  );
};

export default DetailMovie;
