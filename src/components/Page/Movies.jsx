import React, { useState, useEffect } from 'react';

const Movies = () => {
  const API_KEY = 'ecfadc1d9b2290d9331728c2ab535e58';
  const API_URL = 'https://api.themoviedb.org/3';
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Lógica para obtener películas populares al cargar el componente...
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `${API_URL}/movie/popular?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error al obtener películas populares:', error);
      }
    };

    // Llamada a la función para obtener películas al cargar el componente
    fetchPopularMovies();
  }, [API_KEY, API_URL]);

  // Función para manejar cambios en la barra de búsqueda
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  // Función para realizar la búsqueda
  const searchMovies = async () => {
    try {
      const response = await fetch(
        `${API_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  return (
    <div>
      <h1>Películas Populares</h1>
      {/* Barra de búsqueda */}
      <div>
        <input
          type="text"
          placeholder="Buscar películas..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={searchMovies}>Buscar</button>
      </div>

      {/* Lista de resultados de búsqueda o películas populares */}
      <ul>
        {searchQuery
          ? searchResults.map(movie => <li key={movie.id}>{movie.title}</li>)
          : movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </div>
  );
};

export default Movies;
