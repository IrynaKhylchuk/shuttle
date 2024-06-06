import axios from "axios";
import { AUTH_URL, LOG_OUT_URL } from "./constantsAPI";

export const getTokenFromHash = () => {
   const hash = window.location.hash;
   const tokenFromHash = hash
      .substring(1)
      .split("&")
      .find((elem) => elem.startsWith("access_token"))
      ?.split("=")[1];

   if (tokenFromHash) {
      window.location.hash = "";
      window.localStorage.setItem("token", tokenFromHash);
   }

   return tokenFromHash || null;
};

export const getTokenFromStorage = () => {
   return window.localStorage.getItem("token");
};

export function handleLogIn() {
   window.location.href = AUTH_URL;
}

export function handleSignUp() {
   window.open(LOG_OUT_URL, "_blank");
}

export const getTopArtists = async (token: string) => {
   const { data } = await axios.get("https://api.spotify.com/v1/me/top/artists", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });

   return data.items;
};

export const getTopTracks = async (token: string) => {
   const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });

   return data.items;
};

export const getSavedAlbums = async (token: string) => {
   const { data } = await axios.get("https://api.spotify.com/v1/me/albums", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });

   return data.items.map(item => ({
      id: item.album.id,
      name: item.album.name,
      artists: item.album.artists.map(artist => artist.name).join(', '),
      images: item.album.images
  }));
};

export const getFollowedArtists = async (token: string) => {
   const { data } = await axios.get("https://api.spotify.com/v1/me/following?type=artist", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });

   return data;
};

export const getUserProfile = async (token: string) => {
   const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   });

   return data;
};