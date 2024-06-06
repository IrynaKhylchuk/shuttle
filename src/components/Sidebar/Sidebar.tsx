import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import Box from "@mui/material/Box";

const Sidebar: React.FC = () => {
   const location = useLocation();
   const pathname = location.pathname;

   const routes = useMemo(
      () => [
         {
            icon: HomeIcon,
            label: "Home",
            active: pathname !== "/search",
            href: "/home",
         },
         {
            icon: SearchOutlinedIcon,
            label: "Search",
            active: pathname === "/search",
            href: "/search",
         },
      ],
      [pathname]
   );

   return (
      <Box
         display="flex"
         flexDirection="column"
         position="fixed"
         left={8}
         top={8}
         height="calc(100% - 96px)"
      >
         <Box
            display={{ xs: "none", md: "flex" }}
            flexDirection="column"
            rowGap={1}
            bgcolor="black"
            height="100%"
            width="300px"
            pr={1}
         >
            <Box
               display="flex"
               bgcolor="#222"
               borderRadius={1}
               flexDirection="column"
               rowGap={2}
               sx={{ padding: "16px 20px" }}
            >
               {routes.map((item) => (
                  <SidebarItem key={item.label} {...item} />
               ))}
            </Box>
            <Box
               bgcolor="#222"
               borderRadius={1}
               sx={{
                  flex: "1 1 auto",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
               }}
            >
               <Library />
            </Box>
         </Box>
      </Box>
   );
};

export default Sidebar;
