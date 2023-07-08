import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import Loading from "./Loading";

function MovieInfo() {
  const navigate = useNavigate();
  const { imdbID } = useParams();
  console.log(imdbID);
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(imdbID);
  useEffect(() => {
    const getMovieInfo = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=d3db93a2&i=${imdbID}`
        );
        const data = await response.json();
        setMovieInfo(data);
        setIsLoading(false);
      } catch ({ err }) {
        console.log({ err });
        setIsLoading(false);
      }
    };

    getMovieInfo();
  }, [imdbID]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : movieInfo ? (
        <div className=" mx-6 mb-16 py-6 rounded-lg flex max-md:flex-col items-center text-slate-50 mt-10 md:place-content-center w-full md:gap-20 opacity-0 show-animation">
          <section className="flex flex-col md:w-fit mt-4 items-center gap-6">
            <img src={movieInfo.Poster} className="h-64 w-48" />
            <div className="">
              {movieInfo.Ratings?.map((source, index) => (
                <p className="text-left" key={index}>
                  🍿 {source.Value}
                  <span className="text-sky-300/30">
                    {" "}
                    {source.Source === "Internet Movie Database"
                      ? "on IMDb"
                      : source.Source === "Rotten Tomatoes"
                      ? "on RT"
                      : source.Source === "Metacritic"
                      ? "on Meta"
                      : ""}
                  </span>
                </p>
              ))}
            </div>
            <p className="text-xl font-bold">
              {movieInfo.Title} ({movieInfo.Year})
            </p>
          </section>
          <hr className="mt-6 border-sky-300/50 w-[90%] md:rotate-90 md:hidden" />
          <section className="flex flex-col max-md:mx-14 gap-2 text-left mt-10 md:w-[30%] ">
            <p>
              <span className="text-sky-300/30 font-light">
                Released:
                <br />{" "}
              </span>
              {movieInfo.Released}
            </p>
            <p>
              {" "}
              <span className="text-sky-300/30 font-light">
                Duration: <br />{" "}
              </span>
              {movieInfo.Runtime}
            </p>
            <p>
              {" "}
              <span className="text-sky-300/30 font-light">
                Genre: <br />{" "}
              </span>
              {movieInfo.Genre}
            </p>
            <p>
              {" "}
              <span className="text-sky-300/30 font-light">
                Director: <br />{" "}
              </span>
              {movieInfo.Director}
            </p>
            <p>
              {" "}
              <span className="text-sky-300/30 font-light">
                Actors: <br />{" "}
              </span>
              {movieInfo.Actors}
            </p>
            <p>
              {" "}
              <span className="text-sky-300/30 font-light">
                Plot: <br />{" "}
              </span>
              {movieInfo.Plot}
            </p>
            <p>
              {" "}
              <span className="text-sky-300/30 font-light">
                Awards: <br />{" "}
              </span>
              {movieInfo.Awards}
            </p>
          </section>
          <button
            className="rounded-full bg-sky-900/50 p-2 text-2xl fixed bottom-12 right-4 transition-all hover:bg-sky-300 hover:text-slate-950"
            onClick={() => navigate(-1)}
          >
            <MdArrowBack />
          </button>
        </div>
      ) : null}
    </>
  );
}

export default MovieInfo;
