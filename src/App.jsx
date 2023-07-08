import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import MainComponent from "./Components/MainComponent";
import MovieInfo from "./Components/MovieInfo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="search-movies" element={<MainComponent />} />
        <Route path="movie/:imdbID" element={<MovieInfo />} />
      </Route>
    </Routes>
  );
}
