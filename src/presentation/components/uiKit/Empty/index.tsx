import { Typography } from "@mui/material";
import styles from "./empty.module.css";
import { FC, ReactNode } from "react";

type Props = {
  action?: ReactNode;
  title?: string | null;
};
const Empty: FC<Props> = ({ action, title = "" }) => {
  return (
    <div className={styles.notFound}>
      <span className="icon icon-empty"></span>
      <Typography align="center" variant="h6">
        {title}
      </Typography>
      <div className={styles.action}>{action}</div>
    </div>
  );
};

export default Empty;
