import React from "react";

import seriesDescription from "./seriesDescription";

const Anime = ({ name }) => {
  const series = seriesDescription[name];
  return (
    <div className="anime" id={name}>
      <h1>{series.title}</h1>
      <img src={series.imageURL} />
      <p>{series.description}</p>
      <iframe
        width="560"
        height="315"
        src={series.videoURL}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Anime;
