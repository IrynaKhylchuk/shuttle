import { Link as RouterLink } from "react-router-dom";

import Link from "@mui/material/Link";

export default function Logo() {
   return (
      <Link
         component={RouterLink}
         to="/home"
         variant="h1"
         underline="none"
         fontFamily="Arial"
         fontWeight="700"
         noWrap
         sx={{
            mr: 2,
            display: "flex",
            fontFamily: "Arial",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            alignItems: "center",
            fontSize: 20,
            lineHeight: "20px",
         }}
      >
         <img
            src="../../../public/favicon.png"
            alt="logo"
            style={{
               height: 35,
               width: 35,
               marginRight: "5px",
            }}
         />
         SHUTTLE
      </Link>
   );
}
