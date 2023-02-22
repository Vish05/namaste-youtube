import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Cricket" />
    </div>
  );
};

export default ButtonList;
