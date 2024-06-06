import { useEffect, useState } from "react";

import { Typography, Box } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import IconButton from "@mui/material/IconButton";

import { getSavedAlbums, getTokenFromHash, getTokenFromStorage } from "../../utils/SpotifyAPI";

interface Album {
   id: string;
   name: string;
   artists: [name: string, type: string];
   images: { url: string }[];
}

const Library: React.FC = () => {
   const [token, setToken] = useState<string | null>(null);
   const [savedAlbums, setSavedAlbums] = useState<Album[]>([]);

   const handleClick = () => {
      console.log("hello");
   };

   useEffect(() => {
      const tokenFromHash = getTokenFromHash();
      const tokenFromStorage = getTokenFromStorage();

      setToken(tokenFromHash || tokenFromStorage);
   }, []);

   useEffect(() => {
      if (token) {
         getSavedAlbums(token).then(setSavedAlbums);
      }
   }, [token]);

   const renderSavedAlbums = () => {
      return savedAlbums.map((album) => (
         <Box
            key={album.id}
            display="flex"
            alignItems="center"
            mb={2}
            width="100%"
            sx={{ borderRadius: 1, cursor: "pointer", transition: "background-color 0.3s" }}
            onClick={handleClick}
            onMouseEnter={(e) => {
               e.currentTarget.style.backgroundColor = "#444";
            }}
            onMouseLeave={(e) => {
               e.currentTarget.style.backgroundColor = "inherit";
            }}
         >
            <img src={album.images[2].url} alt={album.name} style={{ borderRadius: 5, marginRight: 15 }} width={50} height={50} />
            <Box width="100%" overflow="hidden">
               <Typography
                  component="div"
                  variant="body2"
                  fontSize={15}
                  m={0}
                  p={0}
                  width="100%"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  textAlign="left"
               >
                  {album.name}
               </Typography>
               <Typography
                  component="div"
                  variant="caption"
                  fontSize={12}
                  m={0}
                  p={0}
                  width="100%"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
                  textAlign="left"
               >
                  {album.artists}
               </Typography>
            </Box>
         </Box>
      ));
   };

   const handleAddPlaylist = () => {
      //later
   };

   return (
      <Box display="flex" flexDirection="column" height="100%">
         <Box display="flex" alignItems="center" justifyContent="space-between" pt={2} px="20px">
            <Box display="flex" alignItems="center" columnGap={1}>
               <QueueMusicIcon fontSize="medium" sx={{ color: "rgb(163 163 163)" }} />
               <Typography component="p" color="rgb(163 163 163)" fontSize="18px" fontWeight="500">
                  Your Library
               </Typography>
            </Box>
            <IconButton onClick={() => handleAddPlaylist()}>
               <AddIcon sx={{ color: "rgb(163 163 163)" }} />
            </IconButton>
         </Box>
         <Box display="flex" flexDirection="column" columnGap={1} mt={2} px="20px" sx={{ overflowY: "scroll" }}>
            {renderSavedAlbums()}
         </Box>
      </Box>
   );
};

export default Library;
