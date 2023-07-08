import { useState } from "react";

export default function MovieCard({ movie, setModalIsOpen, setModalData }) {
  return (
    <>
      <div
        className="movie-card"
        onClick={() => {
          setModalIsOpen((prev) => !prev);
          setModalData(movie);
        }}
      >
        <li>
          <img src={MovieCard.Poster} alt="Poster goes here" />
          <hr />
          <section className="info">
            <h4 className="title">
              ({movie.Year}){movie.Title}
            </h4>
          </section>
        </li>
      </div>
    </>
  );
}
