import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  const API_KEY = 'e20674bfb837f8685226d846974c1e4f';
  const API_URL = 'https://api.themoviedb.org/3';

  async function fetchMovieCast() {
    try {
      const response = await axios.get(
        `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
      );

      setCast(response.data.cast);
    } catch (error) {
      console.error('Error al obtener el reparto de la película:', error);
    }
  }

  useEffect(() => {
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <h2>Reparto</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
