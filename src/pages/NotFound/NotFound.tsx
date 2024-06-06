import { Box, Typography } from "@mui/material";
import not_found from "../../../public/images/not found/not_found.gif";

export default function NotFound() {
   return (
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" bgcolor="#222">
         <img src={not_found} alt="not found" style={{ width: "300px", height: "auto" }} />
         <Typography component="h1" variant="h1">
            Oops..!
         </Typography>
         <Typography component="p" variant="body1">
            Sorry, we couldn't find this page. But don't worry, you can find plenty of other things on our homepage.
         </Typography>
      </Box>
   );
}
