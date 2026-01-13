import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getVideo, updateVideo, deleteVideo } from '../api/videos'


export default function VideoDetails(){
const { id } = useParams()
const [video, setVideo] = useState(null)
const [loading, setLoading] = useState(false)


useEffect(()=>{
fetch()
}, [])


async function fetch(){
setLoading(true)
try{ const res = await getVideo(id); setVideo(res) }catch(e){ console.error(e) }
setLoading(false)
}


if(loading) return <div>Loading...</div>
if(!video) return <div>No video</div>


async function save(){
try{ await updateVideo(id, { title: video.title, description: video.description }); alert('Saved') }catch(e){ alert('Save failed') }
}
async function del(){ if(!confirm('Delete?')) return; await deleteVideo(id); alert('Deleted'); window.location.href='/videos' }


return (
<div className="max-w-2xl">
<h2 className="text-xl font-semibold mb-4">Video: {video.videoId}</h2>
<div className="bg-white border p-4 rounded space-y-4">
<div>
<label className="block text-sm">Title</label>
<input value={video.title||''} onChange={e=>setVideo({...video, title: e.target.value})} className="w-full border p-2 rounded" />
</div>
<div>
<label className="block text-sm">Description</label>
<textarea value={video.description||''} onChange={e=>setVideo({...video, description: e.target.value})} className="w-full border p-2 rounded" />
</div>
<div className="flex gap-2">
<button onClick={save} className="px-3 py-1 bg-indigo-600 text-white rounded">Save</button>
<button onClick={del} className="px-3 py-1 border rounded">Delete</button>
</div>
</div>
</div>
)
}