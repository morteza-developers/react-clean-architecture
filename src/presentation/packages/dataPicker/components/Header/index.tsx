import IconButton from "../IconButton";
import ChevronRight from "../Icons/ChevronRight";
import ChevronLeft from "../Icons/ChevronLeft";

import styles from "./Header.module.css";
interface HeaderProps {
  monthName: string;
  onNextClick: () => void;
  onPrevClick: () => void;
  onClickOnTitle: () => void;
}

const Header = (props: HeaderProps) => {
  return (
    <div className={styles.main}>
      <IconButton onClick={props.onPrevClick}>
        <ChevronRight />
      </IconButton>
      <button className={styles.header_title} onClick={props.onClickOnTitle}>
        {props.monthName}
      </button>
      <IconButton onClick={props.onNextClick}>
        <ChevronLeft />
      </IconButton>
    </div>
  );
};

export default Header;
