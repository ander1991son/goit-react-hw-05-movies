import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, Link, NavLink, Routes, Route } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const API_KEY = 'ecfadc1d9b2290d9331728c2ab535e58';
  const API_URL = 'https://api.themoviedb.org/3';

  const fetchMovieDetails = useCallback(async () => {
    try {
      const response = await axios.get(
        `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
      );
      setMovieDetails(response.data);
    } catch (error) {
      console.error('Error al obtener detalles de la película:', error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetails();
  }, [fetchMovieDetails]);

  return (
    <div>
      <Link to="/">{<button>Back</button>}</Link>
      <div>
        {movieDetails.poster_path && (
          <img
            width="100px"
            height="100px"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        )}
      </div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <div>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetails;
