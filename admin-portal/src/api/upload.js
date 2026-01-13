import axios from './axiosClient'
import { API_BASE, PRESIGN_PATH } from '../utils/config'

// TODO: Make sure config.js contains:
// export const API_BASE = "https://YOUR_API_GATEWAY_URL";   <-- Replace this
// export const PRESIGN_PATH = "/presign";                   <-- Replace if different

// 🛑 CORRECTION: Function now accepts title and description
export async function getPresignUrl(filename, title, description) {
    
    // Encode parameters to make them URL-safe
    const safeFilename = encodeURIComponent(filename);
    const safeTitle = encodeURIComponent(title);
    const safeDescription = encodeURIComponent(description || ''); // Default to empty string if null

    // 🛑 CORRECTION: Include title and description in the URL query string
    const url = 
      `${API_BASE}${PRESIGN_PATH}?filename=${safeFilename}&title=${safeTitle}&description=${safeDescription}`;

    // TODO: Ensure API_BASE is your actual API Gateway Invoke URL
    // TODO: Ensure PRESIGN_PATH matches route in API Gateway

    const res = await fetch(url)
    if (!res.ok) {
        const errorBody = await res.json();
        throw new Error(`Presign request failed: ${errorBody.error || 'Server Error'}`);
    }

    return res.json()
}