export const API_BASE = import.meta.env.VITE_API_URL;
export const PRESIGN_PATH = import.meta.env.VITE_PRESIGN_PATH;
export const LIST_PATH = import.meta.env.VITE_LIST_VIDEOS_PATH;

// --- Authentication now reads from the .env file using Vite's import.meta.env ---
export const COGNITO_DOMAIN = import.meta.env.VITE_COGNITO_DOMAIN;
export const COGNITO_CLIENT_ID = import.meta.env.VITE_COGNITO_CLIENT_ID;
export const COGNITO_REDIRECT_URI = import.meta.env.VITE_COGNITO_REDIRECT_URI;
export const REGION = import.meta.env.VITE_REGION;
export const CLOUDFRONT = import.meta.env.VITE_CLOUDFRONT_DOMAIN;