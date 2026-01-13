import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer({ videoId }) {
  const CLOUD_FRONT_DOMAIN = "https://d36cks0gdu9n77.cloudfront.net";

  // Full MediaConvert HLS manifest
  const videoUrl = `${CLOUD_FRONT_DOMAIN}/processed/${videoId}/HLS/master.m3u8`;

  return (
    <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "12px" }}>Video Preview</h2>

      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="480px"
      />

      <p style={{ marginTop: "10px", fontSize: "14px", opacity: 0.7 }}>
        Video ID: {videoId}
      </p>
    </div>
  );
}

export default VideoPlayer;
