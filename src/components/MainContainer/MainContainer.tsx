import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Header from "./Header";
import ListItem from "./ListItem";
import img from "../../../public/images/liked.png";

export default function MainContainer() {
   return (
      <Box bgcolor="#333" borderRadius={1} height="100%" width="100%" overflow="hidden" sx={{ overflowY: "auto" }}>
         <Header>
            <Box mb={1}>
               <Typography component="h1" color="white" fontSize={30} fontWeight={600}>
                  Welcome back
               </Typography>
               <Grid container spacing={3} mt={4}>
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                     <ListItem path={img} name="Liked Songs" href="liked"/>
                  </Grid>
               </Grid>
            </Box>
         </Header>
         <Box sx={{padding: "8px 24px 28px"}}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
               <Typography variant="h1" component="h2" color="white" fontSize={24} fontWeight={600}>Newest songs</Typography>
            </Box>
            <Box>
               List of songs!
            </Box>
         </Box>
      </Box>
   );
}
