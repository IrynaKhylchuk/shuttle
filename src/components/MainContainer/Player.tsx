import { Box } from "@mui/material";
import SpotifyPlayer from "react-spotify-web-playback";
import "./Player.css";

const Player = ({ accessToken, trackUri }) => {
   if (!accessToken) return null;
   return (
      <Box className="my-spotify-player">
         <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            uris={trackUri ? [trackUri] : []}
            styles={{
               bgColor: "#000",
            }}
         />
      </Box>
   );
};

export default Player;
