import { Card, CardContent, CardActionArea, CardMedia, Typography } from "@mui/material";

interface Artist {
   id: string;
   name: string;
   images: { url: string }[];
   genres: string[];
   popularity: number;
   followers: { total: number };
}

interface FavoriteArtistProps {
   artist: Artist;
}

const FavoriteArtist: React.FC<FavoriteArtistProps> = ({ artist }) => {
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
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default FavoriteArtist;
