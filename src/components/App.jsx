import { Route, Routes } from 'react-router-dom';
import Movies from './Page/Movies';
import Navbar from './Page/Navbar';
import Home from './Page/Home';
import MovieDetails from './Page/MoviesDetails';
import Cast from './Page/Cast';
import Reviews from './Page/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route index element={<Cast />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

//////////////////////////////////////  original
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// export const App = () => {
//   const [movies, setMovies] = useState([]);

//   const API_KEY = 'e20674bfb837f8685226d846974c1e4f';
//   const API_URL = 'https://api.themoviedb.org/3';

//   async function fetchPopularMovies() {
//     try {
//       const response = await axios.get(
//         `${API_URL}/trending/all/day?api_key=${API_KEY}`
//       );

//       setMovies(response.data.results);
//     } catch (error) {
//       console.error('Error al obtener películas populares:', error);
//     }
//   }

//   useEffect(() => {
//     fetchPopularMovies();
//   }, []);

//   return (
//     <div>
//       {movies.length > 0 ? (
//         <ul>
//           {movies.map(movie => (
//             <li key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <p>{movie.title}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Cargando datos...</p>
//       )}
//     </div>
//   );
// };
