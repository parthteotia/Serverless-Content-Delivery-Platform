import React from "react";

export default function VideoCard({ v, onPreview }) {
  return (
    <div className="bg-white border rounded p-3">
      <div className="w-full h-40 bg-slate-200 mb-2 flex items-center justify-center">
        Thumbnail
      </div>

      <div className="font-semibold">{v.title}</div>
      <div className="text-sm text-slate-500">{v.status}</div>

      <button
        className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
        onClick={() => onPreview(v.videoId)}
      >
        Preview
      </button>
    </div>
  );
}
