/* eslint-disable react/prop-types */
import Loading from "./Loading";
import MovieCard from "./MovieCard";
import ErrorScreen from "./ErrorScreen";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { useGetMovies } from "../Hooks/useGetMovies";

function MovieContainer({ search }) {
  const title = search.get("title");
  const prevTitle = localStorage.getItem("title")
    ? localStorage.getItem("title")
    : "";
  const { getMoviesState, moviesResponse } = useGetMovies({
    title,
    prevTitle,
  });
  const { isLoading, isError } = getMoviesState;

  return (
    <>
      {!title ? (
        <p className="text-xl mt-20 text-slate-50">
          What are you looking for? We would try our best 😃
        </p>
      ) : isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorScreen />
      ) : moviesResponse?.Search ? (
        <div className="text-slate-50 text-center show-animation opacity-0">
          <p>
            {" "}
            We found{" "}
            <span className=" font-light">
              {moviesResponse.totalResults}
            </span>{" "}
            movies that match your query.
          </p>

          <ul className="flex sm:flex-wrap max-sm:flex-col gap-10 place-content-center items-center mt-12 pb-20">
            {moviesResponse.Search?.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default MovieContainer;
