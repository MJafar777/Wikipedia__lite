import React from "react";
import SideVideos from "../components2/SideVideos";
import "../components2/Design.css";

const ListVideos = ({ videos, onVideoSelect }) => {
  const videoLists = videos.map((video) => (
    <SideVideos
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  return <div>{videoLists}</div>;
};

export default ListVideos;
