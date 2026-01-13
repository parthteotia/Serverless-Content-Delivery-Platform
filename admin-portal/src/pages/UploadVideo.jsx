import React, { useState, useRef } from 'react'
import { getPresignUrl } from '../api/upload'
import { useFileUpload } from '../hooks/useFileUpload'


export default function UploadVideo(){
const [file, setFile] = useState(null)
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const { progress, uploadToPresignedUrl, setStatus } = useFileUpload()
const inputRef = useRef(null)


async function start(){
// 1. Validation and Filename preparation (Unchanged)
if(!file) return alert('Select file')
// Use the title from state, or default to the file name if blank
const videoTitle = title.trim() || file.name.replace(/\.[^/.]+$/, "")
const filename = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.\-_]/g,'_')}`


try{
setStatus('requesting')

// 2. 🛑 CORRECTION: Pass Title and Description to the API call 🛑
const presign = await getPresignUrl(filename, videoTitle, description) // Now expects { url }
const url = presign.url || presign.presignedUrl || presign.presignUrl
if(!url) throw new Error('No presign URL returned')


setStatus('uploading')
await uploadToPresignedUrl(url, file)
setStatus('uploaded')


alert('Upload complete — processing will start automatically')
}catch(e){
console.error(e)
alert('Upload error: ' + (e.message||e))
}
}


return (
<div className="max-w-3xl">
<h2 className="text-xl font-semibold mb-4">Upload Video</h2>
<div className="bg-white border p-4 rounded space-y-4">
<div>
<label className="block text-sm">File</label>
<input ref={inputRef} type="file" accept="video/*" onChange={e=>setFile(e.target.files?.[0]||null)} />
</div>
<div>
<label className="block text-sm">Title</label>
<input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border p-2 rounded" />
</div>
<div>
<label className="block text-sm">Description</label>
<textarea value={description} onChange={e=>setDescription(e.target.value)} className="w-full border p-2 rounded" />
</div>


<div className="flex items-center gap-3">
<button onClick={start} className="px-4 py-2 bg-indigo-600 text-white rounded">Start Upload</button>
<div className="text-sm text-slate-500">Progress: {Math.round(progress)}%</div>
</div>
</div>
</div>
)
}