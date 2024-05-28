import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface SidebarItemProps {
   icon: React.ElementType;
   label: string;
   active?: boolean;
   href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, href }) => {
   return (
      <Link
         component={RouterLink}
         to={href}
         display="flex"
         flexDirection="row"
         height="auto"
         alignItems="center"
         width="100%"
         columnGap={2}
         fontSize={18}
         color={active ? "#ffffff" : "rgb(163 163 163)"}
         sx={{
            padding: "4px 0",
            cursor: "pointer",
            transition: 'color 150ms cubic-bezier(0.4, 0, 0.2, 1)',

            "&:hover": {
               color: "white",
            },
         }}
      >
         <Icon fontSize="medium" />
         <Typography component="p" width="100%" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
            {label}
         </Typography>
      </Link>
   );
};

export default SidebarItem;
