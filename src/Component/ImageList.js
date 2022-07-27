import "./image-list.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // const image = props.images.map((i) => {
  //   return <img alt="" src={`${i.normal}`} />;
  // });

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} data={image} />;
  });

  return (
    <div>
      <div className="image-container">{images}</div>
    </div>
  );
};

export default ImageList;
