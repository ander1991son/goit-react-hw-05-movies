import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const API_KEY = 'e20674bfb837f8685226d846974c1e4f';
  const API_URL = 'https://api.themoviedb.org/3';

  async function fetchMovieReviews() {
    try {
      const response = await axios.get(
        `${API_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
      );

      setReviews(response.data.results);
    } catch (error) {
      console.error('Error al obtener reseñas de la película:', error);
    }
  }

  useEffect(() => {
    fetchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reseñas</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
