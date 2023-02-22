import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 cursor-pointer"
          src={"hamburger-menu-icon.png"}
          alt="hamburger"
        />
        <a href="/">
          <img
            className="h-6 px-2"
            src={"youtube-logo.png"}
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-8 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="col-span-2">
        <img className="h-6" alt="user-icon" src={"user-icon.png"} />
      </div>
    </div>
  );
};

export default Head;
