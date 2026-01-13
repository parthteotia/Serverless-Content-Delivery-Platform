import React, { useEffect, useState } from "react";
import VideoCard from "../components/VideoCard";
import VideoPlayer from "../components/VideoPlayer";
import { listVideos } from "../api/videos";

export default function Dashboard() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  useEffect(() => {
    loadVideos();
  }, []);

  async function loadVideos() {
    try {
      const res = await listVideos();
      setVideos(res);
    } catch (err) {
      console.error("Failed to load videos:", err);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Videos</h1>

      <div className="grid grid-cols-3 gap-4">
        {videos.map((v) => (
          <VideoCard key={v.videoId} v={v} onPreview={setSelectedVideoId} />
        ))}
      </div>

      {/* Modal */}
      {selectedVideoId && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white p-6 rounded max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setSelectedVideoId(null)}
            >
              ✖
            </button>

            <VideoPlayer videoId={selectedVideoId} />
          </div>
        </div>
      )}
    </div>
  );
}
