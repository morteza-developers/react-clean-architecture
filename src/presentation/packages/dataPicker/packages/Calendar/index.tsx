import {
  type ForwardedRef,
  forwardRef,
  useMemo,
  useRef,
  useState,
  ReactNode,
} from "react";
import styles from "./Calender.module.css";
import Header from "../../components/Header";
import { useSlideCalendar } from "../../hooks/useSlideCalendar";
import {
  isInBetween,
  sameDay,
  selectMonth,
  selectYear,
} from "../../utils/dateHelper/dateHelper";
import formatDate from "../../utils/format";
import getDays from "../../utils/month";
import MonthPicker from "../../components/MonthPicker";
import YearPicker from "../../components/YearPicker";
import locales from "../../utils/locales";
import localeCache from "../../utils/locale";
import type { DaysInMonth } from "../../utils/month/month.types";
import type { DatePickerValue, DaysRange, Pickers } from "../../types";
import useCalendarHandlers from "../../hooks/useCalendarHandlers";
import CalendarItem from "../../components/CalendarItem";

interface CalendarProps {
  value: Date;
  onChange: (day: Date, to?: Date) => void;
  weekend?: DaysRange;
  rangeValue?: Date[];
  range?: boolean;
  from?: DatePickerValue | null;
  to?: DatePickerValue | null;
  views?: Pickers;
  disableFuture?: boolean;
  disablePass?: boolean;
  actions?: () => ReactNode;
}

const Calendar = (
  {
    views,
    from,
    to,
    value,
    onChange,
    weekend,
    range = false,
    disableFuture = false,
    disablePass = false,
    actions = () => null,
  }: CalendarProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const { locale } = localeCache;
  const currentDate = useMemo(() => new Date().getTime(), []);
  // memo
  const getAllDays = useMemo(() => getDays({ date: value }), []);
  // states
  const [days, setDays] = useState<DaysInMonth[]>([getAllDays]);
  const [picker, setPicker] = useState<Pickers>(views || "days");
  // refs
  const daysElementRefs = useRef<HTMLDivElement[]>([]);
  // handlers
  const slideHandlers = useSlideCalendar({
    daysElementRefs,
    value: days?.[0]?.middleOfMonth,
    days,
    setDays,
  });
  const {
    from: calendarFrom,
    to: calendarTo,
    handlers,
  } = useCalendarHandlers({
    dayValue: value,
    range,
    onChange,
    from: from,
    to: to,
  });

  const togglePickers = () => {
    if (picker === "month" || picker === "year") {
      !views && setPicker("days");
      return;
    }
    !views && setPicker("year");
  };
  const handleMonthSelect = (month: number) => {
    const date = selectMonth(days?.[0]?.middleOfMonth, month);
    onChange(date);
    setDays([getDays({ date })]);
    !views && setPicker("days");
  };
  const handleYearSelect = (year: number) => {
    const date = selectYear(value, year);
    onChange(date);
    setDays([getDays({ date })]);
    !views && setPicker("month");
  };

  const handleNextMonth = () => {
    if (picker === "days") {
      return slideHandlers.slideToTheNextMonth();
    }
  };
  const handlePrevMonth = () => {
    if (picker === "days") {
      return slideHandlers.slideToPrevMonth();
    }
  };
  const isDisableDay = (disable: boolean, day: Date): boolean => {
    const timeStamp = day.getTime() + 86400000;
    if (disableFuture) {
      if (currentDate < timeStamp) return true;
    }
    if (disablePass) {
      if (currentDate > timeStamp) return true;
    }
    return disable;
  };
  return (
    <div ref={ref} className={styles.main}>
      <Header
        monthName={days?.[0]?.monthName}
        onNextClick={handleNextMonth}
        onPrevClick={handlePrevMonth}
        onClickOnTitle={togglePickers}
      />
      {picker === "year" ? (
        <YearPicker value={value} onYearSelect={handleYearSelect} />
      ) : null}
      {picker === "month" ? (
        <MonthPicker value={value} onMonthSelect={handleMonthSelect} />
      ) : null}
      {picker === "days" ? (
        <>
          <div className={styles.sub_header}>
            {locales[locale].shortWeekDays.map((day) => (
              <div className={styles.day_name} key={day.key}>
                {day.name}
              </div>
            ))}
          </div>
          <div className={styles.days}>
            {days.map((weeks, idx) => (
              <div
                key={weeks.id}
                className={`item ${styles.day_item}`}
                ref={(el: HTMLDivElement) => {
                  daysElementRefs.current[idx] = el;
                }}
              >
                {weeks.weeks.map((week, id) => (
                  <div key={id} className={styles.day}>
                    {week.map((day, idx) => (
                      <CalendarItem
                        key={day.date.getTime()}
                        data-value={day.date}
                        disabled={isDisableDay(day.disabled, day.date)}
                        data-range={range}
                        data-selected={!range && sameDay(value, day.date)}
                        data-start-range={
                          calendarFrom && sameDay(calendarFrom, day.date)
                        }
                        data-in-range={isInBetween(
                          day.date,
                          calendarFrom,
                          calendarTo
                        )}
                        data-end-range={
                          calendarTo && sameDay(calendarTo, day.date)
                        }
                        data-weekend={weekend === idx}
                        {...handlers}
                      >
                        {formatDate(day.date, "DD")}
                      </CalendarItem>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : null}

      <div>{actions()}</div>
    </div>
  );
};

export default forwardRef(Calendar);
