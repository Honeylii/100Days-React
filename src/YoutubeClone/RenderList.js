import React from "react";

const RenderList = (props) => {
  const { vid, onVideoSelected } = props;
  // const sendVideo = () => {
  //   onVideoSelected(vid);
  // };
  return (
    <div className="render-list" onClick={() => onVideoSelected(vid)}>
      <img
        alt={vid.snippet.description}
        src={vid.snippet.thumbnails.medium.url}
      />
      <div>
        <p>{vid.snippet.title}</p>
      </div>
    </div>
  );
};

export default RenderList;
