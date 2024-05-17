import React from "react";
import golfVideo from "../assets/golf-estet-video.mp4";

const VideoSection = () => {
  return (
    <div className="video-section main_container">
      <div className="container">
        <div className="row">
          <video id="myVideo" width="100%" autoplay="true" loop="true" muted>
            <source src={golfVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
