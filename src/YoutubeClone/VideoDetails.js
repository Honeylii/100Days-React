import React from "react";

const VideoDetails = (props) => {
  console.log(props.selectedVideo);

  const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`;

  return (
    <div className="video-details">
      <div className="video-display">
        <iframe
          title="Video Player"
          src={videoSrc}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          className="iframe"
        />
      </div>
      <div className="video-description-container">
        <h4 className="description-title">
          {props.selectedVideo.snippet.title}
        </h4>
        <p>{props.selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
