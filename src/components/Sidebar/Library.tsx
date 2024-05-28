"use client";

import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";

import AddIcon from "@mui/icons-material/Add";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const IconWrapper = styled(IconButton)(({ theme }) => ({
   color: "theme.palette.text.secondary",
   "&:hover": {
      color: theme.palette.common.white,
      transition: "color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
   },
}));

interface LibraryProps {
   children: React.ReactNode;
}

const Library: React.FC<LibraryProps> = ({ children }) => {
   const handleClick = () => {
      //later
   };

   return (
      <Box display="flex" flexDirection="column">
         <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ padding: "16px 20px 0" }}>
            <Box display="inline-flex" alignItems="center" columnGap={1}>
               <QueueMusicIcon fontSize="medium" sx={{ color: "rgb(163 163 163)" }} />
               <Typography component="p" color="rgb(163 163 163)" fontSize="18px" fontWeight="500">
                  Your Library
               </Typography>
            </Box>
            <IconWrapper onClick={handleClick}>
               <AddIcon sx={{ color: "rgb(163 163 163)" }} />
            </IconWrapper>
         </Box>
         <Box display="flex" flexDirection="column" columnGap={1} mt={2} sx={{padding: "0 12px"}}>List of Songs</Box>
         <Box component="main" height="100%" sx={{flex: "1 1 0%", overflowY: "auto", padding: "8px 0"}}>{children}</Box>
      </Box>
   );
};

export default Library;
