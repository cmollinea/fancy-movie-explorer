/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  return (
    <li
      className="flex bg-sky-900/20 flex-col items-center rounded-xl border-2 border-sky-300/0 w-60 h-fit pb-2 overflow-hidden gap-4 shadow-lg shadow-black/50 hover:border-sky-300 hover:scale-105 transition-all duration-100 ease-in cursor-pointer"
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
    >
      <img src={movie.Poster} alt={movie.imdbID} className=" w-72 h-[280px]" />
      <hr className=" border-slate-50/20 w-[90%]" />
      <p
        title={movie.Title}
        className="font-bold w-full truncate h-12 px-4
      "
      >
        {movie.Title} <br />({movie.Year})
      </p>
    </li>
  );
}

export default MovieCard;
