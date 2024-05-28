import { Box, BoxProps } from "@mui/system";

interface CustomBoxProps extends BoxProps {
   children: React.ReactNode;
   props?: string;
}

const CustomBox: React.FC<CustomBoxProps> = ({ children, ...props }) => {
   return (
      <Box bgcolor="#333" borderRadius={1} height="fit-content" width="100%" {...props}>
         {children}
      </Box>
   );
};

export default CustomBox;
