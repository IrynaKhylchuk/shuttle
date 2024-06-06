import React from "react";

import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";

interface FollowedArtists {
   id: string;
   name: string;
   images: { url: string }[];
   genres: string[];
}

interface FollowedArtistsProps {
   artist: FollowedArtists;
}

const FollowedArtists: React.FC<FollowedArtistsProps> = ({ artist }) => {
   const imageUrl = artist.images.length > 0 ? artist.images[1].url : "";

   return (
      <Card
         sx={{
            width: 170,
            maxHeight: 250,
            display: "flex",
            marginBottom: 2,
            backgroundColor: "#424242",
         }}
      >
         <CardActionArea>
            <CardMedia
               component="img"
               height="170px"
               width="100%"
               image={imageUrl}
               alt={artist.name}
            />
            <CardContent>
               <Typography
                  component="p"
                  fontSize={14}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
               >
                  {artist.name}
               </Typography>
               <Typography
                  component="span"
                  m={0}
                  fontSize={12}
                  variant="caption"
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
               >
                  {artist.genres.join(", ")}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default FollowedArtists;
