import React from "react";

const VideoSection = () => {
  return (
    <div className="video-section main_container">
      <div className="container">
        <div className="row">
          <video id="myVideo" width="100%" autoplay="true" loop="true" muted>
            <source
              src="https://m3m-golfestate.in/images/m3m-golf-estate.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
