////////////////////////////
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  const API_KEY = 'e20674bfb837f8685226d846974c1e4f';
  const API_URL = 'https://api.themoviedb.org/3';

  async function fetchPopularMovies() {
    try {
      const response = await axios.get(
        `${API_URL}/trending/all/day?api_key=${API_KEY}`
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
    }
  }

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div>
      {movies.length > 0 ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {/* <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                /> */}
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
      {movieId}
    </div>
  );
};

export default Home;
