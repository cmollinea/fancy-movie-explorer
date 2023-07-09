/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useReducer } from "react";
import { getMoviesReducer } from "../services/getMoviesReducer";

export function useGetMovies({ title, prevTitle, page, prevPage }) {
  const [moviesResponse, setMoviesResponse] = useState(() => {
    const storedResponse = localStorage.getItem("moviesResponse");
    console.log(storedResponse);
    if (storedResponse && title) {
      return JSON.parse(storedResponse);
    }
    return {};
  });

  const [getMoviesState, dispatch] = useReducer(getMoviesReducer, {
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    if ((title !== prevTitle && title) || (title === prevTitle && page !== prevPage && page)) {
      const getMovies = async () => {
        dispatch({ type: "FETCH_INIT" });
        try {
          localStorage.setItem("title", title);
          const response = await fetch(`https://www.omdbapi.com/?&apikey=d3db93a2&type=movie&s=${title}&page=${page}`);
          const data = await response.json();
          setMoviesResponse(data);
          localStorage.setItem('page', page);
          localStorage.setItem("moviesResponse", JSON.stringify(data));
          dispatch({ type: "SUCCESS_FETCH" });
        } catch (error) {
          dispatch({ type: "FETCH_ERROR" });
        }
      };

      getMovies();
      return setMoviesResponse({});
    }
  }, [title, page]);
  return { getMoviesState, moviesResponse };
}
