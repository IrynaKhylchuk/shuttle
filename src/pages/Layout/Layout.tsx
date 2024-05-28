import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import MainContainer from "../../components/MainContainer/MainContainer";


export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <Box height="100vh" display="flex" p={1}>
         {/* <Header /> */}
         <Sidebar>{children}</Sidebar>
         <MainContainer />
         {/* <Container maxWidth="lg" sx={{ flex: "1 1 auto", display: "flex", justifyContent: "top", flexDirection: "column" }}>
            <Outlet />
         </Container> */}
         {/* <Footer /> */}
      </Box>
   );
}
