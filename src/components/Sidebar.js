import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul className="">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="">
        <li>Treding</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
