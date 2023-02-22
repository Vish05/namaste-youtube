import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="p-5 col-span-11">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
