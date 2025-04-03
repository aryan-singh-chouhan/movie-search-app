import React, { useState, useEffect } from 'react';
import './App.css';
import SearchIcone from './search.svg';
import MovieCard from './MovieCard';
import { useDispatch } from 'react-redux';
import { setmovieDetail } from './Redux/MovieSlice';
const API_URL = "http://www.omdbapi.com/?apikey=7f8e94ac";



const Home = () => {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies'))|| []);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const SearchMovie = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []); // Set movies to the search result or an empty array
    localStorage.setItem('movies', JSON.stringify(data.Search || []))
    dispatch(setmovieDetail(data))
    console.log("tollkit res: ",data)
    } catch (error) {
      console.log(error) 
    }
  }

  // Perform an initial search when the component mounts
  useEffect(() => {
    SearchMovie(''); // You can set a default search term here
  }, []);

  return (
      <div className='app'>
        <h1>Movies Hub</h1>

        <div className='search'>
          <input
            placeholder='Search Movies'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />

          <img
            src={SearchIcone}
            alt='search'
            onClick={() => SearchMovie(searchTerm)} />
        </div>

        {movies.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} /> // Pass the actual movie object
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>Movies Not Found</h2>
          </div>
        )}
      </div>
  );
}

export default Home;
