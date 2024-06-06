export const CLIENT_ID: string = "3c3bb13f7740497aba2ee749a9e54eb8";
const REDIRECT_URI: string = "http://localhost:5173/home";
const AUTH_ENDPOINT: string = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE: string = "token";
const SCOPES: string =
   "user-read-private user-read-email playlist-read-private playlist-read-collaborative user-top-read user-library-read playlist-read-private playlist-read-collaborative user-read-playback-state user-modify-playback-state user-library-modify streaming";

export const AUTH_URL: string = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`;
export const LOG_OUT_URL: string =
   "https://www.spotify.com/ua-uk/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F";
