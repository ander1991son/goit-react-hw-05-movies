// import React from 'react';
// import { useParams } from 'react-router-dom';

// const MovieDetails = () => {
//   const { movieId } = useParams();

//   // Obtén los detalles de la película según el ID
//   // Aquí deberías tener lógica para cargar la información específica de la película, incluida la URL de la imagen.

//   return (
//     <div>
//       <h2>Detalles de la película {movieId}</h2>
//       {/* Mostrar la imagen correspondiente */}
//       <img src={`/path-to-image-${movieId}.jpg`} alt={`Movie ${movieId}`} />
//       {/* Otros detalles de la película */}
//     </div>
//   );
// };

// export default MovieDetails;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  const API_KEY = 'e20674bfb837f8685226d846974c1e4f';
  const API_URL = 'https://api.themoviedb.org/3';

  async function fetchMovieDetails() {
    try {
      const response = await axios.get(
        `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
      );

      setMovieDetails(response.data);
    } catch (error) {
      console.error('Error al obtener detalles de la película:', error);
    }
  }

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      {/* Agrega más detalles según tus necesidades */}
    </div>
  );
};

export default MovieDetails;
