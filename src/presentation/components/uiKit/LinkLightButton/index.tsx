import { Box, Button, ButtonPropsColorOverrides } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./LinkLigthButtonStyles";

type Props = {
  children?: ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | ("warning" & ButtonPropsColorOverrides);
  to: string;
  disabled?: boolean;
};
const LinkLightButton: FC<Props> = ({
  children,
  color = "primary",
  to,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.root}
      sx={{
        color: `${color}.main`,
        backgroundColor: `${color}.light`,
        whiteSpace: "nowrap",
      }}
    >
      {disabled ? (
        <span className={classes.disable}>{children}</span>
      ) : (
        <Link to={to}>{children}</Link>
      )}
    </Box>
  );
};

export default LinkLightButton;
