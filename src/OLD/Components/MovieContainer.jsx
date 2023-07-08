import MovieCard from "./MovieCard"

export default function MovieContainer ({movies, setModalIsOpen, setModalData}) {
    return (
        <>
        <ul>
            {movies?.map((movie) => <MovieCard key={movie.imdbID} movie={movie} setModalIsOpen={setModalIsOpen} setModalData={setModalData} />)}
        </ul>
        </>
    )
}