import { Box, BoxProps } from "@mui/system";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CustomButton from "./CustomButton";

interface HeaderProps extends BoxProps {
   children: React.ReactNode;
   props?: string;
}

const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
   const navigate = useNavigate();
   const handleLogout = () => {
      //logout
   };

   return (
      <Box height="fit-content" p={2} sx={{ backgroundImage: "linear-gradient(to bottom, #93621b, transparent)" }} {...props}>
         <Box width="full" display="flex" alignItems="center" justifyContent="space-between" mb={2}>
            <Box display={{ xs: "none", md: "flex" }} columnGap={1} alignItems="center">
               <IconButton onClick={() => navigate(-1)}>
                  <ArrowBackIosNewIcon fontSize="small" />
               </IconButton>
               <IconButton onClick={() => navigate(1)}>
                  <ArrowForwardIosIcon fontSize="small" />
               </IconButton>
            </Box>
            <Box display={{ xs: "flex", md: "none" }} columnGap={1} alignItems="center">
               <IconButton>
                  <HomeIcon />
               </IconButton>
               <IconButton>
                  <SearchOutlinedIcon />
               </IconButton>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" columnGap={2}>
               <>
                  <Box>
                     <CustomButton onClick={() => {}} > Sign Up </CustomButton>
                     <CustomButton onClick={() => {}} > Log In </CustomButton>
                  </Box>
               </>
            </Box>
         </Box>
         {children}
      </Box>
   );
};

export default Header;
