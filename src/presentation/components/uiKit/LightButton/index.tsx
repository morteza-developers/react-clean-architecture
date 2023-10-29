import {
  Button,
  ButtonPropsColorOverrides,
  ButtonPropsSizeOverrides,
  SxProps,
  Theme,
} from "@mui/material";
import { FC, MouseEventHandler, ReactNode } from "react";
import { OverridableStringUnion } from "@mui/types";
type Props = {
  disabled?: boolean;
  children?: ReactNode;
  color?: OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning",
    ButtonPropsColorOverrides
  >;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: OverridableStringUnion<
    "small" | "medium" | "large",
    ButtonPropsSizeOverrides
  >;
  sx?: SxProps<Theme>;
};

const LightButton: FC<Props> = ({
  children,
  color = "primary",
  onClick,
  size,
  sx,
  ...res
}) => {
  return (
    <Button
      {...res}
      onClick={onClick}
      size={size}
      sx={{ color: `${color}.main`, backgroundColor: `${color}.light`, ...sx }}
    >
      {children}
    </Button>
  );
};

export default LightButton;
