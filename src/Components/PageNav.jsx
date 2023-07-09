/* eslint-disable react/prop-types */
import { MdArrowBack, MdArrowForward } from "react-icons/md";

function PageNav({ page, totalPages, title, setSearch }) {
  return (
    <div className="flex font-bold w-fit items-center mt-6 gap-2">
      <button
        onClick={() => {
          if (page > 1) {
            setSearch({ title: title, page: parseInt(page) - 1 });
          }
        }}
        className="p-2 bg-sky-900/80 rounded-full text-slate-50 hover:bg-sky-300 hover:text-slate-950 transition-all text-xl"
      >
        <MdArrowBack />
      </button>
      {page}/{totalPages}
      <button
        onClick={() => {
          if (page < totalPages) {
            console.log("a");
            setSearch({ title: title, page: parseInt(page) + 1 });
          }
        }}
        className="p-2 bg-sky-900/80 rounded-full text-slate-50 hover:bg-sky-300 hover:text-slate-950 transition-all text-xl"
      >
        <MdArrowForward />
      </button>
    </div>
  );
}

export default PageNav;
