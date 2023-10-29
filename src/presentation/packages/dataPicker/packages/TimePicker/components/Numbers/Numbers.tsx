import {
  hours,
  hours24,
  minutes,
  numberPositionX,
  numberPositionY,
} from "../../../../utils/timePicker";
import styles from "./Numbers.module.css";
import { localizeNumber } from "../../../../utils";
import type { NumbersProps } from "./Numbers.types";

export const Hours = ({ clockTime, hourSelecting }: NumbersProps) => {
  if (!hourSelecting) {
    return (
      <div className={styles.minute_animation}>
        {minutes.map((m, i) => (
          <span
            className={styles.numbers_item}
            style={{
              translate: `${numberPositionX(i)}px  ${numberPositionY(i)}px`,
            }}
            key={m}
          >
            {localizeNumber(m)}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.minute_animation}>
      {hours.map((m, i) => (
        <span
          className={styles.numbers_item}
          style={{
            translate: `${numberPositionX(i)}px  ${numberPositionY(i)}px`,
          }}
          key={m}
        >
          {localizeNumber(m)}
        </span>
      ))}
    </div>
  );
};

export default Hours;
