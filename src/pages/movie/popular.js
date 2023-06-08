import axios, { Axios } from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Await } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const Popular = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {getPopularMovies();}, []);
  async function getPopularMovies(){
    const response = await axios(URL);
    setMovies(response.data.results);
}
  return (
    <>
      <Hero/>
      <Movies movies={movies}/>
      
    </>
  );
};

export default Popular;
