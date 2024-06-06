import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import Header from "./Header";
import Footer from "../Footer/Footer";
import { getTokenFromHash, getTokenFromStorage } from "../../utils/SpotifyAPI";

export default function MainContainer() {
   const [token, setToken] = useState<string | null>(null);

   useEffect(() => {
      const tokenFromHash = getTokenFromHash();
      const tokenFromStorage = getTokenFromStorage();

      setToken(tokenFromHash || tokenFromStorage);
   }, []);

   return (
      <Box
         width="calc(100% - 320px)"
         display="flex"
         flexDirection="column"
         position="fixed"
         left={8}
         top={8}
         height="calc(100% - 96px)"
         bgcolor="#222"
         borderRadius={1}
         overflow="hidden"
         sx={{ overflowY: "auto" }}
         ml="308px"
      >
         <Header />
         {token ? (
            <Box sx={{ padding: "8px 24px 28px" }} flex="1 1 auto">
               <Outlet />
            </Box>
         ) : (
            <Box sx={{ padding: "8px 24px 28px" }} flex="1 1 auto">
               <Typography component="p" variant="body1">
                  Please, Log in.
               </Typography>
            </Box>
         )}
         <Footer />
      </Box>
   );
}
