import { Link as RouterLink } from "react-router-dom";

import { Link} from "@mui/material";

interface SidebarItemProps {
   icon: React.ElementType;
   href: string;
   label: string;
   active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, href }) => {
   return (
      <Link
         component={RouterLink}
         to={href}
         width="100%"
         height="auto"
         display="flex"
         flexDirection="row"
         alignItems="center"
         columnGap={2}
         fontSize={18}
         color={active ? "#ffffff" : "rgb(163 163 163)"}
         py={1}
         sx={{
            cursor: "pointer",
            transition: "color 150ms cubic-bezier(0.4, 0, 0.2, 1)",

            "&:hover": {
               color: "white",
            },
         }}
      >
         <Icon fontSize="medium" />
         <p
            style={{
               width: "100%",
               overflow: "hidden",
               textOverflow: "ellipsis",
               whiteSpace: "nowrap",
            }}
         >
            {label}
         </p>
      </Link>
   );
};

export default SidebarItem;
