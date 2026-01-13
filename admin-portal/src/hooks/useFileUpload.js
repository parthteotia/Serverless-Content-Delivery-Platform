import { useState, useRef } from 'react'


export function useFileUpload() {
const [progress, setProgress] = useState(0)
const [status, setStatus] = useState('idle')
const controllerRef = useRef(null)


async function uploadToPresignedUrl(url, file, onProgress) {
controllerRef.current = new AbortController()
return new Promise((resolve, reject) => {
const xhr = new XMLHttpRequest()
xhr.open('PUT', url)
xhr.setRequestHeader('Content-Type', file.type || 'application/octet-stream')
xhr.upload.onprogress = (e) => {
if (e.lengthComputable) {
const p = (e.loaded / e.total) * 100
setProgress(p)
if (onProgress) onProgress(p)
}
}
xhr.onload = () => {
if (xhr.status >= 200 && xhr.status < 300) resolve()
else reject(new Error('Upload failed: ' + xhr.status))
}
xhr.onerror = () => reject(new Error('Upload network error'))
xhr.onabort = () => reject(new Error('Upload aborted'))
xhr.send(file)
})
}


function abort() {
controllerRef.current?.abort?.()
setStatus('aborted')
}


return { progress, status, setStatus, uploadToPresignedUrl, abort }
}