import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setmovieDetail } from "./Redux/MovieSlice";

const MovieCard = ({ movie }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(setmovieDetail(movie))
        navigate(`/details/${movie.imdbID}`)
    }
    return (

        <div className='movie' onClick={handleClick}>
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>

    );
}

export default MovieCard;