import { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";

import FavoriteArtist from "./FavoriteArtist";
import FavoriteTrack from "./FavoriteTrack";
import {
   getTokenFromHash,
   getTokenFromStorage,
   getTopArtists,
   getTopTracks,
   getUserProfile
} from "../../utils/SpotifyAPI";

interface Artist {
   id: string;
   name: string;
   images: { url: string }[];
   genres: string[];
}

interface Track {
   id: string;
   name: string;
   artists: { name: string }[];
   album: { images: { url: string }[] };
}

const Home = () => {
   const [token, setToken] = useState<string | null>(null);
   const [artists, setArtists] = useState<Artist[]>([]);
   const [tracks, setTracks] = useState<Track[]>([]);

   useEffect(() => {
      const tokenFromHash = getTokenFromHash();
      const tokenFromStorage = getTokenFromStorage();

      setToken(tokenFromHash || tokenFromStorage);
   }, []);

   useEffect(() => {
      if (token) {
         getTopArtists(token).then(setArtists);
         getTopTracks(token).then(setTracks);
      }
   }, [token]);

   const renderArtists = () => {
      const top7Artists = artists.slice(0, 7);
      return top7Artists.map((artist) => <FavoriteArtist artist={artist} />);
   };

   const renderTracks = () => {
      const top7Tracks = tracks.slice(0, 7);
      return top7Tracks.map((track) => <FavoriteTrack track={track} />);
   };

   return (
      <>
         <Box mb={2}>
            <Typography component="h4" variant="h6" fontWeight={600} fontSize={22} mb={2}>
               Your top artists
            </Typography>
            <Box display="flex" justifyContent="space-between">
               {renderArtists()}
            </Box>
         </Box>
         <Box mb={2}>
            <Typography component="h4" variant="h6" fontWeight={600} fontSize={22} mb={2}>
               Your top tracks
            </Typography>
            <Box display="flex" justifyContent="space-between">
               {renderTracks()}
            </Box>
         </Box>
      </>
   );
};

export default Home;
