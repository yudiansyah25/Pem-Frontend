import Movies from '../../components/Movies/Movies';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DetailMovie from '../../components/Detailmovie';
import { useEffect, useState } from 'react';
import ENDPOINTS from '../../components/utils/constants/enpoint';

const Detail = () => {
  const params = useParams();
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    getRecomendation();
  }, [params.id]);

  async function getRecomendation() {
    const URL = ENDPOINTS.Recommendations(params.id);
    const response = await axios(URL);

    setMovie(response.data.results);
  }

  return (
    <>
      <DetailMovie />
      <Movies movies={movies} title="Recommendations" />
    </>
  );
};

export default Detail;
