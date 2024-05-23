import { Box } from "@mui/material";
import { Route } from "../../../routes";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

interface FooterColumnProps {
   routes: Route[];
}

export default function FooterColumn({ routes }: FooterColumnProps) {
   return (
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
         {routes.map((item: Route) => (
            <Link
               key={item.id}
               variant="body2"
               underline="none"
               fontFamily="Arial"
               fontWeight="400"
               sx={{
                  margin: 1,
                  mb: 2,
                  color: "white",
                  display: "block",
                  transition: "color 0.3s ease",
                  "&:hover": {
                     color: "#ffa726",
                  },
                  "&:active": {
                     textDecoration: "underline",
                  },
               }}
               component={RouterLink}
               to={item.layout + item.path}
            >
               {item.name}
            </Link>
         ))}
      </Box>
   );
}
