import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(process.env.REACT_APP_YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="mx-auto p-2 m-2">
      <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-6">
        {videos?.length > 0
          ? videos.map((video) => <VideoCard key={video.id} info={video} />)
          : ""}
      </div>
    </div>
  );
};

export default VideoContainer;
