import { FC, ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};
const AnimateGroup: FC<Props> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default AnimateGroup;
