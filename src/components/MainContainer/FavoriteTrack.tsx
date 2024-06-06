import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";

interface Track {
   id: string;
   name: string;
   artists: { name: string }[];
   album: { images: { url: string }[] };
}

interface FavoriteTrackProps {
   track: Track;
}

const FavoriteTrack: React.FC<FavoriteTrackProps> = ({ track }) => {
   const imageUrl = track.album.images.length > 0 ? track.album.images[1].url : "";

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
               alt={track.name}
            />
            <CardContent>
               <Typography
                  component="p"
                  fontSize={14}
                  overflow="hidden"
                  textOverflow="ellipsis"
                  whiteSpace="nowrap"
               >
                  {track.name}
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
                  {track.artists.map((artist) => artist.name).join(", ")}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default FavoriteTrack;
