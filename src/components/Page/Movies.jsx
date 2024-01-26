import React from 'react';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  // Lista de películas con nombres y rutas de imágenes
  const movies = [
    { id: 1, name: 'Movie 1', imageUrl: '/path-to-image-1.jpg' },
    { id: 2, name: 'Movie 2', imageUrl: '/path-to-image-2.jpg' },
    // Agrega más películas según sea necesario
  ];

  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {/* Enlace a la página de detalles de la película */}
            <NavLink to={`/movies/${movie.id}`}>{movie.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;

////////////////////////////////////        original funcionando
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Movies = () => {
//   return (
//     <div style={{ display: 'flex', gap: '10px' }}>
//       <NavLink to="/movies/1">movie1</NavLink>
//       <NavLink to="/movies/2">movie2</NavLink>
//     </div>
//   );
// };

// export default Movies;
