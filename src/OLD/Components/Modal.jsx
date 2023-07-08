import { useMovies } from "../hooks/useMovies";

const API_ENDPOINT = "someapiv2.com/?t=";
const a = "";

export default function Modal({ modalIsOpen, setModalIsOpen, modalData }) {
  const { dummyData } = useMovies(API_ENDPOINT, a);
  console.log(dummyData);

  return (
    <div
      className={modalIsOpen ? "modal-screen" : "hide"}
      onClick={() => {
        setModalIsOpen((prev) => !prev);
      }}
    >
      <h3>Helo! iam a MODAL</h3>
      <blockquote>
        {modalData.Title}({modalData.Year})
      </blockquote>
    </div>
  );
}
