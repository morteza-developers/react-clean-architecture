import React, { useMemo } from "react";
import styles from "./YearPicker.module.css";
import { getYears } from "../../utils/dateHelper/dateHelper";
import formatDate from "../../utils/format";
import { localizeNumber } from "../../utils";

interface YearPickerProps {
  value: Date;
  onYearSelect: (year: number) => void;
}

const YearPicker = (props: YearPickerProps) => {
  const currentYear = parseInt(
    formatDate(props.value, "YYYY", { numberingSystem: "latn" }),
    10,
  );
  const years: number[] = useMemo(() => getYears(props.value), []);
  const wrapperRef = React.useCallback((wrapper: HTMLDivElement) => {
    if (wrapper === null) {
      return;
    }
    const qu = wrapper.querySelector("button[data-selected=true]");
    if (qu != null) {
      const { height: wrapperHeight, top: wrapperTop } =
        wrapper.getBoundingClientRect();
      const { top } = qu.getBoundingClientRect();
      wrapper.scrollTop = Math.abs(wrapperTop - top) - wrapperHeight / 2;
    }
  }, []);

  return (
    <div className={styles.main} ref={wrapperRef}>
      {years.map((year) => (
        <button
          className={styles.year}
          key={year}
          data-selected={currentYear === year}
          onClick={() => props.onYearSelect(year)}
        >
          {localizeNumber(year)}
        </button>
      ))}
    </div>
  );
};

export default YearPicker;
