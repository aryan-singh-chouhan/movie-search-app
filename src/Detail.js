import React from 'react';
import './Details.css';
import { useSelector } from 'react-redux';

const Detail = () => {
  const movie = useSelector((state) => state.movie.movieDetail);

  return (
    <div className='detailContainer'>
      <div className='moviedetail'>

        <div className='movieImage'>
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={"aaa"} />
        </div>

        <div className='movieDiscription'>
          <p>Name: {movie.Title}</p>
          <p>Type: {movie.Type}</p>
          <p>Year: {movie.Year}</p>
          <p>
            <a
              href={`https://hindilinks4u.horse/?s=${movie.Title?.split(' ').join('+')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#f9d3b4", textDecoration: "underline" }}
            >
             Click Here to Watch: <br/>{movie.Title}
            </a>
          </p>

        </div>
      </div>
    </div>
  )
}

export default Detail