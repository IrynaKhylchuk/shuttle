import React, { useState, useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

import SpotifyWebApi from "spotify-web-api-node";

import { getTokenFromHash, getTokenFromStorage } from "../../utils/SpotifyAPI";
import { CLIENT_ID } from "../../utils/constantsAPI";
import TrackSearchResult from "./TrackSearchResult";

const spotifyApi = new SpotifyWebApi({
   clientId: CLIENT_ID,
});

const CustomTextField = styled(TextField)({
   "& .MuiOutlinedInput-root": {
      "& fieldset": {
         borderColor: "#333",
         borderRadius: "10px",
      },
      "&:hover fieldset": {
         borderColor: "#555",
      },
      "&.Mui-focused fieldset": {
         borderColor: "#444",
      },
      "& input": {
         color: "white",
      },
   },
});

interface SearchResult {
   artist: string;
   title: string;
   uri: string;
   albumUrl: string;
}

const Search: React.FC = () => {
   const [token, setToken] = useState<string | null>("");
   const [search, setSearch] = useState("");
   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
   const [playingTrack, setPlayingTrack] = useState();
   const [lyrics, setLyrics] = useState("");

   function chooseTrack(track) {
      setPlayingTrack(track);
      setSearchResults("");
      setLyrics("");
   }

   useEffect(() => {
      const tokenFromHash = getTokenFromHash();
      const tokenFromStorage = getTokenFromStorage();

      setToken(tokenFromHash || tokenFromStorage);
   }, []);

   useEffect(() => {
      if (!token) return;
      spotifyApi.setAccessToken(token);
   }, [token]);

   useEffect(() => {
      if (!search) return setSearchResults([]);
      if (!token) return;

      const delay = setTimeout(() => {
         spotifyApi.searchTracks(search).then((res) => {
            if (res.body.tracks?.items) {
               setSearchResults(
                  res.body.tracks.items.map((track) => {
                     return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: track.album.images[1].url,
                     };
                  })
               );
            } else {
               setSearchResults([]);
            }
         });
      }, 1000);

      return () => {
         clearTimeout(delay);
      };
   }, [search, token]);

   return (
      <Box border="1px solid black" bgcolor="rgba(0,0,0, .2)" py={3} px={2} borderRadius={3}>
         <Typography my={2} component="h4" variant="body1">
            Search song or artist
         </Typography>
         <CustomTextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{ backgroundColor: "rgba(255, 255, 255, .1)", borderRadius: "10px", mb: "20px" }}
         />
         <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            {searchResults.map((track) => (
               <Box width="25%" key={track.uri}>
                  <TrackSearchResult track={track} chooseTrack={chooseTrack} />
               </Box>
            ))}
            {searchResults.length === 0 && (
               <Box textAlign="center" whiteSpace="pre">
                  {lyrics}
               </Box>
            )}
         </Box>
      </Box>
   );
};

export default Search;
