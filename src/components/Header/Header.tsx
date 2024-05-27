import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";

import Logo from "../Logo/Logo";
import { headerRoutes, Route } from "../../routes";

export default function Header() {
   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar
         position="static"
         sx={{
            minWidth: "100%",
            top: 0,
            backgroundColor: "#444",
         }}
      >
         <Container maxWidth="lg">
            <Toolbar disableGutters>
               <Logo />
               {/* responsive */}
               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={handleCloseNavMenu}
                     sx={{
                        display: { xs: "block", md: "none" },
                     }}
                  >
                     {headerRoutes.map((item: Route) => (
                        <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                           <Typography textAlign="center">{item.name}</Typography>
                        </MenuItem>
                     ))}
                  </Menu>
               </Box>

               <Box
                  mr="30px"
                  sx={{
                     flexGrow: 1,
                     display: { xs: "none", md: "flex" },
                     justifyContent: "right",
                  }}
               >
                  {headerRoutes.map((item: Route) => (
                     <Link
                        key={item.id}
                        component={RouterLink}
                        to={item.layout + item.path}
                        variant="body2"
                        underline="none"
                        fontFamily="Arial"
                        fontWeight="700"
                        onClick={handleCloseNavMenu}
                        sx={{
                           margin: 2,
                           color: "white",
                           display: "block",
                           transition: "color 0.3s ease",

                           "&:hover": {
                              color: "#ffa726",
                           },

                           "&:active": {
                              textDecoration: "underline",
                           },
                        }}
                     >
                        {item.name}
                     </Link>
                  ))}
               </Box>

               <Box
                  sx={{
                     flexGrow: { xs: 1, md: 0 },
                     textAlign: "right",
                     display: { xs: "none", sm: "block" },
                  }}
               >
                  <Button
                     component={RouterLink}
                     to="/"
                     variant="outlined"
                     style={{
                        color: "white",
                        borderColor: "#909090",
                        marginRight: 14,
                     }}
                  >
                     Log In
                  </Button>
                  <Button
                     component={RouterLink}
                     to="/signup"
                     color="warning"
                     variant="contained"
                  >
                     Sign Up
                  </Button>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}
