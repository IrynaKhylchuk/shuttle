import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//pages
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

import {
   headerRoutes,
   footerRoutesColOne,
   footerRoutesColTwo,
   footerRoutesColThree,
   footerRoutesColFour,
   footerRoutesColFive,
} from "./routes";

const theme = createTheme({
   palette: {
      primary: {
        main: "#ffa726",
      },
    },
   components: {
      MuiLink: {
         styleOverrides: {
            root: {
               fontFamily: '"Titillium Web", sans-serif',
               fontWeight: 500,
               color: "white",
               textDecoration: "none",
               fontStyle: "normal",
            },
         },
      },
      MuiTypography: {
         styleOverrides: {
            root: {
               fontFamily: '"Titillium Web", sans-serif',
               fontWeight: 400,
               fontSize: 18,
               color: "white",
               fontStyle: "normal",
            },
            h1: {
               fontWeight: 700,
               fontSize: 60,
            },
            h4: {
               fontSize: 36,
            },
            h6: {
               fontSize: 26,
            },
            caption: {
               fontWeight: 400,
               fontSize: "16px",
               color: "#777",
               marginLeft: "5px",
            },
         },
      },
      MuiButton: {
         styleOverrides: {
            root: {
               fontFamily: '"Titillium Web", sans-serif',
               fontSize: 18,
               fontWeight: 500,
               backgroundColor: "#E24648",
               "&:hover": {
                  backgroundColor: "#cd4743",
               },
            },
         },
      },
   },
});

const generateRoutes = (routes, layout) =>
   routes
      .filter((route) => route.layout === layout)
      .map((route) => <Route key={route.id} path={route.layout + route.path} element={route.component} />);

const App: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <Router>
            <Routes>
               <Route path="*" element={<NotFound />} />
               <Route path="/" element={<LogIn />} />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/home" element={<Layout />}>
                  {generateRoutes(headerRoutes, "/home")}
                  {generateRoutes(footerRoutesColOne, "/home")}
                  {generateRoutes(footerRoutesColTwo, "/home")}
                  {generateRoutes(footerRoutesColThree, "/home")}
                  {generateRoutes(footerRoutesColFour, "/home")}
                  {generateRoutes(footerRoutesColFive, "/home")}
               </Route>
            </Routes>
         </Router>
      </ThemeProvider>
   );
}

export default App;
