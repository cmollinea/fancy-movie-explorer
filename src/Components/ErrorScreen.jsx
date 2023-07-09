import { useEffect } from "react";

function ErrorScreen() {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="text-xl relative text-center flex flex-col justify-center text-slate-50  mt-10">
      <p>
        {" "}
        Ups! something went <span className="text-red-500">wrong.</span>{" "}
      </p>
      <img
        alt="failed-search"
        className="h-[400px]"
        src="/Feeling angry-amico.svg"
      />
      <a
        target="blank"
        className="text-xs underline opacity-50 hover:text-sky-300/80 transition-colors absolute bottom-6 right-0"
        href="https://storyset.com/work"
      >
        Work Ilustrations by Storyset
      </a>
    </div>
  );
}

export default ErrorScreen;
