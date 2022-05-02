import React, { useState } from "react";
import Search from "../components2/Search";
import "../components2/Design.css";
import URL from "../api/URL";
import ListVideos from "../components2/ListVideos";
import Video from "../components2/Video";

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({ id: {}, snippet: {} });

  async function videoSubmit(searchTerm) {
    const {
      data: { items: videos },
    } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyApnBc-VPpPDrnJIy5rspCZvnuvWi_0F5U",
        q: searchTerm,
      },
    });
    console.log(videos);
    setVideos(videos);
    setSelectedVideos(videos[0]);
  }
  return (
    <div className="contain">
      <div className="searchSec">
        <Search onSubmit={videoSubmit} />
      </div>
      <div className="videoMain">
        <div className="videoSec">
          <Video video={selectedVideos} />
        </div>
        <div className="videoLists">
          <ListVideos videos={videos} onVideoSelect={setSelectedVideos} />
        </div>
      </div>
    </div>
  );
};

export default Youtube;
