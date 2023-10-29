import localeCache from "../../utils/locale";
import locales from "../../utils/locales";
import styles from "./Month.module.css";
import formatDate from "../../utils/format";

interface MonthPickerProps {
  value: Date;
  onMonthSelect: (month: number) => void;
}

export const MonthPicker = (props: MonthPickerProps) => {
  const { locale } = localeCache;
  const currentMonth = formatDate(props.value, "MM", {
    numberingSystem: "latn",
  });

  return (
    <div className={styles.main}>
      {locales[locale].months.map((month) => (
        <button
          className={styles.month}
          key={month.key}
          data-selected={month.key === parseInt(currentMonth, 10)}
          onClick={() => props.onMonthSelect(month.key)}
        >
          {month.name}
        </button>
      ))}
    </div>
  );
};

export default MonthPicker;
