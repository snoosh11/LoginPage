import React, { useState } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import type { AppTextFieldProps } from "../../types";
import styles from "./AppTextField.module.css";

export default function AppTextField({
  startIcon,
  passwordToggle = false,
  InputProps,
  type,
  ...props
}: AppTextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = passwordToggle ? (showPassword ? "text" : "password") : type;

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...props}
      type={inputType}
      fullWidth
      variant="outlined"
      margin="normal"
      InputProps={{
        ...InputProps,
        startAdornment: startIcon ? (
          <Box className={styles.startIcon}>{startIcon}</Box>
        ) : (
          InputProps?.startAdornment
        ),
        endAdornment: passwordToggle ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword((value) => !value)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              className={styles.visibilityButton}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          </InputAdornment>
        ) : (
          InputProps?.endAdornment
        ),
      }}
    />
  );
}
