import { useState, useEffect } from "react";

export function useMovies(API_ENDPOINT, searchTerm) {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    console.log(`${API_ENDPOINT}${searchTerm}`);
    fetch(`${API_ENDPOINT}?s=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setResponse(data))
      .catch((err) => console.log(err));
  }, [searchTerm, API_ENDPOINT]);

  return { response };
}
