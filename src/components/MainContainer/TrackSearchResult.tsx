import { Box, Typography } from "@mui/material";

const TrackSearchResult = ({ track, chooseTrack }) => {
   const handlePlay = () => {
      chooseTrack(track);
   };

   return (
      <Box
         display="flex"
         alignItems="center"
         mr={1}
         mb={1}
         p={1}
         sx={{ borderRadius: 1, cursor: "pointer", transition: "background-color 0.3s", backgroundColor:"#222" }}
         onClick={handlePlay}
         onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#444";
         }}
         onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#222";
         }}
      >
         <img
            src={track.albumUrl}
            alt={track.title}
            style={{ borderRadius: 5, marginRight: 15 }}
            width={50}
            height={50}
         />
         <Box width="100%" overflow="hidden">
            <Typography
               component="div"
               variant="body2"
               fontSize={15}
               m={0}
               p={0}
               width="100%"
               overflow="hidden"
               textOverflow="ellipsis"
               whiteSpace="nowrap"
               textAlign="left"
            >
               {track.title}
            </Typography>
            <Typography
               component="div"
               variant="caption"
               fontSize={12}
               m={0}
               p={0}
               width="100%"
               overflow="hidden"
               textOverflow="ellipsis"
               whiteSpace="nowrap"
               textAlign="left"
            >
               {track.artist}
            </Typography>
         </Box>
      </Box>
   );
};

export default TrackSearchResult;
