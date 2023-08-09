import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  ...rest
}: any) => {
  return (
    <MuiButton variant={variant} color={color} onClick={onClick} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
