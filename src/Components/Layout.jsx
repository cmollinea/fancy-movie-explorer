/* eslint-disable react/jsx-no-target-blank */
import { FaGithub } from "react-icons/fa";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="relative min-h-screen h-fit bg-slate-950/80 flex flex-col items-center">
      <header className=" sticky shadow-lg shadow-black/50 z-50 top-0 w-full h-14 bg-sky-900/80 text-slate-50 font-extralight text-4xl flex justify-center items-center backdrop-blur-md">
        Fancy Movie Explorer
      </header>
      <Outlet />
      <footer className="absolute bottom-0  z-40 font-extralight h-10 bg-sky-900/80 w-full text-xl flex justify-center items-center text-slate-50">
        Made with 💙 by ProcastinatorDev{" "}
        <a href="https://github.com/cmollinea/" target="_blank">
          {" "}
          <FaGithub className="ml-2 cursor-pointer hover:fill-black text-2xl transition-all duration-200" />
        </a>
      </footer>
    </div>
  );
}

export default Layout;
