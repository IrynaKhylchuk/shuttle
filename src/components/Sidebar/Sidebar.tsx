import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CustomBox from "./CustomBox";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import Box from "@mui/material/Box";

interface SidebarProps {
   children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
   const location = useLocation();
   const pathname = location.pathname;

   const routes = useMemo(
      () => [
         {
            icon: HomeIcon,
            label: "Home",
            active: pathname !== "/search",
            href: "/",
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
      <Box display="flex" height="100%">
         <Box display={{ xs: "none", md: "flex" }} flexDirection="column" rowGap={1} bgcolor="black" height="100%" width="300px" pr={1}>
            <CustomBox>
               <Box display="flex" flexDirection="column" rowGap={2} sx={{ padding: "16px 20px" }}>
                  {routes.map((item) => (
                     <SidebarItem key={item.label} {...item} />
                  ))}
               </Box>
            </CustomBox>
            <CustomBox height="100%" sx={{ overflowY: "auto", height: "100%" }}>
               <Library />
            </CustomBox>
         </Box>
      </Box>
   );
};

export default Sidebar;
