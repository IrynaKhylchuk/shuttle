import { Box, IconButton, Container, Paper, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { footerRoutesColFive, footerRoutesColFour, footerRoutesColOne, footerRoutesColThree, footerRoutesColTwo } from "../../routes";
import AppStoreImg from "../../assets/imgs/footer/app_store_download.png";
import GooglePlayImg from "../../assets/imgs/footer/google_play_download.png";
import FooterColumn from "./Columns/Columns";

export default function Footer() {
   return (
      <Paper
         sx={{
            minWidth: "100%",
            position: "relative",
            padding: "2.5rem 0",
            bottom: 0,
            left: 0,
            backgroundColor: "#444",
            borderTop: 1,
            borderColor: "#555",
         }}
         component="footer"
         square
      >
         <Container maxWidth="lg">
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
               <Box>
                  <RouterLink to="https://www.apple.com/app-store/">
                     <img src={AppStoreImg} alt="app_store" />
                  </RouterLink>
               </Box>
               <Box>
                  <RouterLink to="https://play.google.com/">
                     <img src={GooglePlayImg} alt="google_play" />
                  </RouterLink>
               </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5, mb: 5 }}>
               <FooterColumn routes={footerRoutesColOne} />
               <FooterColumn routes={footerRoutesColTwo} />
               <FooterColumn routes={footerRoutesColThree} />
               <FooterColumn routes={footerRoutesColFour} />
               <FooterColumn routes={footerRoutesColFive} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
               <Box>
                  <IconButton
                     sx={{ color: "white" }}
                     component="a"
                     href="https://www.facebook.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <FacebookIcon />
                  </IconButton>
                  <IconButton
                     sx={{ color: "white" }}
                     component="a"
                     href="https://www.instagram.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <InstagramIcon />
                  </IconButton>
                  <IconButton
                     sx={{ color: "white" }}
                     component="a"
                     href="https://www.twitter.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <XIcon />
                  </IconButton>
                  <IconButton
                     sx={{ color: "white" }}
                     component="a"
                     href="https://www.youtube.com"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <YouTubeIcon />
                  </IconButton>
               </Box>
               <Box>
                  <Link
                     component={RouterLink}
                     to="/home"
                     variant="h1"
                     underline="none"
                     fontFamily="Arial"
                     fontWeight="700"
                     noWrap
                     sx={{
                        mr: 2,
                        display: "flex",
                        fontFamily: "Arial",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "white",
                        textDecoration: "none",
                        alignItems: "center",
                        fontSize: 20,
                        lineHeight: "20px",
                     }}
                  >
                     <img
                        src="../../../public/favicon.png"
                        alt="logo"
                        style={{
                           height: 35,
                           width: 35,
                           marginRight: "5px",
                        }}
                     />
                     SHUTTLE
                  </Link>
               </Box>
               <Box>
                  <Typography component="span" variant="caption" color="white">
                     © 2024 Shuttle
                  </Typography>
               </Box>
            </Box>
         </Container>
      </Paper>
   );
}
