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
          <li key={actor.id}>
            <div>
              {actor.profile_path && (
                <img
                  width="100px"
                  height="100px"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                />
              )}
            </div>
            <strong>{actor.name}</strong>
            <div>{actor.character}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const Cast = () => {
//   const [cast, setCast] = useState([]);
//   const { movieId } = useParams();

//   const API_KEY = 'ecfadc1d9b2290d9331728c2ab535e58';
//   const API_URL = 'https://api.themoviedb.org/3';

//   const fetchMovieCast = useCallback(async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
//       );
//       setCast(response.data.cast);
//     } catch (error) {
//       console.error('Error al obtener el reparto de la película:', error);
//     }
//   }, [movieId]);

//   useEffect(() => {
//     fetchMovieCast();
//   }, [fetchMovieCast]);

//   return (
//     <div>
//       <h2>Reparto</h2>
//       <ul>
//         {cast.map(actor => (
//           <li key={actor.id}>
//             {actor.name}
//             {actor.profile_path && (
//               <img
//                 width="100px"
//                 height="100px"
//                 src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
//                 alt={actor.name}
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cast;
