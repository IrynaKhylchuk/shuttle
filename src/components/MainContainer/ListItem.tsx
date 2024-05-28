import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const CustomButton = styled(Button)({
   width: "100%",
   position: "relative",
   display: "flex",
   alignItems: "center",
   justifyContent: "left",
   borderRadius: "md",
   overflow: "hidden",
   backgroundColor: "rgba(0, 0, 0, 0.1)",
   transition: "background-color 0.3s ease",
   paddingRight: "4px",

   "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
   },
});

interface ListItemProps {
   path: string;
   name: string;
   href: string;
}

const ListItem: React.FC<ListItemProps> = ({ path, name, href }) => {
   const navigate = useNavigate();

   const onClick = () => {
      navigate(href);
   };

   return (
      <CustomButton onClick={onClick}>
         <Box position="relative" maxHeight="64px" maxWidth="64px" mr={2}>
            <img src={path} alt="liked" style={{ width: "100%", height: "auto" }} />
         </Box>
         <Typography overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" sx={{ padding: "20px 0", fontSize: "18px", textTransform: "camelcase" }} component="p">
            {name}
         </Typography>
         <Box
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="#ffa726"
            p={1}
            right={10}
            sx={{
                transition: "opacity 0.3s ease",
                opacity: 0,
                borderRadius: "50%",
                boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
        
                "&:hover": {
                  transform: "scale(1.1)",
                  opacity: 1,
                },
              }}
         >
            <PlayArrowIcon sx={{ color: "white" }} />
         </Box>
      </CustomButton>
   );
};

export default ListItem;
