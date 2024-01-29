import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const API_KEY = 'ecfadc1d9b2290d9331728c2ab535e58';
  const API_URL = 'https://api.themoviedb.org/3';

  const fetchMovieCast = useCallback(async () => {
    try {
      const response = await axios.get(
        `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
      );
      setCast(response.data.cast);
    } catch (error) {
      console.error('Error al obtener el reparto de la película:', error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieCast();
  }, [fetchMovieCast]);

  return (
    <div>
      <h2>Reparto</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
      {movieId}
    </div>
  );
};

export default Cast;
