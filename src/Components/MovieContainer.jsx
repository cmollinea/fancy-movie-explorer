/* eslint-disable react/prop-types */
import Loading from "./Loading";
import MovieCard from "./MovieCard";
import ErrorScreen from "./ErrorScreen";
import { useGetMovies } from "../Hooks/useGetMovies";
import PageNav from "./PageNav";

function MovieContainer({ search, setSearch }) {
  const title = search.get("title");
  const page = search.get("page");
  const prevTitle = localStorage.getItem("title")
    ? localStorage.getItem("title")
    : "";
  const prevPage = localStorage.getItem("page")
    ? localStorage.getItem("page")
    : "";
  const { getMoviesState, moviesResponse } = useGetMovies({
    title,
    prevTitle,
    page,
    prevPage,
  });
  const { isLoading, isError } = getMoviesState;
  const totalPages = Math.ceil(moviesResponse.totalResults / 10);

  return (
    <>
      {!title ? (
        <p className="text-xl mt-20 mx-16 text-center font-bold  text-slate-50">
          What are you looking? We will try our best 😃
        </p>
      ) : isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorScreen />
      ) : moviesResponse?.Search ? (
        <div className="text-slate-50 flex flex-col justify-center items-center text-center show-animation opacity-0">
          <p className="font-bold">
            {" "}
            We found <span>{moviesResponse.totalResults}</span> movies that
            match your query.
          </p>
          <PageNav
            page={page}
            totalPages={totalPages}
            title={title}
            setSearch={setSearch}
          />
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
