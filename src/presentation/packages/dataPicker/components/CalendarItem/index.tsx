import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./CalendarItem.module.css";
type CalendarItemProps = {
  selected?: boolean;
  range?: boolean;
  disabled?: boolean;
  width?: number;
  height?: number;
  children?: ReactNode | string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const CalendarItem: FC<CalendarItemProps> = ({ children, ...res }) => {
  return (
    <button className={styles.main} {...res}>
      <div className="cl-text">{children}</div>
    </button>
  );
};

export default CalendarItem;
