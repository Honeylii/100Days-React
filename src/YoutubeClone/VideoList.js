import React from "react";
import RenderList from "./RenderList";

function VideoList({ videos, onVideoSelected }) {
  const renderedList = videos.map((video) => {
    return (
      <RenderList
        onVideoSelected={onVideoSelected}
        vid={video}
        key={video.id.videoId}
      />
    );
  });

  return <div>{renderedList}</div>;
}

export default VideoList;
