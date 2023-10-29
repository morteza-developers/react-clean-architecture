import { Box, SxProps, Theme } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";
type Props = {
  children?: ReactNode | null;
  sx?: SxProps<Theme>;
  to: string;
  disable?: boolean;
};
const LinkButton: FC<Props> = ({ children, sx, to, disable }) => {
  return (
    <Box pl={1} pr={1} sx={sx}>
      {disable ? (
        <span className={styles.disable}>{children}</span>
      ) : (
        <Link to={to} className={styles.link_style}>
          {children}
        </Link>
      )}
    </Box>
  );
};

export default LinkButton;
