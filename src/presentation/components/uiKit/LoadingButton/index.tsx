// components
import { Button, ButtonPropsColorOverrides } from "@mui/material";
import styles from "./LoadingButton.module.css";
// utils

import {
  forwardRef,
  ForwardedRef,
  ReactNode,
  MouseEventHandler,
  CSSProperties,
} from "react";
import { Box, LinearProgress } from "@mui/material";

/**
 * @component LoadingButton
 */

type Props = {
  loading?: boolean;
  variant?: "text" | "outlined" | "contained";
  disabled?: boolean;
  children?: ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | ("warning" & ButtonPropsColorOverrides);
  className?: string;
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  type?: "button" | "reset" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  startIcon?: ReactNode;
};
function LoadingButton(
  {
    loading,
    disabled,
    children,
    color = "primary",
    className = "",
    size,
    ...res
  }: Props,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <Button
      disabled={disabled || loading}
      className={`${styles.main} ${className}`}
      {...res}
      ref={ref}
      size={size}
      color={color}
    >
      {children}
      {loading && (
        <Box className={styles.loading}>
          <LinearProgress />
        </Box>
      )}
    </Button>
  );
}

export default forwardRef(LoadingButton);
