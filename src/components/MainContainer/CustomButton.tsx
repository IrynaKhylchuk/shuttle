import { forwardRef } from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const StyledButton = styled(Button)(() => ({
   width: "110px",
   marginLeft: "10px",
   borderRadius: "9999px",
   backgroundColor: "#ffa726",
   borderWidth: "1px",
   borderColor: "transparent",
   color: "#ffffff",
   fontWeight: "700",
   fontSize: "18px",
   padding: "8px 16px",
   transition: "color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
   textTransform: "none",
   "&:hover": {
      opacity: 0.75,
   },
   "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.5,
   },
}));

interface CustomButtonProps extends ButtonProps {}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(({ children, disabled, ...props }, ref) => {
   return (
      <StyledButton type="button" ref={ref} {...props} disabled={disabled}>
         {children}
      </StyledButton>
   );
});

CustomButton.displayName = "CustomButton";

export default CustomButton;
