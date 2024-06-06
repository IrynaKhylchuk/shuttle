import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { Box } from "@mui/system";
import { Button, IconButton, Link } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import {
   handleLogIn,
   handleSignUp,
   getTokenFromHash,
   getTokenFromStorage,
   getUserProfile,
} from "../../utils/SpotifyAPI";

interface UserProfile {
   id: string;
   display_name: string;
   email: string;
   name: string;
   followers: { total: number };
   images: { images: { url: string }[] };
}

const Header: React.FC = () => {
   const [token, setToken] = useState<string | null>("");
   const [userProfile, setUserProfile] = useState<UserProfile[]>([]);
   const navigate = useNavigate();

   useEffect(() => {
      const tokenFromHash = getTokenFromHash();
      const tokenFromStorage = getTokenFromStorage();

      setToken(tokenFromHash || tokenFromStorage);
   }, []);

   useEffect(() => {
      if (token) {
         getUserProfile(token).then(setUserProfile);
      }
   }, [token]);

   const handleLogOut = () => {
      setToken(null);
      window.localStorage.removeItem("token");
   };

   return (
      <Box
         height="fit-content"
         p={2}
         sx={{ backgroundImage: "linear-gradient(to bottom, rgba(245, 124, 0, .3), transparent)" }}
      >
         <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Box display="flex" columnGap={1} alignItems="center">
               <IconButton onClick={() => navigate(-1)}>
                  <ArrowBackIosNewIcon fontSize="small" />
               </IconButton>
               <IconButton onClick={() => navigate(1)}>
                  <ArrowForwardIosIcon fontSize="small" />
               </IconButton>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" columnGap={2}>
               <>
                  {!token ? (
                     <Box>
                        <Button
                           variant="outlined"
                           color="warning"
                           sx={{ mr: 2, borderRadius: 2 }}
                           onClick={() => {
                              handleSignUp();
                           }}
                        >
                           Sign up
                        </Button>
                        <Button
                           variant="contained"
                           color="warning"
                           sx={{ borderRadius: 2 }}
                           onClick={() => {
                              handleLogIn();
                           }}
                        >
                           Log in
                        </Button>
                     </Box>
                  ) : (
                     <Box display="flex" justifyContent="center" alignItems="center">
                        <Link
                           component={RouterLink}
                           to={"/home"}
                           display="flex"
                           justifyContent="center"
                           alignItems="center"
                        >
                           {userProfile.images && userProfile.images.length > 0 && (
                              <img
                                 src={userProfile.images[1].url}
                                 alt="user_profile_photo"
                                 style={{
                                    borderRadius: "50%",
                                    width: "43px",
                                    height: "43px",
                                    marginRight: "20px",
                                    boxShadow: "0px 0px 5px black",
                                 }}
                              />
                           )}
                        </Link>
                        <Button
                           variant="contained"
                           color="warning"
                           sx={{ borderRadius: 2 }}
                           onClick={() => {
                              handleLogOut();
                           }}
                        >
                           Log out
                        </Button>
                     </Box>
                  )}
               </>
            </Box>
         </Box>
      </Box>
   );
};

export default Header;