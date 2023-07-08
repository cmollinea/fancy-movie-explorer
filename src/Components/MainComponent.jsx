import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import MovieContainer from "./MovieContainer";
import Search from "./Search";

function MainComponent() {
  const searchRef = useRef();
  const [search, setSearch] = useSearchParams();
  return (
    <>
      <Search query={searchRef} setSearch={setSearch} />
      <MovieContainer search={search} />
    </>
  );
}

export default MainComponent;
