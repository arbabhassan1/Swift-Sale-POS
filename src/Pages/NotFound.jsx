import React from "react";
import ErrorImg from "../assets/error 404.svg";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 w-full min-h-screen h-full flex items-center justify-center flex-col gap-6 ">
      <img src={ErrorImg} alt="Error" className="w-[80%] sm:w-[40%]" />
      <Link
        to="/"
        className="text-2xl text-[#eee] font-bold bg-teal-600 py-2 px-6 rounded-md"
      >
        Go Back
      </Link>

      <p className=" absolute left-[50%] translate-x-[-50%] text-[#eee] bottom-10">
        A Project by{" "}
        <a href="https://arbabhassan.bio.link/" target="_blank" className="font-semibold">
          Arbab Hassan
        </a>
      </p>
    </div>
  );
}

export default NotFound;
