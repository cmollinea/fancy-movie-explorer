import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <p className="text-lg w-full text-center text-slate-50 font-bold px-20 mt-20 ">
        Tiny movie explorer made with React, React-Router and{" "}
        <span className="text-sky-300">OMDb Free API </span>😃 <br />
        <br />
        Click on the following button to{" "}
        <span className="text-sky-300">get started.</span> <br />
      </p>
      <button
        onClick={() => navigate("/search-movies")}
        className="shadow-md shadow-black py-2 px-4 rounded-full text-slate-50 text-lg font-bold mt-10 bg-sky-900/90 hover:bg-sky-300 hover:-translate-y-0.5 hover:text-slate-950 transition-all duration-100 ease-in"
      >
        Search Movies
      </button>
    </>
  );
}

export default Home;
