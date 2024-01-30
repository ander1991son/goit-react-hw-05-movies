import React, { useState, useEffect, useCallback } from 'react';
import css from './MoviesDetails.module.css';
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
      <Link to="/">
        <button>Go back</button>
      </Link>
      <div className={css.movieDetails}>
        <div>
          {movieDetails.poster_path && (
            <img
              className={css.Movieimg}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          )}
        </div>
        <div className={css.movieinfo}>
          <h2>{`${movieDetails.title} (${
            movieDetails.release_date
              ? movieDetails.release_date.substring(0, 4)
              : 'N/A'
          })`}</h2>
          <p className={css.movietext}>
            <strong>User Score:</strong> {movieDetails.vote_average}
          </p>
          <p className={css.movietext}>
            <strong>Overview:</strong> <br />
            {movieDetails.overview}
          </p>
          <p className={css.movietext}>
            <strong>Genres: </strong>
            <br />
            {movieDetails.genres &&
              movieDetails.genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>

      <div>
        <ul className={css.movienavlink}>
          <h2>Additional Information</h2>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default MovieDetails;

// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import { useParams, Link, NavLink, Routes, Route } from 'react-router-dom';
// import Cast from './Cast';
// import Reviews from './Reviews';

// const MovieDetails = () => {
//   const [movieDetails, setMovieDetails] = useState({});
//   const { movieId } = useParams();

//   const API_KEY = 'ecfadc1d9b2290d9331728c2ab535e58';
//   const API_URL = 'https://api.themoviedb.org/3';

//   const fetchMovieDetails = useCallback(async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
//       );
//       setMovieDetails(response.data);
//     } catch (error) {
//       console.error('Error al obtener detalles de la película:', error);
//     }
//   }, [movieId]);

//   useEffect(() => {
//     fetchMovieDetails();
//   }, [fetchMovieDetails]);

//   return (
//     <div>
//       <Link to="/">{<button>Back</button>}</Link>
//       <div>
//         {movieDetails.poster_path && (
//           <img
//             width="100px"
//             height="100px"
//             src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
//             alt={movieDetails.title}
//           />
//         )}
//       </div>
//       <h2>{movieDetails.title}</h2>
//       <p>{movieDetails.overview}</p>
//       <div>
//         <NavLink to="cast">Cast</NavLink>
//         <NavLink to="reviews">Reviews</NavLink>
//         <Routes>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default MovieDetails;
