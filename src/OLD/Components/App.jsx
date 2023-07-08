import Header from "./Header";
import SearchInput from "./SearchInput";
import MovieContainer from "./MovieContainer";
import Footer from "./Footer";
import Modal from "./Modal";
import { useRef, useState } from "react";
import { movies } from "../mocks/example";
import { useMovies } from "../hooks/useMovies";

const API_ENDPOINT = "http://someapi.com?s=";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const queryRef = useRef();

  const { movies2 } = useMovies(API_ENDPOINT, searchTerm);
  console.log(movies2)
  return (
    <>
      <Modal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        modalData={modalData}
      />
      <Header />
      <SearchInput queryRef={queryRef} setSearchTerm={setSearchTerm} />
      <main>
        <MovieContainer
          setModalIsOpen={setModalIsOpen}
          setModalData={setModalData}
          movies={movies}
        />
      </main>
      <Footer />
    </>
  );
};

export default App;
