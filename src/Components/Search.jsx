/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdInfoOutline } from "react-icons/md";

function Search({ query, setSearch }) {
  const [alert, setAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ title: query.current.value });
    return;
  };

  return (
    <main className="mt-4 py-4">
      <form
        className="flex gap-4 text-slate-50 items-baseline justify-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="w-fit">
          <input
            placeholder="Ex: Batman, Titanic, Cars..."
            onChange={() => {
              if (alert) {
                setAlert(false);
              }
            }}
            type="text"
            ref={query}
            className="bg-slate-800/20 placeholder:text-slate-50/20  border border-transparent transition-all duration-100 shadow-inner ease-in  shadow-black/50 p-2 rounded-md outline-none focus:border-sky-200"
          />
          {alert ? (
            <p className="flex text-red-500 items-center gap-1 mt-2 text-xs">
              <MdInfoOutline className="text-base" />
              What you looking is already here...
            </p>
          ) : null}
        </div>
        <button className="rounded-md p-2 w-24 shadow-sm shadow-black/90  active:translate-y-1 hover:bg-sky-300 hover:text-slate-950 transition-all duration-100 ease-in bg-sky-900/80">
          Search
        </button>
      </form>
    </main>
  );
}

export default Search;
