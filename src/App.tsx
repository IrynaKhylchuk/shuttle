import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./components/MainContainer/Home";
import Search from "./components/MainContainer/Search";
import "./App.css";

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
            },
         },
      },
   },
});

const App: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <Router>
            <Routes>
               <Route path="/" element={<Layout/>}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/search" element={<Search/>}/>
               </Route>
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Router>
      </ThemeProvider>
   );
};

export default App;
