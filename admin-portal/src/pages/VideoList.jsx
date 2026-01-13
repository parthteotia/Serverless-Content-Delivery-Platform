import React, { useEffect, useState } from 'react'
import { listVideos } from '../api/videos'
import VideoCard from '../components/VideoCard'


export default function VideoList(){
const [videos, setVideos] = useState([])
const [loading, setLoading] = useState(false)


useEffect(()=>{ fetchData() }, [])


async function fetchData(){
setLoading(true)
try{
const data = await listVideos()
setVideos(Array.isArray(data) ? data : [])
}catch(e){ console.error(e) }
setLoading(false)
}


return (
<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold">Videos</h2>
<button onClick={fetchData} className="px-3 py-1 border rounded">Refresh</button>
</div>
{loading && <div>Loading...</div>}
<div className="grid grid-cols-3 gap-4">
{videos.map(v => (
  <VideoCard key={v.videoId} v={v} onPreview={() => {}} />
))}
</div>
</div>
)
}