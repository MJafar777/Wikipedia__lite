import React from "react";
import "../components2/Design.css";

const Video = ({
  video: {
    id: { videoId },
    snippet: { title, chanelTitle, description },
  },
}) => {
  if (!videoId) return <p className="noResult">rezultat topilmadi!</p>;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <>
      <div className="videoIframe">
        <iframe
          frameborder="0"
          allowFullScreen
          title="Video player"
          src={videoSrc}
          className="iframe"
        ></iframe>
      </div>
      <div className="videoInfo">
        <h1 className="titleVideo">{title}</h1>
        <h3 className="channelTitle">{chanelTitle}</h3>
        <p className="descriptionVideo">{description}</p>
      </div>
    </>
  );
};

export default Video;
