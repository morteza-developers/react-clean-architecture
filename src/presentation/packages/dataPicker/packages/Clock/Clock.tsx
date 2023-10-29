import { useMemo, useState } from "react";
import Numbers from "./components/Numbers";
import type { ClockProps } from "./Clock.types";
import { localizeNumber } from "../../utils";
import { useTimePicker } from "../../hooks/useTimePicker";
import localeCache from "../../utils/locale";
import styles from "./Clock.module.css";
export const Clock = ({
  defaultValue,
  onChange,
  locale,
  actions = () => null,
  defaultValueFormat,
}: ClockProps) => {
  useMemo(() => locale && localeCache.setLocale(locale), [locale]);
  const [timeConvention, setTimeConvention] = useState<"am" | "pm">("am");

  const {
    hour,
    minute,
    isInsideHour,
    selectingHour,
    handleMouseMove,
    handleMouseUp,
    handleSelecting,
    handleBackToHour,
  } = useTimePicker({
    defaultValue,
    timeConvention,
    onChange,
    setTimeConvention,
    defaultValueFormat,
  });

  return (
    <>
      <div className={styles.time_wrapper}>
        <div className={styles.time}>
          <span className={selectingHour ? styles.active_time : ""}>
            {localizeNumber(hour)}
          </span>
          :
          <span className={selectingHour ? "" : styles.active_time}>
            {localizeNumber(minute)}
          </span>
        </div>
        {selectingHour ? (
          <div className={styles.select_time}>
            <select
              value={timeConvention}
              onChange={(e: any) => setTimeConvention(e.target.value)}
            >
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select>
          </div>
        ) : (
          <button className={styles.back_time} onClick={handleBackToHour}>
            بازگشت
          </button>
        )}

        <div
          className={styles.clock}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseDown={handleSelecting}
          onTouchMove={handleSelecting}
          onTouchEnd={handleMouseUp}
        >
          <div
            className={`${styles.hand} ${
              isInsideHour ? styles.inside_hour : ""
            }`}
            style={{
              transform: selectingHour
                ? `rotateZ(${(hour / 12) * 360}deg)`
                : `rotateZ(${(minute / 60) * 360}deg)`,
            }}
          >
            <div className={styles.hand_circle}></div>
          </div>
          <Numbers insideHour={isInsideHour} hourSelecting={selectingHour} />
        </div>
        <div className={styles.actions}>{actions()}</div>
      </div>
    </>
  );
};

export default Clock;
