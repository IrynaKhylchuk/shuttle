import { useState, useEffect } from "react";
import { Box } from "@mui/material";

import Sidebar from "../../components/Sidebar/Sidebar";
import MainContainer from "../../components/MainContainer/MainContainer";
import Player from "../../components/MainContainer/Player";
import { getTokenFromHash, getTokenFromStorage } from "../../utils/SpotifyAPI";

export default function Layout() {
   const [token, setToken] = useState<string | null>(null);

   useEffect(() => {
      const tokenFromHash = getTokenFromHash();
      const tokenFromStorage = getTokenFromStorage();

      setToken(tokenFromHash || tokenFromStorage);
   }, []);

   return (
      <Box display="flex" flexDirection="column">
         <Box display="flex" minHeight="100vh" p={1} boxSizing="border-box">
            <Sidebar />
            <MainContainer />
         </Box>
         <Player accessToken={token}/>
      </Box>
   );
}
