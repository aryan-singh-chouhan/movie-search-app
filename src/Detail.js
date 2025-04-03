import React from 'react';
import { useSelector } from 'react-redux';

const Detail = () => {
  const movie = useSelector((state)=>state.movie.movieDetail);

  return (
    <div>{movie.Title}
    <div>{movie.year}</div></div>
  )
}

export default Detail