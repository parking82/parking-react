import React from "react";
import { TextField } from "@mui/material";

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  register,
  ...rest
}: any) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      variant="outlined"
      fullWidth
      InputLabelProps={{ shrink: true }}
      {...register}
      {...rest}
    />
  );
};

export default Input;
