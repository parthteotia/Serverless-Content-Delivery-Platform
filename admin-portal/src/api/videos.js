import axios from './axiosClient'
import { LIST_PATH } from '../utils/config'


export async function listVideos() {
const res = await axios.get(LIST_PATH)
return res.data
}


export async function getVideo(videoId) {
const res = await axios.get(`/videos/${videoId}`)
return res.data
}


export async function updateVideo(videoId, payload) {
const res = await axios.put(`/videos/${videoId}`, payload)
return res.data
}


export async function deleteVideo(videoId) {
const res = await axios.delete(`/videos/${videoId}`)
return res.data
}