import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  console.log(snippet.thumbnails.high);

  return (
    <div className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={thumbnails?.medium.url}
          alt={title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="font-bold">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </h3>
          <p className="mt-1">{channelTitle}</p>
          <p className="mt-1">{statistics.viewCount} Count</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
